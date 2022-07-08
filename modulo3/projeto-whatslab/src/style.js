import styled from "styled-components";
import imagemFundo from "./img/imagem-fundo.jpg"


export const Body = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 60px;
    }

    h1 {
        font-size: 2.5rem;
    }
`

export const Main = styled.main`
    display: flex;
    width: 100%;
    flex: 1 1 0%;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: sticky;
    top: 100%;
    background-color: #a9a9a9;

    p {
        margin: 0;
        text-align: center;
    }
`

export const BarraLateral = styled.div`
    background-color: orange;
    width: 15vw;
    ${(props) => {
        if (props.lado === 'direita') {
            return 'justify-content: flex-end;'
        } else if (props.lado === 'esquerda') {
            return 'justify-content: flex-start;'
        } else {
            return 'justify-content: center;'
        }
    }}
`

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-image: url(${imagemFundo});
    justify-content: flex-end;
`

export const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 30px 4%;
`

export const ContainerMensagemEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 5px 20px;
    margin: 7px 0px;
    border-radius: 8px;
    max-width: 55%;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    p {
        margin: 5px;
        width: 100%;
    }
        
`

export const ContainerMensagemDireita = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #d9fdd3;
    padding: 5px 20px;
    margin: 7px 0px;
    border-radius: 8px;
    max-width: 55%;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    align-self: flex-end;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    p {
        margin: 5px;
        width: 100%;
    }
        
`