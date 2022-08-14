import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cell, Container, GlobalStyle, Main } from './style';
import MatchesList from './components/MatchesList/MatchesList';
import Home from './components/Home/Home';
import ClearComponent from "./components/ClearComponent/ClearComponent";


function App() {

  const [page, setPage] = useState(true)

  const [profiles, setProfiles] = useState([])
  const [isLoading, setIsLoading] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [matchedProfiles, setMatchedProfiles] = useState([])

  const changePage = () => {
    setPage(!page)
  }

  const homePage = () => {
    setPage(true)
  }


  // USEEFFECT

  useEffect(() => {
    getProfileToChoose()
  }, [])


  // GET PROFILE TO CHOOSE

  const getProfileToChoose = () => {
    setIsLoading(true)
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/person`)
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false)
          if (response.data.profile === null) {
            setProfiles([])
          } else {
            setProfiles([response.data.profile])
          }
        }, 1000);
      }).catch(
        (err) => {
          setIsLoading(false)
          setError(err)
        })
  }

  // GET MATCHES

  const getMatches = () => {
    setIsLoading(true)
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/matches`)
      .then((response) => {
        setIsLoading(false)
        setMatchedProfiles(response.data.matches)
      }).catch(
        (err) => {
          setIsLoading(false)
          setError(err)
        })
  }



  return (
    <Container>
      <GlobalStyle />

      <Main>

      <Cell>

        {page ?
          <Home changePage={changePage} homePage={homePage} profiles={profiles} isLoading={isLoading} error={error} getProfileToChoose={getProfileToChoose} />
          :
          <MatchesList changePage={changePage} homePage={homePage} matchedProfiles={matchedProfiles} getMatches={getMatches} isLoading={isLoading} error={error} />
        }

      </Cell>

      <ClearComponent getProfileToChoose={getProfileToChoose} getMatches={getMatches} />

      </Main>

    </Container>
  );
}

export default App;
