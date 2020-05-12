import React from 'react';
import classnames from 'classnames';
import styles from './UserSettings.module.scss';
import HeaderSettings from '../HeaderSettings/HeaderSettings';
import ImportantNotes from '../ImportantNotes/ImportantNotes';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import BioDetails from '../BioDetails/BioDetails';
import Button from '../Button/Button';
import { ChatMock } from '../../../ChatList/ChatList';

interface UserSettings{
    target: ChatMock | null;
};

const UserSettings: React.FC<UserSettings> = ({target}) => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-column flex-fill',
                    styles['user-settings'],
                )}
            >
                <HeaderSettings target={target}/>
                <ProfileDetails target={target}/>
                <ImportantNotes />
                <BioDetails />
                <hr/>
                <Button whatFor="Username"/>
                <hr/>
                <Button whatFor="Phone number"/>
                <hr/>
            </div>
        </>
    );
};

export default UserSettings;
