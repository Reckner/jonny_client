import React from 'react';
import './ChatList.scss';
import profilePhotoDaniel from "./Pictures/Daniel.jpg";
import profilePhotoRuben from "./Pictures/Ruben.jpg";
import profilePhotoVladislav from "./Pictures/Vladislav.jpg";
import ChatElement from '../ChatElement/ChatElement'




const ChatList: React.FC = () => {
  return (
  <div className="chats-wrapper">
    <ChatElement avatar={profilePhotoDaniel} name="Daniel Antonov" message="Lorem ipsum dolor"/>
    <ChatElement avatar={profilePhotoRuben} name="Ruben Galoyan" message="Lorem ipsum dolor"/>
    <ChatElement avatar={profilePhotoVladislav} name="Vladislav Jekimtsev" message="Lorem ipsum dolor"/>
  </div>
  );
}



export default ChatList;
