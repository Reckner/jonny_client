import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './ChatList.module.scss';
import ChatElement from '../ChatElement/ChatElement';
import { Link } from 'react-router-dom';
import { users } from '../../assets/users';

export interface ChatMock {
    id: number;
    name: string;
    message: string;
    time: string;
    photo: string;
    isRegistered: boolean;
}

interface ChatList {
    setTarget: React.Dispatch<React.SetStateAction<ChatMock | null>>;
}

const ChatList: React.FC<ChatList> = ({ setTarget}) => {
    const [chats, setChats] = useState<ChatMock[]>(users);

    return (
        <div
            className={classnames(
                'd-flex flex-column flex-fill overflow-auto border-top border-bottom',
                styles['user-container']
            )}
        >
            {chats.map((chat) => (
                <Link to={`/chat/${chat.id}`}>
                    <ChatElement
                        chats={chats}
                        setTarget={setTarget}
                        id={chat.id}
                        avatar={chat.photo}
                        name={chat.name}
                        message={chat.message}
                        date={chat.time}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ChatList;
