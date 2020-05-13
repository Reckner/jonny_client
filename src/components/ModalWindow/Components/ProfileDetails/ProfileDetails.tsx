import React from 'react';
import classnames from 'classnames';
import styles from './ProfileDetails.module.scss';
import { ChatMock } from '../../../ChatList/ChatList';

interface ProfileDetails {
    target: ChatMock | null;
}

const ProfileDetails: React.FC<ProfileDetails> = ({ target }) => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex align-items-center px-5 py-3 flex-fill',
                    styles['profile-details'],
                )}
            >
                <div className="mr">
                    <img
                        className={classnames('rounded-circle', styles.avatar)}
                        src={target?.photo}
                        alt="Avatar"
                    />
                </div>
                <div className="d-flex align-items-left flex-center px-3 flex-fill border-black">
                    <div className="name">{target?.name}</div>
                </div>
            </div>
        </>
    );
};

export default ProfileDetails;
