import crypto = require("crypto");
import type { Application, Request, Response } from "express";
import { checkAdmin } from "../functions/checkAdmin";
import { Admin } from "../models/admin";
import { User } from "../models/user";
import { UserRole } from "../typings";

export = {
    name: 'Register',
    href: '/register',
    async execute(app: Application){

        app.get('/register', (req: Request, res: Response) => {
            res.render('register', {title: 'Register'});
        });

        app.post('/register', async (req: Request, res: Response) => {
            const user = await User.findOne({email: req.body.email});
            if(!user){
                const salt = crypto.randomBytes(16).toString('hex');
                let hash_password;

                crypto.pbkdf2(req.body.password, salt, 10000, 64, 'sha512', function(err: Error|null, deviredKey: Buffer){
                    if(err)
                        return console.error(err);

                    hash_password = deviredKey.toString('hex');
                });

                let adminData = await Admin.findByIdAndUpdate('admindata', {$inc: {users: 1}}, {new: true});
                if(!adminData){
                    checkAdmin();
                    adminData = await Admin.findByIdAndUpdate('admindata', {$inc: {users: 1}}, {new: true});
                }
                
                const newUser = await new User({
                    _id: adminData?.users,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    role: UserRole.Customer,
                    salt: salt,
                    hash_password: hash_password
                }).save();
                req.session.user = newUser;
                // res.redirect('client');
                console.log('user created account')
            } else {
                //return with error message that user already exist.
                console.log('user does exist');
            }
        });
    }
}