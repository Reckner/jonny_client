import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './Footer.module.scss';
import { ChatMock } from '../ChatList/ChatList';
import Modal from '../ModalWindow/Modal';

interface Footer {
    target: ChatMock | null;
    modalLayout: string;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
};

const Footer: React.FC<Footer> = ({target, modalLayout, setModalLayout}) => {

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

    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-row justify-content-between align-items-center py-4 px-4 border',
                    styles.quickLinks,
                )}
            >
                <div className={styles.defaultLogo}
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={showContacts}>
                    <i className="fas fa-users"></i>
                </div>
                <div className={styles.defaultLogo}
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={showAddNewContact}>
                    <i className="fas fa-user-plus"></i>{' '}
                </div>
                <div
                    className={styles.defaultLogo}
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={showSettings}>
                    <i className="fas fa-cog"></i>{' '}
                </div>
                <div className={styles.defaultLogo}>
                    <i className="fas fa-volume-mute"></i>{' '}
                </div>
                <div className={styles.profileLogo}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showUserProfile}>
                        <i className="fas fa-user pa-5"></i>
                </div>
            </div>
            
            <Modal target={target} modalLayout={modalLayout} setModalLayout={setModalLayout}/>
        </>
    );
};

export default Footer;
