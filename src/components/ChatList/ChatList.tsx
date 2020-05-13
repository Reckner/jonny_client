import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './ChatList.module.scss';
import ChatElement from '../ChatElement/ChatElement';
import { Link } from 'react-router-dom';
import { users } from '../../assets/mocks/users';

export interface ChatMock {
    id: number;
    name: string;
    message: string;
    time: string;
    photo: string;
}

interface ChatList {
    setTarget: React.Dispatch<React.SetStateAction<ChatMock | null>>;
}

const ChatList: React.FC<ChatList> = ({ setTarget }) => {
    const [chats, setChats] = useState<ChatMock[]>(users);

    const handleDeleteChat = (id) => {
        var items = chats.filter((chat) => chat.id !== id);
        setChats(items);
    };

    return (
        <div
            className={classnames(
                'd-flex flex-column flex-fill overflow-auto border-top border-bottom',
                styles['user-container'],
            )}
        >
            {chats.map((chat) => (
                <Link
                    to={`/chat/${chat.id}`}
                    className="text-decoration-none"
                >
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
