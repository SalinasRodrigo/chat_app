/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Chat.css'

export default function Chat( {chatSocket}) {
  const [messages, setMessages] = useState([])
  const handleChat = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const message = Object.fromEntries(data);
    chatSocket.send(JSON.stringify({
      'message': message
    }));
    event.target.reset();
  }

  useEffect(()=> {
    if(chatSocket!=null){
      chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        console.log(...messages)
        console.log(data.message)
        const newMessage = [
          ...messages,
            data.message
        ]
        console.log(newMessage)
        setMessages(newMessage)
      };
    }
  }, [chatSocket, messages])


  return (
    <div className="chat">
      <div className="chat-content">
        <ul>
          {messages.map((message, index) =>{
            return(
              <li key={index}>{message.message}</li>
            )
          })}
        </ul>
        <form className="send" onSubmit={handleChat}>
          <input
            type="text"
            name="message"
            id="message"
            className="message-inp"
            placeholder="Escribe tu mensaje aqui"
          />
          <input type="submit" className="submit-message" value={"ey"} />
        </form>
      </div>
    </div>
  );
}
