export enum UserRole {
   ADMIN = "ADMIN",
   NORMAL  = "NORMAL"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string,
   role: string
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   nickname: string,
   id: string,
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}

export interface AuthenticationData {
   id: string,
   role: string
}