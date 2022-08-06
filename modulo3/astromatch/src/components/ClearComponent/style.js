import styled from "styled-components";

export const ClearContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 450px;
    margin: auto;
    margin-top: 20px;
    justify-content: center;
    padding: 20px;
    
    span {
        text-align: center;
        margin-bottom: 10px;
        font-size: 1.2rem;
        font-weight: 600;
    }

    button {
        font-size: 1rem;
        cursor: pointer;
        background: transparent;
        border: none !important;
        border-radius: 10px;
        background-color: #de0613;
        padding: 5px;
        color: #fff;

        :hover {
            opacity: 0.7;
        }

    }
`