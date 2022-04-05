export declare interface UserData {
    _id: number,
    firstname: string,
    lastname: string,
    email: string,
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