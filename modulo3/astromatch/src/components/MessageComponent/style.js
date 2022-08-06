import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 550px;
    align-items: flex-start;


`

export const MessageContainer = styled.div`
    display: flex;
    align-self: flex-end;
    max-width: 80%;
    background-color: #d9fdd3;
    padding: 7px 10px;
    margin-right: 22px;
    margin-top: 10px;
    border-radius: 8px;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

        
` 

export const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    
    input {
        margin-right: 10px;
        padding: 7px;
        border-radius: 8px;
        border: 1.5px solid grey;
        width: 270px;
    }

    button {
        background-color: #de0613;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        margin: 0;
        padding: 5px;
        box-shadow: 1.5px 1.5px 1.5px 1px rgba(0, 0, 0, 0.2);
    }

    button:hover {
        opacity: 0.75;
    }

`