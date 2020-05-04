import React from 'react';
import classnames from 'classnames';
import styles from './QuickLinks.module.scss';

import {
    SettingsIcon,
    FriendsIcon,
    AddFriendIcon,
    UnMuteIcon,
    ProfileIcon,
} from '../../assets/images';
import Modal from '../ModalWindow/Modal';

const QuickLinks: React.FC = () => {
    const [state, setState] = React.useState({
        showModal: false,
    });

    const handleSettings = () => {
        setState({
            showModal: true,
        });
    };

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
                    <div className={classnames('pb-3', styles.defaultLogo)}>
                        <a onClick={() => handleSettings()}>
                            <img src={SettingsIcon} />
                        </a>
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

            {state.showModal ? <Modal /> : null}
        </>
    );
};

export default QuickLinks;
