import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './ProfileDetails.module.scss';
import profilePicture from '../../../../assets/mocks/images/daniel.jpg';

const ProfileDetails: React.FC = () => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex align-items-center px-5 flex-fill',
                    styles['profile-details'],
                )}
            >
                <div className="mr">
                    <img
                        className={classnames('rounded-circle', styles.avatar)}
                        src={profilePicture}
                        alt="Avatar"
                    />
                </div>
                <div className="d-flex align-items-left flex-column px-3 flex-fill border-black">
                    <div className="first-name">Daniel</div>
                    <div className="last-name">Antonov</div>
                </div>
            </div>
        </>
    );
};

export default ProfileDetails;
