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
                        <Route exact path="/chat" component={AppSettings} />
                        <Route
                            path="/chat/profile"
                            component={ProfileDetails}
                        />
                        <Route
                            path="/chat/userSettings"
                            component={UserSettings}
                        />
                        <Route path="/chat/contacts" component={Contacts} />
                        <Route path="/chat/bio" component={BioDetails} />
                        <Route
                            path="/chat/importantnotes"
                            component={ImportantNotes}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Modal;
