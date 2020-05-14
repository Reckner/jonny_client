import React from 'react';
import classnames from 'classnames';
import styles from './ChatSettings.module.scss';
import HeaderSettings from '../HeaderSettings/HeaderSettings';
import ImportantNotes from '../ImportantNotes/ImportantNotes';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import BioDetails from '../BioDetails/BioDetails';
import Button from '../Button/Button';
import { ChatMock } from '../../../ChatList/ChatList';

interface ChatSettings {
    target: ChatMock | null;
}

const ChatSettings: React.FC<ChatSettings> = ({ target }) => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-column flex-fill',
                    styles['chat-settings'],
                )}
            >
                <HeaderSettings target={target} headerName="Chat settings"/>
                <ProfileDetails target={target} />
                <ImportantNotes />
                <hr />
                <Button whatFor="Username" />
                <hr />
            </div>
        </>
    );
};

export default ChatSettings;
