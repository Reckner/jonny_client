import React from 'react';
import classnames from 'classnames';
import styles from './QuickLinks.module.scss';
import * as $ from 'jquery';

import {
    SettingsIcon,
    FriendsIcon,
    AddFriendIcon,
    UnMuteIcon,
    ProfileIcon,
} from '../../assets/images';
import Modal from '../ModalWindow/Modal';

const QuickLinks: React.FC = () => {
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
                        <img src={FriendsIcon} />
                    </div>
                    <div className={classnames('pb-3', styles.defaultLogo)}>
                        <img src={AddFriendIcon} />
                    </div>
                    <div
                        className={classnames('pb-3', styles.defaultLogo)}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                    >
                        <img src={SettingsIcon} />
                    </div>
                    <div className={styles.defaultLogo}>
                        <img src={UnMuteIcon} />
                    </div>
                </div>
                <div>
                    <div className={styles.profileLogo}>
                        <img src={ProfileIcon} />
                    </div>
                </div>
            </div>

            <Modal />
        </>
    );
};

export default QuickLinks;
