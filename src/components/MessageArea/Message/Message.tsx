import classnames from 'classnames';
import React from 'react';
import ReactEmoji from 'react-emoji';

import styles from './Message.module.scss';

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
        <div className="d-flex justify-content-end">
            <div
                className={classnames(
                    'm-2 py-1 px-2 rounded',
                    styles.maxWidth,
                    styles.bgColor,
                )}
            >
                <p className="mb-0 text-white">{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
    ) : (
        <div className="d-flex justify-content-start">
            {/* <p className="sentText pl-10 ">{sender}</p> */}
            <div
                className={classnames(
                    'm-2 py-1 px-2 rounded bg-light',
                    styles.maxWidth,
                )}
            >
                <p className="mb-0 colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
    );
};

export default Message;
