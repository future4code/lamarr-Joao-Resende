import React, { useState, useEffect } from "react";
import axios from "axios";



function ClearComponent(props) {

    // PUT

    const clear = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-resende/clear')
            .then(() => {
                alert("limpou")
            }).catch(() => {
                alert("Erro!")
            })
    }

    return (
        <div>
            <button onClick={clear} >Limpar swipes e matches</button>
        </div>
    );
}

export default ClearComponent;
