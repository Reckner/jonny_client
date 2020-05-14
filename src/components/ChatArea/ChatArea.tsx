import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './ChatArea.module.scss';
import { SettingsIcon } from '../../assets/images';
import { ChatMock } from '../ChatList/ChatList';
import io from 'socket.io-client';
import MessageArea from '../MessageArea/MessageArea';
import { IMessage } from '../MessageArea/Message/Message';

interface ChatArea {
    target: ChatMock | null;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
}

const ChatArea: React.FC<ChatArea> = ({ target, setModalLayout }) => {
    let socket;

    const [messageText, setMessageText] = useState<string>('');

    useEffect(() => {
        socket = io.connect('http://127.0.0.1:5001', { reconnection: true });
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        socket.emit('message', messageText, () => {});
    };

    const handleClose = (e) => {
        window.location.replace('/chat');
    };

    const handleTextChange = (e) => {
        setMessageText(e.target.value);
    };

    const showUserProfile = () => {
        setModalLayout('profile');
    };

    const messages: IMessage[] = [
        {
            text:
                'Some text to displaySome text to displaySome text to displaySome text to displaySome text to displaySome text to displaySome text to displaySome text to displaySome text to displaySome text to displaySome text to displaySome text to displaySome text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Some text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Some text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Some text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Some text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Some text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Some text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Some text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Some text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Some text to display',
            sender: 'self',
            time: new Date(2020, 2, 5),
        },
        {
            text: 'Also some text',
            sender: 'nself',
            time: new Date(2020, 2, 5),
        },
    ];

    return target ? (
        <div
            className={classnames(
                'd-flex flex-column border flex-fill',
                styles['chat-area'],
            )}
        >
            <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2">
                <div className="d-flex">
                    <button
                        className={styles['return-button']}
                        type="button"
                        onClick={handleClose}
                    >
                        {'<'}
                    </button>
                    <img
                        className={classnames('rounded-circle', styles.avatar)}
                        src={target.photo}
                        alt="Avatar"
                    />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="profile-name">
                        <h5 className="name">{target.name}</h5>
                    </div>
                    <div className="last-active">
                        <p className="mb-0">last active {target.time}</p>
                    </div>
                </div>
                <i
                    className="fas fa-cog"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                ></i>{' '}
                <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                >
                    <a
                        className="dropdown-item"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showUserProfile}
                    >
                        View Profile
                    </a>
                    <a className="dropdown-item" href="">
                        Delete Chat
                    </a>
                </div>
            </div>
            <div className={classnames('d-flex flex-fill', styles.messagearea)}>
                <MessageArea messages={messages} />
            </div>
            <div className="d-flex justify-content-between align-items-center border-top p-2">
                <div className="input-group mr-2">
                    <input className="form-control rounded"></input>
                </div>
                <button className="btn-primary rounded" type="button">
                    Send
                </button>
            </div>
        </div>
    ) : null;
};

export default ChatArea;
