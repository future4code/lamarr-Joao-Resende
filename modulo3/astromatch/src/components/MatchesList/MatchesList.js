import React, { useState, useEffect } from "react";
import { ListCard, ListContainer } from "./style";
import MessageComponent from "../MessageComponent/MessageComponent";
import { Header, Users } from "../../style";
import logo from '../../img/logo.png'
import { Gif } from "../Home/style";



function MatchesList(props) {

    const [chat, setChat] = useState(true)
    const [arrayProfile, setArrayProfile] = useState([])

    const switchPage = (profile) => {
        setChat(!chat)
        setArrayProfile([profile])
    }


    // USEEFFECT

    useEffect(() => {
        props.getMatches()
    }, [])



    // RENDERIZAR LISTA

    const list = props.matchedProfiles.map((profile) => {
        return (
            <ListCard onClick={() => switchPage(profile)} key={profile.id}>
                <img src={profile.photo} alt={profile.alt_photo} />
                <span>{profile.name}</span>
            </ListCard>
        )
    })


    return (
        <>
            {chat ?
                <>
                    <Header>
                        <Users onClick={props.changePage}><i className='fa fa-users' /></Users>
                        <div onClick={props.homePage}>
                            <img src={logo} alt="logo" />
                            <h1><span className='gray'>astro</span><span className='red'>match</span></h1>
                        </div>
                    </Header>
                    <ListContainer>
                        {props.isLoading && <Gif><img src='https://media.giphy.com/media/l4FGzFhVty9Q0cyxq/giphy.gif' alt="loading..." /></Gif> }
                        {!props.isLoading && props.matchedProfiles && list}
                        {!props.isLoading && !props.matchedProfiles && props.error}
                    </ListContainer>
                </> :
                <MessageComponent switchPage={switchPage} arrayProfile={arrayProfile} />
            }

        </>
    );
}

export default MatchesList;
