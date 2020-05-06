import React from 'react';
import classnames from 'classnames';
import {ChatMock} from '../ChatList/ChatList';

import styles from './ChatElement.module.scss';

interface Chat {
    avatar?: string;
    name: string;
    message?: string;
    date?: string;
    id: number;
    setTarget: React.Dispatch<React.SetStateAction<ChatMock | null>>
    chats: ChatMock[];
}

const ChatElement: React.FC<Chat> = ({ avatar, name, message, date, id, setTarget, chats }) => {
    
    return (
        <a
            onClick={()=>setTarget(chats.filter((chat)=>chat.id===id)[0])}
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
