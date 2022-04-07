import { readdirSync } from "fs";
import type { Application } from "express";
import type { Connection } from "mongoose";

export class Requests {
    private app: Application;
    private conn: Connection;
    constructor(app: Application, conn: Connection){
        this.app = app;
        this.conn = conn;

        const files = readdirSync(`src/requests`).filter(f => f.endsWith('.ts')); //or .js
        for(const file of files){
            const request = require(`../requests/${file}`);
            request.execute(app); //later conn if needed.
        }
    }
}