import express = require("express");
import session = require("express-session");
import mongoose = require ("mongoose");
import morgan = require("morgan");
import mo = require("method-override");

import type { Application, Request, Response } from "express";
import type { UserData } from "./typings";
import { checkAdmin } from "./functions/checkAdmin";
import { Requests } from "./functions/request";

require("dotenv").config();

const app: Application = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(mo(function(req, res){
    if(req.body && typeof req.body == 'object' && '_method' in req.body){
        let method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

declare module 'express-session' { 
    interface SessionData {
        user: UserData
    }
}


app.use(session({
    secret: process.env.SESSION_SECRET ?? '',
    resave: false,
    cookie: {
        secure: false,
        httpOnly: true
    },
    saveUninitialized: false
}));

mongoose.connect(process.env.DB_URI ?? '')
.then((res) => {
    console.log("Support System is online!");
    checkAdmin();
    app.listen(process.env.PORT, () => console.log("HTTP Server is online! (PORT: "+process.env.PORT+")"));
    
    new Requests(app, res.connection);

    app.use((req: Request, res: Response) => {
    
        res.status(404).render('404');
    });
})
.catch((err: string) => {
    console.error(err);
});