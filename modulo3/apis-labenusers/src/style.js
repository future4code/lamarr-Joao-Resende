import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

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
    width: 450px;
    border-radius: 10px;
    background-color: #eeeded;
    margin: 50px auto;
    padding: 25px 0;
`

export const Lista = styled.li`
    list-style: none;
    margin: 10px 20px;

    .botao-deletar {
        margin: 0;
        border: none;
        border-radius: 5px;
        padding: 3px 6px;
        background-color: #fe7e02;
        border: 1px solid #fe7e02;
        font-size: 1rem;
        font-weight: 600;
        margin-left: 5px;
    }

    .botao-deletar:hover {
        cursor: pointer;
        border: 1px solid #fe7e02;
        background-color: #fff;
  }

`
