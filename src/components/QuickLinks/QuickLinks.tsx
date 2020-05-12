import React, { useState , useEffect} from 'react';
import classnames from 'classnames';
import styles from './QuickLinks.module.scss';
import { BrowserRouter as Router, Switch, Route, Link, RouteComponentProps } from 'react-router-dom';

import { users }  from '../../assets/users';
import {
    SettingsIcon,
    FriendsIcon,
    AddFriendIcon,
    UnMuteIcon,
    ProfileIcon,
} from '../../assets/images';
import Modal from '../ModalWindow/Modal';
import { AppSettings } from '../ModalWindow/Components';
import { ChatMock } from '../ChatList/ChatList';
import { useParams } from 'react-router-dom';

interface RouteParams {
    id: string
}

interface QuickLinks {
    target: ChatMock | null;
};

const QuickLinks: React.FC<QuickLinks> = ({target}) => {
    const params= useParams<RouteParams>();
    console.log(params.id);
    const currentUserId= target?.id;

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

                <Modal target={target}/>
            </>
    );
};

export default QuickLinks;
