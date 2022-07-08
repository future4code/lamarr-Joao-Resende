import React from "react";
import styled from "styled-components";
import iconeEnviar from "../img/botao-enviar.png"

const Container = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-bottom: 15px;

    input {
        margin-right: 10px;
        padding: 7px;
        border-radius: 8px;
        border: 1.5px solid grey;
    }

    button {
        background-color: orange;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        margin: 0;
        padding: 6px 7px 4px 9px;
        margin-right: 4%;
        box-shadow: 1.5px 1.5px 1.5px 1px rgba(0, 0, 0, 0.2);
    }

    button:hover {
        opacity: 0.75;
    }

    #remetente {
        width: 25%;
        margin-left: 4%;
    }

    #mensagem {
        width: 60%;
    }

`

export function Inputs(props) {
    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <Container onSubmit={handleSubmit}>
            <input type="text" id="remetente" name="remetente" placeholder="Remetente" value={props.valueRemetente} onChange={props.onChangeRemetente}/>
            <input type="text" id="mensagem" name="mensagem" placeholder="Mensagem" value={props.valueMensagem} onChange={props.onChangeMensagem}/>
            <button type="submit" onClick={props.aoEnviar}>
                <img src={iconeEnviar} alt="Icone enviar" />
            </button>
        </Container>
    )
}