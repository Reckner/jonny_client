import React, { useState } from 'react';
import { AppSettings, UserSettings, Contacts } from './Components';
import { ChatMock } from '../ChatList/ChatList';
import './Modal.scss';
import AddNewContact from './Components/Contacts/AddNewContact/AddNewContact';
import Profile from './Components/Profile/Profile';
import AddNewChat from './Components/AddNewChat/AddNewChat';
import { Contact } from '../Chat/Chat';

interface Modal {
    target: ChatMock | null;
    modalLayout: string;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
    contacts: Contact[];
    setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const Modal: React.FC<Modal> = ({
    target,
    modalLayout,
    setModalLayout,
    contacts,
    setContacts,
}) => {
    const handleContent = () => {
        switch (modalLayout) {
            case 'appsettings':
                return (
                    <AppSettings
                        target={target}
                        setModalLayout={setModalLayout}
                    />
                );
            case 'usersettings':
                return (
                    <UserSettings
                        target={target}
                        setModalLayout={setModalLayout}
                    />
                );
            case 'profile':
                return <Profile target={target} />;
            case 'contacts':
                return <Contacts contacts={contacts} target={target} />;
            case 'addnewcontact':
                return (
                    <AddNewContact
                        contacts={contacts}
                        setContacts={setContacts}
                        target={target}
                        setModalLayout={setModalLayout}
                    />
                );
            case 'addnewchat':
                return <AddNewChat />;
            default:
                return (
                    <AppSettings
                        target={target}
                        setModalLayout={setModalLayout}
                    />
                );
        }
    };

    return (
        <div
            className="modal fade show"
            id="exampleModalCenter"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div
                className="modal-dialog modal-dialog-centered rounded-top"
                role="document"
            >
                <div className="modal-content">{handleContent()}</div>
            </div>
        </div>
    );
};

export default Modal;
