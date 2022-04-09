import type { Request, Response, NextFunction } from "express";
import { UserRole } from "../typings";

function requiresLogin(req: Request, res: Response, next: NextFunction){
    if(req.session && req.session.user){
        next();
    } else {
        res.redirect('/login');
    }
}

function requiresRights(req: Request, res: Response, next: NextFunction){
    if(req.session && req.session.user !== undefined && req.session.user.role != UserRole.Customer){
        next();
    } else {
        res.redirect('/login');
    }
}

function requiresAdmin(req: Request, res: Response, next: NextFunction){
    if(req.session && req.session.user && req.session.user.role == UserRole.Admin){
        next();
    } else {
        res.redirect('/login');
    }
}

export { requiresLogin, requiresRights, requiresAdmin };