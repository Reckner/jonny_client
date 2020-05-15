import React from 'react';
import Message from './Message/Message';
import { IMessage } from './Message/Message';
import { User } from '../../App';

interface IMessageArea {
    messages: IMessage[];
    user: User | null;
}

const MessageArea: React.FC<IMessageArea> = ({ messages, user }) => (
    <div className="d-flex flex-column flex-fill overflow-auto">
        {messages.map((message, i) => (
            <Message message={message} user={user} key={i} />
        ))}
    </div>
);

export default MessageArea;
