import React from 'react';
import classnames from 'classnames';
import styles from './ChatArea.module.scss';
import profilePicture from '../../assets/mocks/images/daniel.jpg';
import { SettingsIcon } from '../../assets/images';

const ChatArea: React.FC = () => {
    return (
        <div
            className={classnames(
                'd-flex flex-column border flex-fill',
                styles['chat-area'],
            )}
        >
            <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2">
                <img
                    className={classnames('rounded-circle', styles.avatar)}
                    src={profilePicture}
                    alt="Avatar"
                />
                <div className="d-flex flex-column align-items-center">
                    <div className="profile-name">
                        <h4 className="name">Daniel Antonov</h4>
                    </div>
                    <div className="last-active">
                        <p className="mb-0">last active 10:50</p>
                    </div>
                </div>
                <div className="profile-settings">
                    <img className={styles.settings} src={SettingsIcon} />
                </div>
            </div>
            <div className="d-flex flex-fill"></div>
            <div className="d-flex justify-content-between align-items-center border-top p-2">
                <div className="input-group mr-2">
                    <textarea className="form-control rounded"></textarea>
                </div>
                <button className="btn-primary rounded" type="button">
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatArea;
