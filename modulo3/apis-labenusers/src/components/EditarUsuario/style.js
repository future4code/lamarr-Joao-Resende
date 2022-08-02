import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    button {
        margin: 25px 0 0 0;
        border: 1px solid #fe7e02;
        border-radius: 13px;
        padding: 7px 12px;
        background-color: #fe7e02;
        font-size: 1rem;
        font-weight: 600;
        align-self: center;
    }

    button:hover {
        cursor: pointer;
        border: 1px solid #fe7e02;
        background-color: #fff;
    }

`

export const EditForm = styled.div`
    width: 100%;
    margin-left: 20px;
    margin-top: 15px;

    input {
        border: 1px solid gray;
        width: 30%;
        padding: 7px;
        border-radius: 6px;
        margin: 5px;
    }

    button {
        margin: 0;
    }
`