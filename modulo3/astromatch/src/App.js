import React, { useState } from "react";
import { Cell, Container, GlobalStyle, Header, UserGroup, Users } from './style';
import logo from './img/logo.png'
import MatchesList from './components/MatchesList/MatchesList';
import Home from './components/Home/Home';


function App() {

  const [page, setPage] = useState(true)

  const changePage = () => {
    setPage(!page)
  }

  const homePage = () => {
    setPage(true)
  }



  return (
    <Container>
      <GlobalStyle />

      <Cell>

        {page ?
          <Home changePage={changePage} homePage={homePage} />
          :
          <MatchesList changePage={changePage} homePage={homePage} />
        }

      </Cell>
    </Container>
  );
}

export default App;
