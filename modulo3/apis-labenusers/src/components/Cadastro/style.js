import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    button {
        margin: 25px 0 0 0;
        border: 1px solid #fe7e02;
        border-radius: 13px;
        padding: 8px 12px;
        background-color: #fe7e02;
        font-size: 1.05rem;
        font-weight: 600;
        align-self: center;
  }

    button:hover {
        cursor: pointer;
        border: 1px solid #fe7e02;
        background-color: #fff;
  }
`

export const Campo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 50px 0 50px;

    label {
        display: block;
        margin-bottom: 5px;
        margin-top: 5px;
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