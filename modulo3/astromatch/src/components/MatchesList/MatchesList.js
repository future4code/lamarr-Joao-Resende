import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListCard, ListContainer } from "./style";



function MatchesList() {

    const [matchedProfiles, setMatchedProfiles] = useState([])

    // RENDERIZAR LISTA

    const list = matchedProfiles.map((profile) => {
        return (
                <ListCard key={profile.id}>
                    <img src={profile.photo} alt={profile.alt_photo} />
                    <span>{profile.name}</span>
                </ListCard>
        )
    })


    // USEEFFECT

    useEffect(() => {
        getMatches()
    }, [])

    // GET

    const getMatches = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/matches`)
            .then((response) => {
                console.log(response)
                setMatchedProfiles(response.data.matches)
            }).catch(
                (erro) => {
                    console.log(erro.response);
                })
    }

    return (
        <ListContainer>
            {list}
        </ListContainer>
    );
}

export default MatchesList;
