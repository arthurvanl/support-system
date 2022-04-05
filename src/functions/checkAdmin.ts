import crypto = require("crypto");

import { Admin } from "../models/admin";
import { User } from "../models/user";
import { UserRole } from "../typings";

function checkAdmin(): void {
    
    Admin.findById('admindata').then((res) => {
        if(!res){
            new Admin({
                _id: 'admindata',
                users: 1,
                tickets: {
                    opened: 0,
                    closed: 0,
                    total: 0
                },
            }).save()
            .then((res) => {
                console.log("Successfully created admindata!");
            })
            .catch((err: string) => {
                console.error(err);
            });
        }
    })
    .catch((err: string) => {
        console.error(err);
    });

    User.findOne({email: process.env.ADMIN_EMAIL}).then((res) => {
        if(!res){
            const salt = crypto.randomBytes(16).toString('hex');

            crypto.pbkdf2(process.env.ADMIN_PASSWORD ?? '', salt, 10000, 64, 'sha512', function(err: Error|null, deviredKey: Buffer){
                if(err)
                    return console.error(err.stack);

                new User({
                    _id: 1,
                    firstname: process.env.ADMIN_FIRSTNAME,
                    lastname: process.env.ADMIN_LASTNAME,
                    email: process.env.ADMIN_EMAIL,
                    role: UserRole.Admin,
                    salt: salt,
                    hash_password: deviredKey.toString('hex'),
                    user_id: 1
                }).save()
                .then((res) => {
                    console.log("Successfully created admin user!");
                })
                .catch((err: string) => {
                    console.error(err);
                });
            });
        }
    })
    .catch((err: string) => {
        console.error(err);
    });
}

export { checkAdmin };