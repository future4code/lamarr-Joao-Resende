import React, { useState, useEffect } from "react";
import { Container, ItemLista } from "./style";
import axios from "axios";
import { Editar } from "../EditarUsuario/Editar";


export function ListaDeUsuarios(props) {

    const [open, setOpen] = useState(true)
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')


    function openForm() {
        setOpen(!open)
    }

    const {user} = props

    // RENDERIZAR USUÁRIO

    const userInfo = user.map((item, index) => {
        return (
            <ItemLista key={index}>
                <span>{item.name}</span>
                <span>{item.email}</span>
            </ItemLista>
        )
    })


    // AXIOS

    const myHeaders = {
        headers: {
            Authorization: "joao-resende-lamarr"
        }
    }

    const body = {
        "name": inputName,
        "email": inputEmail
    }


    // PUT

    const editUser = (id) => {
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, body, myHeaders)
            .then(() => {
                alert("Usuário editado com sucesso!")
                props.getUserById()
                props.getAllUsers()
            }).catch(() => {
                alert("Erro! O usuário não pôde ser editado.")
            })
        setInputName("")
        setInputEmail("")
    }

    return (
        <Container>
            <button onClick={props.mudarTela}>Voltar para cadastro</button>
            {props.edit ?
                <>
                    {props.listComponent}
                    <div >{props.usersList.length === 0 && <span className="vazio">Nenhum usuário encontrado / cadastrado...</span>}</div>
                    <div>
                        <input value={props.userSearched} onChange={(e) => props.setUserSearched(e.target.value)} placeholder="Digite o nome exato para busca" type='text' />
                        <button onClick={props.searchUsers}>Procurar usuário</button>
                    </div>
                </> :
                <Editar
                    inputEmail={inputEmail}
                    inputName={inputName}
                    setInputEmail={setInputEmail}
                    setInputName={setInputName}
                    openForm={openForm}
                    open={open}
                    getUserById={props.getUserById}
                    editUser={editUser}
                    userInfo={userInfo}
                    user={user}
                />
            }
        </Container>

    )
}