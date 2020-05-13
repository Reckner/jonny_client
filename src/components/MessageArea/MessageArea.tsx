import React from 'react';
import './MessageArea.scss';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import { IMessage } from './Message/Message';

interface IMessageArea {
    messages: IMessage[];
}

const MessageArea: React.FC<IMessageArea> = ({ messages }) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) => (
            <div key={i}>
                <Message message={message} />
            </div>
        ))}
    </ScrollToBottom>
);

export default MessageArea;
