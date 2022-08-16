import React from "react";
import axios from "axios";
import { Buttons, Card, DeslikeButton, Gif, LikeButton, ProfilesEndedDiv } from "./style";
import { Header, UserGroup } from "../../style";
import logo from '../../img/logo.png'



function Home(props) {


    // RENDERIZAR CARD

    const card = props.profiles.map((profile) => {
        return (
            <Card key={profile.id}>
                <span style={{ backgroundImage: `url(${profile.photo})`}} />
                <img src={profile.photo} alt={profile.alt_photo} />
                <div>
                    <h2>{profile.name}, {profile.age}</h2>
                    <p>{profile.bio}</p>
                </div>
            </Card>
        )
    })


    // POST

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const choosePerson = (id, choice) => {
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/choose-person`,
            {
                'id': id,
                'choice': choice
            },
            headers)
            .then((response) => {
                props.getProfileToChoose()
                if (response.data.isMatch === true) {
                    return alert("It's a match!")
                }

            }).catch(() => {
                alert("Erro!")
            })
    }


    return (
        <>
            <Header >
                <div onClick={props.homePage}>
                    <img src={logo} alt="logo" />
                    <h1><span className='gray'>astro</span><span className='red'>match</span></h1>
                </div>
                <UserGroup onClick={props.changePage}><i className='fa fa-comments' /></UserGroup>
            </Header>

            {props.isLoading && <Gif><img src='https://media.giphy.com/media/l4FGzFhVty9Q0cyxq/giphy.gif' alt="loading..." /></Gif>}
            {!props.isLoading && props.profiles && (props.profiles.length === 0 ? <ProfilesEndedDiv>Ops, parece que não temos mais perfis para exibir! Clique no botão abaixo para começar de novo.</ProfilesEndedDiv> : card)}
            {!props.isLoading && !props.profiles && props.error}

            <Buttons>
                <DeslikeButton onClick={() => choosePerson(props.profiles[0].id, false)}><i className='fa fa-close' /></DeslikeButton>
                <LikeButton onClick={() => choosePerson(props.profiles[0].id, true)}><i className='fa fa-heart' /></LikeButton>
            </Buttons>
        </>
    );
}

export default Home;
