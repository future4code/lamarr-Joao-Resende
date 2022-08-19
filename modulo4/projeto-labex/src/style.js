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

`

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

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

`


export const TripCard = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 15px;
    width: 600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;

    li {
        margin: 10px;
    }

    span {
        margin-right: 5px;
        font-weight: bold;

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

`

