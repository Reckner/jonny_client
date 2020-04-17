import React from 'react';
import classnames from 'classnames';

import styles from './ChatElement.module.scss';

interface Chat {
    avatar?: string;
    name: string;
    message?: string;
    date?: string;
}

const ChatElement: React.FC<Chat> = ({ avatar, name, message, date }) => {
    return (
        <a
            className={classnames(
                'd-flex align-items-center px-3 py-2 text-decoration-none text-body',
                styles.element,
            )}
            href="#"
        >
            <div className="mr-2">
                <img
                    className={classnames('rounded-circle', styles.avatar)}
                    src={avatar}
                    alt="Avatar"
                />
            </div>
            <div className="d-flex flex-column overflow-hidden">
                <div className="font-weight-bold">
                    <span className={styles.name}>{name}</span>
                </div>
                <div className="text-truncate">
                    <span className={styles.message}>{message}</span>
                </div>
            </div>
            <div className="align-self-start ml-auto">
                <span className={styles.date}>{date}</span>
            </div>
        </a>
    );
};

export default ChatElement;
