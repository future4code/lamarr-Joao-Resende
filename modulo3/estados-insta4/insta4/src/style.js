import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const ItemLista = styled.li`
    list-style: none;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 15px;
  }

  label {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 0.9rem;
  }

  input {
    border: 1px solid gray;
    padding: 10px;
    border-radius: 8px;
    width: 15vw;
  }

  button {
    border: none;
    border-radius: 8px;
    padding: 12px;
    background-color: #C0C0C0;
  }


  button:hover {
    cursor: pointer;
    background-color: grey;
  }
`
