import React from "react";
import { Campo, Container } from "./style";

export function Cadastro (props) {

    return (
        <Container>
            <button onClick={props.mudarTela}>Lista de usuários</button>
            <Campo>
                <label for="nome">Nome Completo:</label>
                <input value={props.inputName} onChange={(e)=> {props.setInputName(e.target.value)}} type="text" name="nome" />
            </Campo>
            <Campo>
                <label for="email">E-mail:</label>
                <input value={props.inputEmail} onChange={(e)=> {props.setInputEmail(e.target.value)}} type="email" name="email" />
            </Campo>
            <button onClick={props.createUser}>Cadastrar</button>
        </Container>
    )
}