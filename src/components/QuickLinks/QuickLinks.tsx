import React from 'react';
import classnames from 'classnames';
import styles from './QuickLinks.module.scss';
import Modal from '../ModalWindow/Modal';
import { ChatMock } from '../ChatList/ChatList';
import { useParams, Redirect } from 'react-router-dom';
import AddNewChat from '../ModalWindow/Components/AddNewChat/AddNewChat';
import { Contact } from '../Chat/Chat';

interface RouteParams {
    id: string;
}

interface QuickLinks {
    contacts: Contact[];
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
    target: ChatMock | null;
    modalLayout: string;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
}

const QuickLinks: React.FC<QuickLinks> = ({
    target,
    modalLayout,
    setModalLayout,
    contacts,
    setContacts,
}) => {
    const params = useParams<RouteParams>();

    const logout = () => {
        localStorage.removeItem('x-access-token');
        window.location.reload(true);
    };

    const showContacts = () => {
        setModalLayout('contacts');
    };

    const showAddNewContact = () => {
        setModalLayout('addnewcontact');
    };

    const showSettings = () => {
        setModalLayout('appsettings');
    };

    const showUserProfile = () => {
        setModalLayout('profile');
    };

    const showAddNewChat = () => {
        setModalLayout('addnewchat');
    };

    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-column justify-content-between py-4 px-4',
                    styles.quickLinks,
                )}
            >
                <div className="d-flex flex-column align-items-center">
                    <div
                        className={classnames('pb-4', styles.defaultLogo)}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showContacts}
                    >
                        <i className="fas fa-users"></i>
                    </div>
                    <div
                        className={classnames('pb-4', styles.defaultLogo)}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showAddNewContact}
                    >
                        <i className="fas fa-user-plus"></i>{' '}
                    </div>
                    <div className={classnames('pb-4', styles.defaultLogo)}>
                        <i
                            className="fa fa-comments"
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
                                onClick={showAddNewChat}
                            >
                                New Chat
                            </a>
                            <a className="dropdown-item" href="">
                                New Group
                            </a>
                        </div>
                    </div>
                    <div
                        className={classnames('pb-4', styles.defaultLogo)}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showSettings}
                    >
                        <i className="fas fa-cog"></i>{' '}
                    </div>
                    <div className={styles.defaultLogo}>
                        <i className="fas fa-volume-mute"></i>{' '}
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div
                        className={classnames('pb-4', styles.defaultLogo)}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showUserProfile}
                    >
                        <i className="fas fa-user pa-5"></i>
                    </div>
                    <div className={styles.profileLogo} onClick={logout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>

            <Modal
                contacts={contacts}
                setContacts={setContacts}
                target={target}
                modalLayout={modalLayout}
                setModalLayout={setModalLayout}
            />
        </>
    );
};

export default QuickLinks;
