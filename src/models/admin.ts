import { Schema, model } from "mongoose";
import type { AdminData } from "../typings";
const schema = new Schema({
    users: {
        type: Number,
        required: true
    },
    tickets: {
        type: {
            opened: {
                type: Number,
                required: true
            },
            closed: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true,
            }
        },
        required: true,
        _id: false
    }
}, {
    timestamps: true,
    versionKey: false,
    collection: 'admindata'
});

const Admin = model<AdminData>('Admin', schema);
export { Admin };