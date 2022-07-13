import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    h1 {
        margin: 0;
    }

    img {
        width: 40px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 550px;
    border-radius: 10px;
    background-color: #eeeded;
    margin: 50px auto;
`