import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './ChatArea.module.scss';
import profilePicture from '../../assets/mocks/images/daniel.jpg';
import { SettingsIcon } from '../../assets/images';
import {ChatMock} from '../ChatList/ChatList';


interface ChatArea {
    target: ChatMock | null;
}

const ChatArea: React.FC<ChatArea> = ({target}) => {


    return target ? (<div
        className={classnames(
            'd-flex flex-column border flex-fill',
            styles['chat-area'],
        )}
    >
        <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2">
            <img
                className={classnames('rounded-circle', styles.avatar)}
                src={target.photo}
                alt="Avatar"
            />
            <div className="d-flex flex-column align-items-center">
                <div className="profile-name">
                    <h4 className="name">{target.name}</h4>
                </div>
                <div className="last-active">
                    <p className="mb-0">last active {target.time}</p>
                </div>
            </div>
            <div className="profile-settings">
                <img className={styles.settings} src={SettingsIcon} />
            </div>
        </div>
        <div className="d-flex flex-fill"></div>
        <div className="d-flex justify-content-between align-items-center border-top p-2">
            <div className="input-group mr-2">
                <input className="form-control rounded"></input>
            </div>
            <button className="btn-primary rounded" type="button">
                Send
            </button>
        </div>
    </div>) : (null);
};

export default ChatArea;
