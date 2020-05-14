import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './ChatList.module.scss';
import ChatElement from '../ChatElement/ChatElement';
import { Link } from 'react-router-dom';

export interface ChatMock {
    id: number;
    name: string;
    message: string;
    time: string;
    photo: string;
}

interface ChatList {
    chats: ChatMock[];
    setTarget: React.Dispatch<React.SetStateAction<ChatMock | null>>;
}

const ChatList: React.FC<ChatList> = ({ chats, setTarget }) => {
    return (
        <div
            className={classnames(
                'd-flex flex-column flex-fill overflow-auto w-100 border-left',
                styles['user-container'],
            )}
        >
            {chats.map((chat) => (
                <Link to={`/chat/${chat.id}`} className="text-decoration-none">
                    <ChatElement
                        setTarget={setTarget}
                        id={chat.id}
                        photo={chat.photo}
                        name={chat.name}
                        message={chat.message}
                        time={chat.time}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ChatList;
