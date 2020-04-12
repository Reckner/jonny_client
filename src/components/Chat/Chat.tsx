import React from 'react';
import './Chat.scss';
import ChatArea from '../ChatArea/ChatArea';
import ChatList from '../ChatList/ChatList';
import QuickLinks from '../QuickLinks/QuickLinks';

const Chat: React.FC = () => {
  return (
    <div className="Chat">
      <QuickLinks/>
      <ChatList/>
      <ChatArea/>
    </div>
  );
}

export default Chat;
