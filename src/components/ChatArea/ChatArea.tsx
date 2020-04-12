import React from 'react';
import './ChatArea.scss';
import profilePicture from "../ChatList/Pictures/Daniel.jpg";
import profileSettings from "../QuickLinks/Pictures/settings.png";

const ChatArea: React.FC = () => {
  return (
    <div className="chat-area">
      <div className="chat-header">
        <div className="chat-picture">
          <img className="avatar" src={profilePicture} alt="Avatar" />
        </div>
        <div className="profile-details">
          <div className="profile-name">
            <h4 className="name">Daniel Antonov</h4>
          </div>
          <div className="last-active">
            <p>last active 10:50</p>
          </div>
        </div>
        <div className="profile-settings">
          <img className="settings" src={profileSettings}/>
        </div>
      </div>
      <div className="messages">

      </div>
      <div className="chat-input">
          <input className="message-input" type="text" />
          <button className="button-send" type="button">Send</button>
      </div>
    </div>
  );
}

export default ChatArea;