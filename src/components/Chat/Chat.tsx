import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ChatArea from '../ChatArea/ChatArea';
import ChatList, { ChatMock } from '../ChatList/ChatList';
import QuickLinks from '../QuickLinks/QuickLinks';

const Chat: React.FC = () => {
    const [target, setTarget] = useState<ChatMock | null>(null);

    return (
        <Router>
            <QuickLinks />
            <ChatList setTarget={setTarget} />
            <Route
                path="/chat/id"
                render={() => <ChatArea target={target} />}
            />
        </Router>
    );
};

export default Chat;
