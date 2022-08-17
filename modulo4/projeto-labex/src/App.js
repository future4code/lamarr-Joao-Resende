import React from "react";
import PagesRoutes from "./routes/PagesRoutes";
import { Container, Footer, GlobalStyle, Header, Main } from "./style";
import logo from "./img/logo.svg"


function App() {
  
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <img src={logo} alt="logo" />
        <h1>Labe</h1><h1 className="orange">X</h1>
      </Header>


        <PagesRoutes />


      <Footer>
        <p>&copy; 2022 LabeX Ltda.</p>
      </Footer>
    </Container>
  );
}

export default App;
