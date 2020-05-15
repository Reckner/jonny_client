import React from 'react';
import classnames from 'classnames';
import styles from './Profile.module.scss';
import HeaderSettings from '../HeaderSettings/HeaderSettings';
import { ChatMock } from '../../../ChatList/ChatList';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import Button from '../Button/Button';

interface Profile{
    target: ChatMock | null;
};

const Profile: React.FC<Profile> = ({ target }) => {
    return (
        <div
            className={classnames(
                'd-flex flex-column flex-fill',
                styles['profile'],
            )}
        >
        <HeaderSettings target={target} headerName="Profile"/>
        <ProfileDetails target={target}/>
        <hr />
        <Button whatFor="Username" value={target?.name}/>
        <hr />
        <Button whatFor="Email" value={target?.name}/>
        <hr />
        <Button whatFor="Phone number" value={target?.name}/>
        <hr />
        </div>
    );
};

export default Profile;
