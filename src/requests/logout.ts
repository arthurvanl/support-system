import { Application, Request, Response } from "express";

export = {
    async execute(app: Application){
        app.post('/logout', async (req: Request, res: Response) => {
            req.session.destroy((err: Error) => {
                console.error(err);
            });
            res.redirect('/login');
        });
    }
}