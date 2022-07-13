import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;
    padding: 0 50px;

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 0.9rem;
    }

    input {
        border: 1px solid gray;
        width: 100%;
        padding: 7px;
        border-radius: 6px;
    }
`