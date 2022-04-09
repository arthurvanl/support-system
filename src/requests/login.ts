import crypto = require("crypto");
import { Application, Request, Response } from "express";
import { User } from "../models/user";
import { UserRole } from "../typings";

export = {
    name: 'Login',
    href: '/login',
    async execute(app: Application){
        app.get('/login', (req: Request, res: Response) => {
            res.render('login', {title: this.name});
        });

        app.post('/login', async (req: Request, res: Response) => {

            const user = await User.findOne({email: req.body.email});
            if(!user){
                //return no user found
                return console.log("user not found")
            }
            crypto.pbkdf2(req.body.password, user.salt, 10000, 64, 'sha512', function(err: Error|null, deviredKey: Buffer){
                if(err){
                    return console.error(err);
                }
                
                if(user.hash_password == deviredKey.toString('hex')){
                    req.session.user = user;
                    if(user.role == UserRole.Customer){
                        res.redirect('/client');
                    } else {
                        res.redirect('/admin');
                    }
                } else {
                    console.log("password incorrect");
                }
            });
        });
    }
}