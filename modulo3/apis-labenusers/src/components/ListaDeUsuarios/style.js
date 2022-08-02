import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    button {
        margin: 25px 0;
        border: 1px solid #fe7e02;
        border-radius: 10px;
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

  div {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  input {
    border: 1px solid gray;
    width: 55%;
    padding: 7px;
    border-radius: 6px;
    margin: 20px;
  }

  .vazio {
    margin: 20px;
  }
  
`

export const ItemLista = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    align-self: flex-start;
    margin: 20px 0 15px 20px;
  }
`

