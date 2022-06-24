import React from 'react';
import './VerMais.css'

function VerMais(props) {
    return (
        <div>
            <label for="clicar" className="botao-clicar">
                <img src={ props.imagem }/>
                <p>{ props.texto }</p>
            </label>
            <input type="checkbox" id="clicar"></input>                
        </div>
    )
}

export default VerMais;