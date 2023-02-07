import { CustomError } from "./CustomError";

export class InvalidTitle extends CustomError {
    constructor(){
        super(422, "O título deve ter no mínimo 5 caracteres.")
    }
}

export class InvalidDescription extends CustomError {
    constructor(){
        super(422, "A descrição deve ter no mínimo 20 caracteres.")
    }
}
