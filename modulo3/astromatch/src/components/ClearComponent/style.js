import styled from "styled-components";

export const ClearContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    
    span {
        text-align: center;
        margin-bottom: 10px;
        font-size: 1rem;
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
        width: 75%;
        align-self: center;

        :hover {
            opacity: 0.7;
        }

    }
`