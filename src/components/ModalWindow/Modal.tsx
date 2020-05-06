import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppSettings, Profile } from './Components';

const Modal: React.FC = () => {
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
                        <Route path="/chat">
                            <AppSettings />
                        </Route>
                        <Route path="/chat/profile">
                            <Profile />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Modal;
