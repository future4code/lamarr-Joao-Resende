import React from "react";
import axios from "axios";
import { ClearContainer } from "./style";



function ClearComponent(props) {

    // PUT

    const clear = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/clear')
            .then(() => {
                props.getProfileToChoose()
            }).catch(() => {
                alert("Clique novamente.")
            })
    }

    return (
        <ClearContainer>
            <span>Ops, parece que não temos mais perfis para exibir! Clique no botão abaixo para começar de novo:</span>
            <button onClick={clear} >Limpar swipes e matches</button>
        </ClearContainer>
    );
}

export default ClearComponent;
