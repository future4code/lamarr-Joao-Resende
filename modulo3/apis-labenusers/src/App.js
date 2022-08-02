import React, { useState, useEffect } from "react";
import { Header, Lista, MainContainer } from "./style";
import logo from "./img/logo.png"
import { Cadastro } from "./components/Cadastro/Cadastro";
import { ListaDeUsuarios } from "./components/ListaDeUsuarios/ListaDeUsuarios";
import axios from "axios";


function App() {

  const [click, setClick] = useState(true)
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [usersList, setUsersList] = useState([])
  const [userSearched, setUserSearched] = useState('')
  const [edit, setEdit] = useState(true)
  const [user, setUser] = useState([])
  const [open, setOpen] = useState(true)

  function mudarTela() {
    setClick(!click)
    setEdit(true)
  }

  function trocarInfo() {
    setEdit(!edit)
  }

  function openForm() {
    setOpen(!open)
  }


  // Renderizar a lista de usuários

  const listComponent = usersList.map((item, index) => {
    return (
      <Lista key={index}>
        <span className="botao-editar" onClick={() => getUserById(item.id)}>{item.name}</span>
        <button className="botao-deletar" onClick={() => deleteUsers(item)}>x</button>
      </Lista>
    )
  })

  //  useEffect

  useEffect(() => {
    getAllUsers()
  }, [])


  // AXIOS

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const myHeaders = {
    headers: {
      Authorization: "joao-resende-lamarr"
    }
  }

  //GET

  const getAllUsers = () => {
    axios.get(url, myHeaders)
      .then((response) => {
        setUsersList(response.data)
      }).catch(
        (erro) => {
          console.log(erro.response);
        })
  }

  const searchUsers = (e) => {
    e.preventDefault()
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${userSearched}&email=`, myHeaders)
      .then((response) => {
        setUsersList(response.data)
      }).catch(
        (erro) => {
          console.log(erro.response);
        })
    setUserSearched('')
  }

  const getUserById = (id) => {
    setEdit(!edit)
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, myHeaders)
      .then((response) => {
        setUser([response.data])
      }).catch(
        (erro) => {
          console.log(erro.response);
        })
    setOpen(true)
  }


  //POST

  const body = {
    "name": inputName,
    "email": inputEmail
  }

  const createUser = (event) => {
    event.preventDefault()
    axios.post(url, body, myHeaders)
      .then(() => {
        alert("Usuário criado com sucesso!")
        getAllUsers()
      }).catch(() => {
        alert("Erro! O usuário não pôde ser criado.")
      })
    setInputName("")
    setInputEmail("")
  }

  //DELETE

  const deleteUsers = (item) => {
    if (window.confirm(`Você tem certeza que deseja deletar o usuário ${item.name}?`)) {
      axios.delete(url + "/" + item.id, myHeaders)
        .then(() => {
          alert("Usuário deletado com sucesso!")
          getAllUsers()
        }).catch((erro) => {
          alert("Ops! Algo deu errado!")
          console.log(erro.response);
        })
    } else {
      alert("Usuário não foi deletado.")
    }
  }



  return (
    <MainContainer>
      <Header>
        <img src={logo} alt='logo' />
        <h1>Labenusers</h1>
      </Header>
      {click ?
        <Cadastro
          mudarTela={mudarTela}
          inputName={inputName}
          inputEmail={inputEmail}
          setInputName={setInputName}
          setInputEmail={setInputEmail}
          createUser={createUser}
        /> :
        <ListaDeUsuarios
          mudarTela={mudarTela}
          listComponent={listComponent}
          userSearched={userSearched}
          setUserSearched={setUserSearched}
          searchUsers={searchUsers}
          usersList={usersList}
          edit={edit}
          setEdit={setEdit}
          getUserById={getUserById}
          getAllUsers={getAllUsers}
          user={user}
          trocarInfo={trocarInfo}
          openForm={openForm}
          open={open}
          setOpen={setOpen}
        />
      }
    </MainContainer>
  )
}

export default App;
