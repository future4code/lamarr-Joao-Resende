import styled from "styled-components";


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
    }
`

export const BarraLateral = styled.div`
    display: flex;
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
    width: 80vw;
    justify-content: center;
    align-items: flex-end;
    padding: 20px;
`