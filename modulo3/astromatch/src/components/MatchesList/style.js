import styled from "styled-components";

export const ListCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 15px 15px 0 15px;
    padding: 5px;
    cursor: pointer;


    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        
    }

    span {
        font-size: 1rem;
        font-weight: 600;
        margin-left: 10px;
    }

    :hover {
        background-color: whitesmoke;
    }
`


export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: #999;
    }

    ::-webkit-scrollbar-button {
        display: none;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #bbb;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #ccc;
    }

`