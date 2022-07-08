import styled from "styled-components";


export const PostContainer = styled.div`
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
`

export const PostHeader = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;

    button {
        margin-right: 10px;
        cursor: pointer;
        border: 0.5px solid grey;
        background: white;
        font-weight: 600;
        font-size: 0.9em;
    }

    button:hover {
        background-color: #D3D3D3;
    }
`

export const UserProfile = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`

export const PostFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`


export const UserPhoto = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

export const PostPhoto = styled.img`
    width: 100%;
    height: 250px;
`

export const DivComentario = styled.div`
    display: flex;
    margin: 10px;
    padding: 5px;
    background-color: #DCDCDC;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    align-items: flex-start;

    span {
        width: 90%;
    }

    button {
        border: 0;
        cursor: pointer;
        background-color: #DCDCDC;
        font-weight: 800;
    }
`