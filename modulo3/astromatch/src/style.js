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
    background-color: #D3D3D3;
    min-height: 100vh;

`

export const Cell = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    border-radius: 7px;
    border: 1px solid black;
    width: 450px;
    margin: auto;
    margin-top: 50px;
    height: 780px;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 30px;
    border-bottom: 1px solid #D3D3D3;

    div {
        display: flex;
        margin: auto;
    }

    img {
        width: 70px;
    }

    h1 {
        font-family: 'Varela Round', cursive;
        font-size: 2.2rem;
        margin-left: 10px;
    }

    .red {
        color: #de0613;
    }

    .gray {
        color: #A9A9A9;
    }

`

export const Users = styled.button`
        background: transparent;
        cursor: pointer;
        border: none !important;
        color: #A9A9A9;
        margin-right: -35px;

        

        i {
            font-size: 30px;
        }

`

export const UserGroup = styled.button`
        background: transparent;
        cursor: pointer;
        border: none !important;
        color: #de0613;
        margin-left: -35px;

        i {
            font-size: 30px;
        }

`



