import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classnames from 'classnames';
import styles from './Chat.module.scss';
import ChatArea from '../ChatArea/ChatArea';
import ChatList, { ChatMock } from '../ChatList/ChatList';
import QuickLinks from '../QuickLinks/QuickLinks';
import HeaderSettings from '../ModalWindow/Components/HeaderSettings/HeaderSettings';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { users } from '../../assets/mocks/users';
import io from 'socket.io-client';
import { User } from '../../App';

interface Chat {
    user: User | null;
}

const Chat: React.FC<Chat> = ({ user }) => {
    const [target, setTarget] = useState<ChatMock | null>(null);
    const [modalLayout, setModalLayout] = useState<string>('appsettings');
    const [layout, setLayout] = useState<string>('default');
    const [chats, setChats] = useState<ChatMock[]>(users);

    let socket;

    useEffect(() => {
        socket = io.connect('http://127.0.0.1:5001', { reconnection: true });
    });

    const handleDeleteChat = (e, identifier) => {
        e.preventDefault();
        setTarget(null);
        var items = chats.filter((chat) => chat.identifier !== identifier);
        setChats(items);
    };

    const changeLayout = () => {
        if (document.documentElement.clientWidth < 650) {
            setLayout('mobile');
        } else {
            setLayout('pc');
        }
    };

    const handleLayout = () => {
        switch (layout) {
            case 'mobile':
                return (
                    <div
                        className={classnames(
                            'd-flex flex-column flex-fill overflow-auto',
                            styles['chat'],
                        )}
                    >
                        <Router>
                            <Route
                                exact
                                path="/chat"
                                render={() => <Header />}
                            />
                            <Route
                                exact
                                path="/chat"
                                render={() => (
                                    <>
                                        <ChatList
                                            chats={chats}
                                            setTarget={setTarget}
                                        />
                                        <div
                                            className={classnames(
                                                'd-flex flex-fill',
                                                styles.emptyChatArea,
                                            )}
                                        ></div>
                                    </>
                                )}
                            />
                            <Route
                                path="/chat/:id"
                                render={() => (
                                    <ChatArea
                                        target={target}
                                        socket={socket}
                                        user={user}
                                        setModalLayout={setModalLayout}
                                        handleDeleteChat={handleDeleteChat}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/chat"
                                render={() => (
                                    <Footer
                                        target={target}
                                        setModalLayout={setModalLayout}
                                        modalLayout={modalLayout}
                                    />
                                )}
                            />
                        </Router>
                    </div>
                );
            case 'pc':
                return (
                    <Router>
                        <QuickLinks
                            target={target}
                            modalLayout={modalLayout}
                            setModalLayout={setModalLayout}
                        />
                        <ChatList chats={chats} setTarget={setTarget} />
                        <div
                            className={classnames(
                                'd-flex flex-fill',
                                styles.emptyChatArea,
                            )}
                        ></div>
                        <Route
                            path="/chat/:id"
                            render={() => (
                                <ChatArea
                                    socket={socket}
                                    user={user}
                                    handleDeleteChat={handleDeleteChat}
                                    target={target}
                                    setModalLayout={setModalLayout}
                                />
                            )}
                        />
                    </Router>
                );
            default:
                return (
                    <Router>
                        <QuickLinks
                            target={target}
                            modalLayout={modalLayout}
                            setModalLayout={setModalLayout}
                        />
                        <ChatList chats={chats} setTarget={setTarget} />
                        <div
                            className={classnames(
                                'd-flex flex-fill',
                                styles.emptyChatArea,
                            )}
                        ></div>
                        <Route
                            path="/chat/:id"
                            render={() => (
                                <ChatArea
                                    socket={socket}
                                    user={user}
                                    handleDeleteChat={handleDeleteChat}
                                    target={target}
                                    setModalLayout={setModalLayout}
                                />
                            )}
                        />
                    </Router>
                );
        }
    };
    useEffect(() => {
        changeLayout();
        window.addEventListener('resize', changeLayout);
        return () => window.removeEventListener('resize', changeLayout);
    });
    return handleLayout();
};

export default Chat;
