import type { Application, Request, Response } from "express";
import { requiresRights } from "../functions/sessions";

export = {
    name: 'Admin',
    href: '/Admin',
    async execute(app: Application){

        app.get('/Admin', requiresRights, (req: Request, res: Response) => {
            res.render('Admin', {title: 'Admin'});
        });

    }
}