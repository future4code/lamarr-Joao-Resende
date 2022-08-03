import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;

    img {
        width: 75px;
    }

    h1 {
        font-size: 2.5rem;
        margin-left: 10px;
    }

`

export const Main = styled.main`
    display: flex;
    flex: 1;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 100%;
    position: sticky;
    padding: 50px;
    margin-bottom: 50px;

`

export const BotaoDeslike= styled.button`
        background: transparent;
        cursor: pointer;
        border: 1px solid red;
        border-radius: 50%; 
        padding: 25px;
        color: red;
        margin-right: 100px;

        i {
            font-size: 40px;
        }

        :hover {
            background-color: red;
            color: white;
        }

`

export const BotaoLike= styled.button`
        background: transparent;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid green;
        padding: 25px;
        color: green;

        i {
            font-size: 40px;
        }

        :hover {
            background-color: green;
            color: white;
        }
`