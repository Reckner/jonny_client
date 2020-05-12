import React from 'react';
import classnames from 'classnames';
import styles from './QuickLinks.module.scss';
import Modal from '../ModalWindow/Modal';
import { ChatMock } from '../ChatList/ChatList';
import { useParams } from 'react-router-dom';

interface RouteParams {
    id: string;
}

interface QuickLinks {
    target: ChatMock | null;
    modalLayout: string;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
}

const QuickLinks: React.FC<QuickLinks> = ({ target, modalLayout, setModalLayout }) => {
    const params = useParams<RouteParams>();

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
                    'd-flex flex-column justify-content-between py-4 px-4 border',
                    styles.quickLinks,
                )}
            >
                <div className="d-flex flex-column align-items-center">
                    <div className={classnames('pb-4', styles.defaultLogo)}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showContacts}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className={classnames('pb-4', styles.defaultLogo)}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showAddNewContact}>
                        <i className="fas fa-user-plus"></i>{' '}
                    </div>
                    <div
                        className={classnames('pb-4', styles.defaultLogo)}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showSettings}>
                        <i className="fas fa-cog"></i>{' '}
                    </div>
                    <div className={styles.defaultLogo}>
                        <i className="fas fa-volume-mute"></i>{' '}
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className={styles.profileLogo}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={showUserProfile}>
                        <i className="fas fa-user pa-5"></i>
                    </div>
                </div>
            </div>

            <Modal target={target} modalLayout={modalLayout} setModalLayout={setModalLayout}/>
        </>
    );
};

export default QuickLinks;
