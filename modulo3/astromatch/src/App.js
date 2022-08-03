import React from 'react';
import { BotaoDeslike, BotaoLike, Container, Footer, GlobalStyle, Header, Main } from './style';
import logo from './img/logo.png'


function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <img src={logo} alt="logo" />
        <h1>Astromatch</h1>
      </Header>
      <Main>

      </Main>
      <Footer>
        <BotaoDeslike><i className='fa fa-close' /></BotaoDeslike>
        <BotaoLike><i className='fa fa-heart' /></BotaoLike>
      </Footer>

    </Container>
  );
}

export default App;
