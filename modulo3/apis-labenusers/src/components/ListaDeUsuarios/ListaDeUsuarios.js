import React, { useState, useEffect } from "react";
import { Container } from "./style";
import axios from "axios";


export function ListaDeUsuarios(props) {



    return (
        <Container>
            <button type="submit" onClick={props.trocarTela}>Voltar para cadastro</button>
            {props.listComponent}
            <div >{props.usersList.length === 0 && <span className="vazio">Nenhum usuário encontrado / cadastrado...</span>}</div>
            <div>
                <input value={props.userSearched} onChange={(e) => props.setUserSearched(e.target.value)} placeholder="Digite o nome exato para busca" type='text'/>
                <button onClick={props.searchUsers}>Procurar usuário</button>
            </div>
        </Container>
    )
}