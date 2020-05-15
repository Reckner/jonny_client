import React from 'react';
import classnames from 'classnames';
import styles from './UserSettings.module.scss';
import HeaderSettings from '../HeaderSettings/HeaderSettings';
import ImportantNotes from '../ImportantNotes/ImportantNotes';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import BioDetails from '../BioDetails/BioDetails';
import Button from '../Button/Button';
import { ChatMock } from '../../../ChatList/ChatList';

interface UserSettings {
    target: ChatMock | null;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
}

const UserSettings: React.FC<UserSettings> = ({ target, setModalLayout }) => {

    const showSettings = () => {
        setModalLayout('appsettings');
    };
    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-column flex-fill',
                    styles['user-settings'],
                )}
            >
                <div className="d-flex justify-content-around align-items-center flex-fill my-2 py-2">
                    <div className="header-back"
                         onClick={showSettings}>
                        <button >
                            Back
                        </button>
                    </div>
                    <div className="header-name">
                        <h5>User settings</h5>
                    </div>
                    <div className="header-done">
                        <button type="button" data-dismiss="modal">
                            Done
                        </button>
                    </div>
                </div>
                <ProfileDetails target={target} />
                <ImportantNotes />
                <div className="d-flex flex-column px-5 py-2">
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Phone number"></input>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserSettings;
