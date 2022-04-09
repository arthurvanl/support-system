import type { Application, Request, Response } from "express";
import { requiresLogin } from "../functions/sessions";

export = {
    name: 'Client',
    href: '/Client',
    async execute(app: Application){

        app.get('/client', requiresLogin, (req: Request, res: Response) => {
            res.render('client', {title: 'Client'});  
        });

    }
}