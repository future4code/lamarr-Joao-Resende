import React, { useState } from "react";
import { Container, HeaderCard, HeaderChat, Input, MessageContainer } from "./style";


function MessageComponent(props) {

    const [inputMessage, setInputMessage] = useState('')
    const [message, setMessage] = useState([])


    const sendMessage = (e) => {
        e.preventDefault()
        if (inputMessage !== '') {
            const newMessage = { message: inputMessage }
            const newMessageList = [...message, newMessage]
            setMessage(newMessageList)
            setInputMessage('')
        }
    }

    const messageList = message.map((msg, index) => {
        const deletMessage = () => {
            const newMessageList = [...message]
            const delet = newMessageList.findIndex((deletedMessage) => {
                return deletedMessage === msg
            })
            newMessageList.splice(delet, 1)
            setMessage(newMessageList)
        }
        return (
            <MessageContainer onDoubleClick={deletMessage} key={index}>
                <p>{msg.message}</p>
            </MessageContainer>
        )
    })

    const profileHeader = props.arrayProfile.map((profile, index) => {
        return (
            <HeaderCard key={index}>
                <img src={profile.photo} alt={profile.alt_photo} />
                <span>{profile.name}</span>
            </HeaderCard>
        )
    })



    return (
        <>
            <HeaderChat>
                <button onClick={props.switchPage}><i className='fa fa-arrow-left' /></button>
                {profileHeader}
            </HeaderChat>
            <Container onSubmit={(e) => e.preventDefault()}>
                {messageList}
                <Input>
                    <input type="text" placeholder="Digite uma mensagem..." value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
                    <button type="submit" onClick={sendMessage}>
                        <i className="fa fa-send" />
                    </button>
                </Input>
            </Container>
        </>
    );
}

export default MessageComponent;
