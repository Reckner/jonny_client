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
                    'd-flex align-items-center flex-fill my-2 py-2',
                    styles['header-settings'],
                )}
            >
                <div className="d-flex justify-content-center flex-fill">
                        <h5>{headerName}</h5>
                </div>
            </div>
        </>
    );
};

export default HeaderSettings;
