import { Application, Request, Response } from "express";

export = {
    async execute(app: Application){
        app.get('/', async (req: Request, res: Response) => {
            res.render('index', {title: 'Home'});
        });
    }
}