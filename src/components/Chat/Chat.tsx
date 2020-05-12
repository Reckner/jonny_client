import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ChatArea from '../ChatArea/ChatArea';
import ChatList, { ChatMock } from '../ChatList/ChatList';
import QuickLinks from '../QuickLinks/QuickLinks';

const Chat: React.FC = () => {
    const [target, setTarget] = useState<ChatMock | null>(null);

    return (
        <Router>
            <QuickLinks target={target} />
            <ChatList setTarget={setTarget} />
            <Route
                path="/chat/:id"
                render={() => <ChatArea target={target} />}
            />
        </Router>
    );
};

export default Chat;
