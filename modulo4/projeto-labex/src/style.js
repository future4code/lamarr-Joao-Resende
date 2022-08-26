import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        color: #363636;
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
    background-color: whitesmoke;
    box-shadow: 0 3px 6px 0 rgb(83 82 82);

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    
    img {
        width: 80px;
        margin-right: 20px;
    }

    h1 {
        letter-spacing: 1px;
        font-size: 2.5rem;
    }

    .orange {
        color: #db830f;
    }

    @media (max-width: 650px) {

        img  {
            width: 60px;
            margin-right: 10px;
        }

        h1 {
            font-size: 2.2rem;
        }
    }

`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    top: 100%;
    position: sticky;
    font-weight: 500;
    padding: 10px;
    background-image: linear-gradient(#f4900c, #ffcc4d);
    text-shadow: 0 0 1px black;
    margin-top: 10px;

    @media (max-width: 390px) {
        
        font-size: 0.85rem;

    }

`

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    @media (max-width: 650px) {

        margin-top: 30px;
        
        h1 {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 390px) {
        
        h1 {
            font-size: 1.6rem;
        }
    }

`

export const PageButton = styled.button`
    border: 1px solid orange;
    border-radius: 13px;
    padding: 8px 12px;
    background-color: orange;
    font-size: 1.2rem;
    font-weight: 600;
    align-self: center;
    margin: 20px;

    :hover {
    cursor: pointer;
    border: 1px solid orange;
    background-color: #fff;
    }

    @media (max-width: 650px) {
        margin: 20px 10px;
        font-size: 1.1rem;
    }

    @media (max-width: 390px) {
        margin: 15px 5px;
        font-size: 1rem;
        padding: 6px 10px;
        
    }

`

export const Card = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 15px;
    width: 600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.3;

    li {
        margin: 10px;
    }

    span {
        margin-right: 5px;
        font-weight: bold;

    }

    @media (max-width: 650px) {

        margin: 12px 0;
        width: 90%;

        li {
            margin: 7px;
        }

    }

    @media (max-width: 390px) {
        
        font-size: 0.85rem;

    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 550px;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    padding: 30px;
    border-radius: 10px;

    h1 {
        margin-bottom: 20px;
    }

    div {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-top: 15px;
    }

    button {
        border: 1px solid orange;
        border-radius: 13px;
        padding: 8px 12px;
        background-color: orange;
        font-size: 1.2rem;
        font-weight: 600;
        align-self: center;
    }

    button:hover {
        cursor: pointer;
        border: 1px solid orange;
        background-color: #fff;
    }

    @media (max-width: 650px) {

        width: 90%;
        margin-bottom: 20px;
        padding: 25px;

        h1 {
            font-size: 1.8rem;
            margin-bottom: 10px;
            text-align: center;
        }

        div {
            margin-top: 10px;
        }

        button {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 390px) {

        padding: 20px;

        h1 {
            font-size: 1.6rem;
            text-align: center;
        }

        div {
            margin-top: 10px;
        }

        button {
            font-size: 1rem;
        }
    }


`

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 15px 0;


    input {
        border: 1px solid gray;
        width: 100%;
        padding: 7px;
        border-radius: 6px;
        
    }

    select {
        border: 1px solid gray;
        padding: 7px;
        border-radius: 6px;
        width: 100%;
    }

    textarea {
        border: 1px solid gray;
        width: 100%;
        padding: 7px;
        border-radius: 6px;
    }
`

export const AdminTripCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
    width: 600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 40px 20px;
    cursor: pointer;
    font-weight: 600;

    :hover {
        background-color: whitesmoke;
    }

    span {
        margin-right: 5px;
    }

    button {
        border: none !important;
        background: transparent;
        cursor: pointer;
        font-size: 1.3rem;

        :hover {
            i {
                color: red;
            }
        }
    }

    @media (max-width: 650px) {

        margin: 12px 0;
        width: 90%;

    }   

    @media (max-width: 390px) {

        font-size: 0.85rem;
        padding: 30px 15px;
        
        button {
            font-size: 1rem;
        }

    }

`

export const TripInfoList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 15px;
    width: 500px;

    li {
        margin: 10px;
    }

    span {
        margin-right: 5px;
        font-weight: bold;
    }

    @media (max-width: 650px) {
        width: 100%;
    }

    @media (max-width: 390px) {
        
        font-size: 0.85rem;

    }


`

export const CardButtons = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin: 15px;

    button {
        border: 1px solid orange;
        border-radius: 13px;
        padding: 8px 12px;
        background-color: orange;
        font-size: 1.2rem;
        font-weight: 600;
        align-self: center;
    }

    button:hover {
        cursor: pointer;
        border: 1px solid orange;
        background-color: #fff;
    }

    @media (max-width: 650px) {

        margin: 10px 0;

        button {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 390px) {

        margin: 7px 0;

        button {
            font-size: 1rem;
            padding: 6px 10px;
        }
    }
`

export const TripInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.3;

    h1 {
        align-self: center;
        text-align: center;
    }

    @media (max-width: 650px) {
        width: 80%;
    }


`

export const EmptySpan = styled.span`
    margin: 10px;
`

export const TripDetailsTitles = styled.h2`
    margin: 10px;
    font-size: 1.7rem;

    @media (max-width: 650px) {
        font-size: 1.5rem;
    }

    @media (max-width: 390px) {
        font-size: 1.3rem;
    }
`

export const ApprovedList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 450px;

    li {
        margin-bottom: 10px;
    }

    @media (max-width: 650px) {
        width: 70%;
    }

    @media (max-width: 390px) {
        
        font-size: 0.85rem;

    }

`

export const LoadingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    img {
        width: 60px;
    }
    
`
