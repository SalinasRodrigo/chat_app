/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./ChatList.css";
const HOST = "127.0.0.1:8000";

export default function ChatList({ user, setUser, contacts, chatSocket, setChatSocket }) {

  const handleClick = () => {
    setUser(null);
  };

  const socketConection = (id) => {
    if (chatSocket!=null){
      chatSocket.close()
      console.log('alo')
    }
    console.log(id)
    const room = user.id > id ? `${user.id}to${id}` : `${id}to${user.id}` 
    const newChatSocket = new WebSocket("ws://" + HOST + "/ws/chat/" + room + "/");
    setChatSocket(newChatSocket)
  }

  useEffect(()=>{
    if (chatSocket!=null){
      chatSocket.onclose = function() {
        console.error('Chat socket closed unexpectedly');
      };
    }
  },[chatSocket])


  return (
    <div className="chat-list">
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => {
            return <li key={contact.id}><a href="#" onClick={()=>socketConection(contact.id)}>{contact.user.email}</a></li>;
          })}
        </ul>
      ) : (
        <></>
      )}
      <button onClick={handleClick}>Cerrar session</button>
    </div>
  );
}
