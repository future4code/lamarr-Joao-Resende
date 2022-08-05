import React, { useState, useEffect } from "react";
import axios from "axios";
import { Buttons, Card, DeslikeButton, LikeButton } from "./style";



function Home() {

    const [profiles, setProfiles] = useState([])

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

    // USEEFFECT

    useEffect(() => {
        getProfileToChoose()
    }, [])

    // GET

    const getProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/person`)
            .then((response) => {
                setProfiles([response.data.profile])
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
            {card}
            <Buttons>
                <DeslikeButton onClick={() => choosePerson(profiles[0].id, false)}><i className='fa fa-close' /></DeslikeButton>
                <LikeButton onClick={() => choosePerson(profiles[0].id, true)}><i className='fa fa-heart' /></LikeButton>
            </Buttons>
        </>
    );
}

export default Home;
