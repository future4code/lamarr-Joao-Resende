import React from "react";
import axios from "axios";
import { ClearContainer } from "./style";



function ClearComponent(props) {

    // PUT

    const clear = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/clear')
            .then(() => {
                props.getProfileToChoose()
                props.getMatches()
            }).catch(() => {
                alert("Clique novamente.")
            })
    }

    return (
        <ClearContainer>
            <span>Se não houver mais perfis para exibir ou queira começar de novo clique no botão abaixo:</span>
            <button onClick={clear} >Limpar swipes e matches</button>
        </ClearContainer>
    );
}

export default ClearComponent;
