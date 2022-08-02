import React from "react";
import { Container, EditForm } from "./style";

export function Editar(props) {

    return (
        <Container>
            {props.userInfo}
            {props.open ?
                <button onClick={props.openForm}>Editar usuário</button> :
                <EditForm>
                    <input value={props.inputName} onChange={(e) => props.setInputName(e.target.value)} placeholder="Nome" type='text' />
                    <input value={props.inputEmail} onChange={(e) => props.setInputEmail(e.target.value)} placeholder="E-mail" type='text' />
                    <button onClick={() => props.editUser(props.user[0].id)}>Salvar edição</button>
                </EditForm>
            }
            <button onClick={props.getUserById}>Voltar para lista de usuários</button>
        </Container>
    )
}