export declare interface UserData {
    _id: number,
    firstname: string,
    lastname: string,
    email: string,
    role: UserRole,
    salt: string,
    hash_password: string,
    createdAt?: string|any,
    updatedAt?: string|any
}

export declare interface AdminData {
    _id: string,
    users: number,
    tickets: {
        opened: number,
        closed: number,
        total: number
    },
    createdAt?: string|any,
    updatedAt?: string|any
}

export declare interface TicketData {
    _id: number,
    author_id: number,
    title: string,
    state: TicketState
    messages: Array<TicketMessage>,
    createdAt?: string|any,
    updatedAt?: string|any
}

export declare interface TicketMessage {
    _id: number,
    author_id: number,
    message: number,
    createdAt?: string|any,
    updatedAt?: string|any
}

export const enum UserRole {
    Customer = 1,
    Employee = 2,
    Admin = 3
}

export const enum TicketState {
    Open = 1,
    Closed = 2,
    Pending = 3
}