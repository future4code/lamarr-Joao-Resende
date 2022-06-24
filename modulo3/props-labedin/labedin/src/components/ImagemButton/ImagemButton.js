import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <a href={props.rede} className="image-button-container" target='_blank'>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </a>

    )
}

export default ImagemButton;