import classnames from 'classnames';
import React from 'react';
import ReactEmoji from 'react-emoji';

import styles from './Message.module.scss';
import { User } from '../../../App';

export interface IMessage {
    text: string;
    sender: string;
    time: Date;
}

interface Message {
    message: IMessage;
    user: User | null;
}

const Message: React.FC<Message> = ({ message, user }) => {
    const { text, sender, time } = message;
    let isSentByCurrentUser = false;

    if (user && sender === user.identifier) {
        isSentByCurrentUser = true;
    }

    return isSentByCurrentUser ? (
        <div className="d-flex justify-content-end px-2">
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
        <div className="d-flex justify-content-start px-2">
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
