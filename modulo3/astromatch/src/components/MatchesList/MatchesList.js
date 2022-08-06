import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListCard, ListContainer } from "./style";
import MessageComponent from "../MessageComponent/MessageComponent";
import { Header, UserGroup, Users } from "../../style";
import logo from '../../img/logo.png'



function MatchesList(props) {

    const [matchedProfiles, setMatchedProfiles] = useState([])
    const [chat, setChat] = useState(true)

    const switchPage = () => {
        setChat(!chat)
    }


    // USEEFFECT

    useEffect(() => {
        getMatches()
    }, [])


    // RENDERIZAR LISTA

    const list = matchedProfiles.map((profile) => {
        return (
            <ListCard onClick={switchPage} key={profile.id}>
                <img src={profile.photo} alt={profile.alt_photo} />
                <span>{profile.name}</span>
            </ListCard>
        )
    })


    // GET

    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/matches`)
            .then((response) => {
                setMatchedProfiles(response.data.matches)
            }).catch(
                (erro) => {
                    console.log(erro.response);
                })
    }

    return (
        <>
            <Header>
            {chat ? <Users onClick={props.changePage}><i className='fa fa-users' /></Users> : <UserGroup onClick={switchPage}><i className='fa fa-comments' /></UserGroup>}            
                <div onClick={props.homePage}>
                    <img src={logo} alt="logo" />
                    <h1><span className='gray'>astro</span><span className='red'>match</span></h1>
                </div>
            </Header>
            <ListContainer>
                {chat ?
                    list :
                    <MessageComponent />
                }
            </ListContainer>
        </>
    );
}

export default MatchesList;
