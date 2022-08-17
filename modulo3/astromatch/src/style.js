import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #D3D3D3;
    min-height: 100vh;

`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: auto;
`

export const Cell = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    border-radius: 7px;
    border: 1px solid black;
    width: 350px;
    height: 650px;
    margin-bottom: 15px;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #D3D3D3;

    div {
        display: flex;
        margin: auto;
        cursor: pointer;
    }

    img {
        width: 50px;
    }

    h1 {
        font-family: 'Varela Round', cursive;
        font-size: 1.8rem;
        margin-left: 5px;
    }

    .red {
        color: #de0613;
    }

    .gray {
        color: #808080;
    }

`

export const Users = styled.button`
        background: transparent;
        cursor: pointer;
        border: none !important;
        color: #808080;
       

        i {
            font-size: 25px;
        }

        :hover {
            transform: scale(0.9);
        }

`

export const UserGroup = styled.button`
        background: transparent;
        cursor: pointer;
        border: none !important;
        color: #808080;

        i {
            font-size: 30px;
        }

        :hover {
            transform: scale(0.9);
        }

`





