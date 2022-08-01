import React, { useState, useEffect } from "react";
import { Form, Header, Lista } from "./style";
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
  const [editar, setEditar] = useState(false)

  function mudarTela() {
    setClick(!click)
  }

  function telaParaEditar() {
    setEditar(!editar)
  }

  // Renderizar a lista de usuários

  const listComponent = usersList.map((item, index) => {
    return (
      <Lista key={index}>
        <span onClick={() => telaParaEditar(item)}>{item.name}</span>
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
          console.log(usersList)
        }).catch((erro) => {
          alert("Ops! Algo deu errado!")
          console.log(erro.response);
        })
    } else {
      alert("Usuário não foi deletado.")
    }
  }



  return (
    <Form>
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
          telaParaEditar={telaParaEditar}
        />
      }
    </Form>
  );
}

export default App;
