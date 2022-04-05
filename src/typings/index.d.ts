export declare interface UserData {
    _id: string,
    firstname: string,
    lastname: string,
    email: string,
    salt: string,
    hash_password: string,
    user_id: string,
    createdAt?: string|any,
    updatedAt?: string|any
}

export declare interface AdminData {
    users: number,
    tickets: {
        open: number,
        closed: number,
        total: number
    }
}