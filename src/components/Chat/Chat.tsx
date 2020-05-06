import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ChatArea from '../ChatArea/ChatArea';
import ChatList, { ChatMock } from '../ChatList/ChatList';
import QuickLinks from '../QuickLinks/QuickLinks';
import UserSettings from '../UserSettings/UserSettings';
import BioDetails from '../UserSettings/BioDetails/BioDetails';
import Contacts from '../Contacts/Contacts';

const Chat: React.FC = () => {
    const [target, setTarget]= useState<ChatMock | null>(null);

    return (
        <Router>
            <QuickLinks />
            <ChatList setTarget={setTarget}/>
            <Route path="/chat/:id" render={()=><ChatArea target={target}/>}/>
            <Route path="/userSettings" component={UserSettings}/>
            <Route path="/contacts" component={Contacts}/>
        </Router>
    );
};

export default Chat;
