import React from 'react';
import './Message.scss';
import ReactEmoji from 'react-emoji';

export interface IMessage {
    text: string;
    sender: string;
    time: Date;
}

interface Message {
    message: IMessage;
}

const Message: React.FC<Message> = ({ message }) => {
    const { text, sender, time } = message;
    let isSentByCurrentUser = false;

    if (sender === 'self') {
        isSentByCurrentUser = true;
    }

    return isSentByCurrentUser ? (
        <div className="messageContainer justifyEnd">
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">
                    {ReactEmoji.emojify(text)}
                </p>
            </div>
        </div>
    ) : (
        <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">
                    {ReactEmoji.emojify(text)}
                </p>
            </div>
            <p className="sentText pl-10 ">{sender}</p>
        </div>
    );
};

export default Message;
