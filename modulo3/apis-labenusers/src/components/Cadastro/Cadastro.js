import React from "react";
import { Campo, Container } from "./style";

export function Cadastro (props) {

    return (
        <Container>
            <button onClick={props.mudarTela}>Lista de usuários</button>
            <Campo>
                <label>Nome Completo:</label>
                <input value={props.inputName} onChange={(e)=> {props.setInputName(e.target.value)}} type="text" />
            </Campo>
            <Campo>
                <label>E-mail:</label>
                <input value={props.inputEmail} onChange={(e)=> {props.setInputEmail(e.target.value)}} type="email" />
            </Campo>
            <button onClick={props.createUser}>Cadastrar</button>
        </Container>
    )
}