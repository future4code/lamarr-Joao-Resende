import styled from "styled-components";


export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;

`

export const DeslikeButton= styled.button`
        background: transparent;
        cursor: pointer;
        border: 1px solid red;
        border-radius: 50%; 
        padding: 15px 18px;
        color: red;
        margin-right: 130px;

        i {
            font-size: 35px;
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
            font-size: 35px;
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
    min-height: 500px;
    margin: auto;
    margin-top: 20px;
    box-shadow: 0 0 1em black;
    color: #fff;

    div {
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    h2 {
        margin-bottom: 5px;
        font-size: 2rem;

    }

    p {
        font-size: 1.3rem;
    }



`