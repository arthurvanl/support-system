import type { Application, Request, Response } from "express";

export = {
    name: 'Register',
    href: '/register',
    async execute(app: Application){

        app.get('/register', (req: Request, res: Response) => {
            res.render('register');
        });
    }
}