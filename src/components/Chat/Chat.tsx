import React from 'react';

import ChatArea from '../ChatArea/ChatArea';
import ChatList from '../ChatList/ChatList';
import QuickLinks from '../QuickLinks/QuickLinks';

const Chat: React.FC = () => {
    return (
        <>
            <QuickLinks />
            <ChatList />
            <ChatArea />
        </>
    );
};

export default Chat;
