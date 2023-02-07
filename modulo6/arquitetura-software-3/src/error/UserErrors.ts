import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
    constructor(){
        super(400, "Email Inválido.")
    }
}

export class InvalidPassword extends CustomError {
    constructor(){
        super(400, "Senha Inválida, ela precisa ter no mínimo 6 caracteres.")
    }
}