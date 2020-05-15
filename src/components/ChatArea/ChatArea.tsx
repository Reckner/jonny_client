import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './ChatArea.module.scss';
import { SettingsIcon } from '../../assets/images';
import { ChatMock } from '../ChatList/ChatList';
import MessageArea from '../MessageArea/MessageArea';
import { IMessage } from '../MessageArea/Message/Message';
import { Link } from 'react-router-dom';
import { User } from '../../App';

interface ChatArea {
    target: ChatMock | null;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
    handleDeleteChat: any;
    socket: any;
    user: User | null;
}

const ChatArea: React.FC<ChatArea> = ({
    target,
    setModalLayout,
    handleDeleteChat,
    socket,
    user,
}) => {
    const handleClose = (e) => {
        window.location.replace('/chat');
    };

    const showUserProfile = () => {
        setModalLayout('profile');
    };

    let messagesMock: IMessage[] = [
        {
            text: 'Some text to display',
            sender: 'be21467ed99e21d4',
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
    ];

    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<IMessage[]>(messagesMock);

    const handleMessage = (e) => {
        if (user) {
            const text = e.target.value;
            e.target.value = '';
            e.preventDefault();
            setMessage(text);
            const updatedMessages = messages.map((message) => message);
            const newMessage = {
                text: message,
                sender: user.identifier,
                time: new Date(),
            };
            if (message) {
                updatedMessages.push(newMessage);
            }

            setMessages(updatedMessages);

            socket.to().emit('new-message', newMessage, () => {});
        }
    };

    return target ? (
        <div
            className={classnames(
                'd-flex flex-column border-left flex-fill w-100',
                styles['chat-area'],
            )}
        >
            <div className="d-flex justify-content-between border-bottom align-items-center px-3 py-2">
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
                    <Link
                        className="dropdown-item"
                        onClick={(e) => handleDeleteChat(e, target.identifier)}
                        to="/chat"
                    >
                        Delete Chat
                    </Link>
                </div>
            </div>
            <div className={classnames('d-flex flex-fill', styles.messagearea)}>
                <MessageArea messages={messages} user={user} />
            </div>
            <div className="d-flex justify-content-between align-items-center border-top p-2">
                <div className="input-group mr-2">
                    <input
                        className={classnames(
                            'form-control rounded',
                            styles.input,
                        )}
                        placeholder="Type a message..."
                        onChange={({ target: { value } }) => setMessage(value)}
                        onKeyPress={(event) =>
                            event.key === 'Enter' ? handleMessage(event) : null
                        }
                    ></input>
                </div>
                <button
                    className="btn-primary rounded"
                    type="button"
                    onClick={(e) => handleMessage(e)}
                >
                    Send
                </button>
            </div>
        </div>
    ) : null;
};

export default ChatArea;
