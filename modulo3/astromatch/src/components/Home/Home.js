import React, { useState, useEffect } from "react";
import axios from "axios";
import { Buttons, Card, DeslikeButton, LikeButton } from "./style";
import ClearComponent from "../ClearComponent/ClearComponent";
import { Header, UserGroup } from "../../style";
import logo from '../../img/logo.png'



function Home(props) {

    const [profiles, setProfiles] = useState([])

    // USEEFFECT

    useEffect(() => {
        getProfileToChoose()
    }, [])

    // RENDERIZAR CARD

    const card = profiles.map((profile) => {
        return (
            <Card style={{ backgroundImage: `url(${profile.photo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} key={profile.id}>
                <div>
                    <h2>{profile.name}, {profile.age}</h2>
                    <p>{profile.bio}</p>
                </div>
            </Card>
        )
    })


    // GET

    const getProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/person`)
            .then((response) => {
                if (response.data.profile === null) {
                    setProfiles([])
                } else {
                    setProfiles([response.data.profile])
                }
            }).catch(
                (erro) => {
                    console.log(erro.response);
                })
    }

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
            .then(() => {
                getProfileToChoose()

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
            
            {profiles.length === 0 ? <ClearComponent getProfileToChoose={getProfileToChoose} /> : card}
            <Buttons>
                <DeslikeButton onClick={() => choosePerson(profiles[0].id, false)}><i className='fa fa-close' /></DeslikeButton>
                <LikeButton onClick={() => choosePerson(profiles[0].id, true)}><i className='fa fa-heart' /></LikeButton>
            </Buttons>
        </>
    );
}

export default Home;
