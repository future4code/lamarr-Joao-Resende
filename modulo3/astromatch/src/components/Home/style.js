import styled from "styled-components";


export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;

`

export const DeslikeButton= styled.button`
        background: transparent;
        cursor: pointer;
        border: 1px solid red;
        border-radius: 50%; 
        padding: 15px 18px;
        color: red;

        i {
            font-size: 25px;
        }

        :hover {
            background-color: red;
            color: white;
        }

`

export const LikeButton= styled.button`
        background: transparent;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid green;
        padding: 15px;
        color: green;

        i {
            font-size: 25px;
        }

        :hover {
            background-color: green;
            color: white;
        }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 90%;
    height: 450px;
    margin: auto;
    margin-top: 20px;
    box-shadow: 0 0 1em black;
    color: #fff;

    div {
        display: flex;
        flex-direction: column;
        margin: 15px;
    }

    h2 {
        margin-bottom: 5px;
        font-size: 1.5rem;
        text-shadow: 0 0 3px black;
    }

    p {
        font-size: 1rem;
        text-shadow: 0 0 3px black;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }



`