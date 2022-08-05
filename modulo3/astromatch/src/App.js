import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cell, Container, GlobalStyle, Header, UserGroup, Users } from './style';
import logo from './img/logo.png'
import MatchesList from './components/MatchesList/MatchesList';
import Home from './components/Home/Home';
import ClearComponent from "./components/ClearComponent/ClearComponent";


function App() {

  const [page, setPage] = useState(true)

  const changePage = () => {
    setPage(!page)
  }



  return (
    <Container>
      <GlobalStyle />

      <Cell>

        <Header>
          {page || <Users onClick={changePage}><i className='fas fa-users' /></Users>}
          <div>
            <img src={logo} alt="logo" />
            <h1><span className='gray'>astro</span><span className='red'>match</span></h1>
          </div>
          {page && <UserGroup onClick={changePage}><i className='fas fa-user-friends' /></UserGroup>}
        </Header>

        {page ?
          <Home />
          :
          <MatchesList />
        }

      </Cell>
      <ClearComponent />
    </Container>
  );
}

export default App;
