import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './HeaderSettings.module.scss';
import { ChatMock } from '../../../ChatList/ChatList';
import { Link } from 'react-router-dom';

interface HeaderSettings {
    target: ChatMock | null;
    headerName: string;
}

const HeaderSettings: React.FC<HeaderSettings> = ({ target, headerName }) => {
    const userId = target?.id;
    return (
        <>
            <div
                className={classnames(
                    'd-flex justify-content-around align-items-center flex-fill my-2 py-2',
                    styles['header-settings'],
                )}
            >
                <div className="header-back">
                    <button>
                        <Link to={`/chat/settings`}>Back</Link>
                    </button>
                </div>
                <div className="header-name">
                    <h5>{headerName}</h5>
                </div>
                <div className="header-done">
                    <button type="button" data-dismiss="modal">
                        <Link to={`/chat/${userId}`}>Done</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeaderSettings;
