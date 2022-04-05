import { Schema, model } from "mongoose";
import type { UserData } from "../typings";
const schema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    hash_password: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
    collection: 'users'
});

const User = model<UserData>('User', schema);
export { User };