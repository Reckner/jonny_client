import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    AppSettings,
    ProfileDetails,
    UserSettings,
    Contacts,
    BioDetails,
    ImportantNotes,
} from './Components';
import { ChatMock } from '../ChatList/ChatList';
import ChatArea from '../ChatArea/ChatArea';
import ChatSettings from './Components/ChatSettings/ChatSettings';

interface Modal {
    target: ChatMock | null;
};


const Modal: React.FC<Modal> = ({target}) => {

    return (
        <div
            className="modal fade show"
            id="exampleModalCenter"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <Switch>
                        <Route 
                            path="/chat/:id" 
                            render={() => <AppSettings target={target} />}/>
                        <Route 
                            path="/:id/settings" 
                            render={() => <UserSettings target={target} />}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Modal;
