import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;

    label {
        margin-right: 10px;
    }

    input {
        margin-right: 10px;
    }

    #remetente {
        width: 10vw;
    }

    #mensagem {
        width: 25vw;
    }

`

export function Inputs(props) {
    return (
        <Container>
            <div>
                <label for="remetente">Remetente:</label>
                <input type="text" id="remetente" name="remetente" />
            </div>
            <div>
                <label for="mensagem">Mensagem:</label>
                <input type="text" id="mensagem" name="mensagem" />
                <button>Enviar Mensagem</button>
            </div>
        </Container>
    )
}