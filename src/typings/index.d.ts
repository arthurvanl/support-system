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

export const enum UserRole {
    Customer = 1,
    Employee = 2,
    Admin = 3
}