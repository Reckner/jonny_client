import React from 'react';
import './MessageArea.scss';
import Message from './Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import { IMessage } from './Message/Message';

const MessageArea: React.FC<IMessage[]> = (messages) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) => (
            <div key={i}>
                <Message message={message} />
            </div>
        ))}
    </ScrollToBottom>
);

export default MessageArea;
