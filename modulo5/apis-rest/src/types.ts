export enum UserType{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type User = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}