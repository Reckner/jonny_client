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
}

const QuickLinks: React.FC<QuickLinks> = ({ target }) => {
    const params = useParams<RouteParams>();
    console.log(params.id);
    const currentUserId = target?.id;

    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-column justify-content-between py-4 border',
                    styles.quickLinks,
                )}
            >
                <div className="d-flex flex-column align-items-center">
                    <div className={classnames('pb-3', styles.defaultLogo)}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div className={classnames('pb-3', styles.defaultLogo)}>
                        <i className="fas fa-user-plus"></i>{' '}
                    </div>
                    <div
                        className={classnames('pb-3', styles.defaultLogo)}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                    >
                        <i className="fas fa-cog"></i>{' '}
                    </div>
                    <div className={styles.defaultLogo}>
                        <i className="fas fa-volume-mute"></i>{' '}
                    </div>
                </div>
                <div>
                    <div className={styles.profileLogo}>
                        <i className="fas fa-user pa-5"></i>
                    </div>
                </div>
            </div>

            <Modal target={target} />
        </>
    );
};

export default QuickLinks;
