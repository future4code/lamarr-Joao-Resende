import React, {useState} from 'react';
import {Header, Main, Footer, BarraLateral, Conteudo, Body} from "./style"
import logo from './img/logo.png'
import {Inputs} from './components/Inputs'


function App() {
  return (
    <Body>
      <Header>
        <img src={logo} alt="logo-labenu"/>
        <h1>LabZap</h1>
      </Header>
      <Main>
        <BarraLateral lado='esquerda'/>
        <Conteudo>
          <Inputs/>
        </Conteudo>
        <BarraLateral lado='direita'/>
      </Main>
      <Footer>
        <p>Copyright &copy; 2022 Labenu All rights reserved, Rua Pais Leme, 215, Conjunto 820 Pinheiros, CEP 05424-150</p>
      </Footer>
    </Body>
  );
}

export default App;
