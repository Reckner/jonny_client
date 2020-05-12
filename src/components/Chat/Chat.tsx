import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ChatArea from '../ChatArea/ChatArea';
import ChatList, { ChatMock } from '../ChatList/ChatList';
import QuickLinks from '../QuickLinks/QuickLinks';

const Chat: React.FC = () => {
    const [target, setTarget] = useState<ChatMock | null>(null);
    const [modalLayout, setModalLayout] = useState<string>('appsettings');
    return (
        <Router>
            <QuickLinks target={target} modalLayout={modalLayout} setModalLayout={setModalLayout}/>
            <ChatList setTarget={setTarget} />
            <Route
                path="/chat/:id"
                render={() => <ChatArea target={target} setModalLayout={setModalLayout}/>}
            />
        </Router>
    );
};

export default Chat;
