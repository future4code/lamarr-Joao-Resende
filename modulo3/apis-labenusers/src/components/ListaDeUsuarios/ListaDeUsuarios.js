import React from "react";
import { Container } from "./style";

export function ListaDeUsuarios(props) {

    return (
        <Container>
            <button type="submit" onClick={props.trocarTela}>Voltar para cadastro</button>
            {props.listComponent}
        </Container>
    )
}