import React from 'react';
import Message from './Message/Message';
import { IMessage } from './Message/Message';

interface IMessageArea {
    messages: IMessage[];
}

const MessageArea: React.FC<IMessageArea> = ({ messages }) => (
    <div className="d-flex flex-column flex-fill overflow-auto">
        {messages.map((message, i) => (
            <Message message={message} key={i} />
        ))}
    </div>
);

export default MessageArea;
