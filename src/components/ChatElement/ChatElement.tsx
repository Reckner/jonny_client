import React from 'react';
import './ChatElement.scss';

interface Chat {
  avatar?: string;
  name: string;
  message?: string;
}


const ChatElement: React.FC<Chat> =  ({avatar, name, message}) => {
  return (
    <div className="chat-item">
        <div className="chat-icon">
        <img className="profile-picture" src={avatar} alt="Avatar"></img>
        </div>
        <div className="chat-content">
        <div className="chat-name">
            <h4>{name}</h4>
        </div>
        <div className="last-message">
            <p>{message}</p>
        </div>
        </div>
    </div>
  );
}



export default ChatElement;
