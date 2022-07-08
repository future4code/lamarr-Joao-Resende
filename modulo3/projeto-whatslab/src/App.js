import React, { useState } from 'react';
import { Header, Main, Footer, BarraLateral, Conteudo, Body, ContainerLista, ContainerMensagemEsquerda, ContainerMensagemDireita } from "./style"
import logo from './img/logo.png'
import { Inputs } from './components/Inputs'


function App() {
  const [inputRemetente, setInputRemetente] = useState('')
  const [inputMensagem, setInputMensagem] = useState('')
  const [objetoMensagem, setObejetoMensagem] = useState([])
  const [numeroCliques, setNumeroCliques] = useState(0)

  const handleInputRemetente = (event) => {
    setInputRemetente(event.target.value)
  }

  const handleInputMensagem = (event) => {
    setInputMensagem(event.target.value)
  }


  const aoEnviarMensagem = (e) => {
    e.preventDefault()
    const novaMensagem = { remetente: inputRemetente, mensagem: inputMensagem }
    const novaListaDeMensagens = [...objetoMensagem, novaMensagem]
    setObejetoMensagem(novaListaDeMensagens)
    setInputMensagem('')
    setInputRemetente('')
  }

  const listaDeMensagens = objetoMensagem.map((msg, index) => {
    const deletarMensagem = () => {
      const novaListaDeMensagens = [...objetoMensagem]
      const deletar = novaListaDeMensagens.findIndex((mensagemExcluida) => {
        return mensagemExcluida === msg
      })
      novaListaDeMensagens.splice(deletar, 1)
      setObejetoMensagem(novaListaDeMensagens)
    }
    if (msg.remetente === "eu") {
      return (
        <ContainerMensagemDireita key={index} onDoubleClick={deletarMensagem}>
          <p>{msg.mensagem}</p>
        </ContainerMensagemDireita>
      )
    } else {
      return (
        <ContainerMensagemEsquerda key={index} onDoubleClick={deletarMensagem}>
          <p><b>{msg.remetente}</b></p>
          <p>{msg.mensagem}</p>
        </ContainerMensagemEsquerda>
      )
    }
  })


  return (
    <Body>
      <Header>
        <img src={logo} alt="logo-labenu" />
        <h1>LabZap</h1>
      </Header>
      <Main>
        <BarraLateral lado='esquerda' />
        <Conteudo>
          <ContainerLista>
            {listaDeMensagens}
          </ContainerLista>
          <Inputs valueRemetente={inputRemetente} onChangeRemetente={handleInputRemetente} valueMensagem={inputMensagem} onChangeMensagem={handleInputMensagem} aoEnviar={aoEnviarMensagem} />
        </Conteudo>
        <BarraLateral lado='direita' />
      </Main>
      <Footer>
        <p>Copyright &copy; 2022 Labenu All rights reserved, Rua Pais Leme, 215, Conjunto 820 Pinheiros, CEP 05424-150</p>
      </Footer>
    </Body>
  );
}

export default App;
