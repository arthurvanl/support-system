import { Schema, model } from "mongoose";
import type { TicketData } from "../typings";

const message = new Schema({
    _id: {
        type: Number,
        required: true
    },
    author_id: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

const schema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    author_id: {
        type: Number,
        required: true
    },
    state: {
        type: Number,
        required: true
    },
    messages: [{
        type: message,
        required: true
    }]
}, {
    timestamps: true,
    versionKey: false,
    collection: 'tickets'
});

const Ticket = model<TicketData>('Ticket', schema);
export { Ticket };