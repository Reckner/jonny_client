import React from 'react';
import classnames from 'classnames';
import styles from './UserSettings.module.scss';
import HeaderSettings from '../HeaderSettings/HeaderSettings';
import ImportantNotes from '../ImportantNotes/ImportantNotes';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import BioDetails from '../BioDetails/BioDetails';
import Button from '../Button/Button';

const UserSettings: React.FC = () => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-column flex-fill',
                    styles['user-settings'],
                )}
            >
                <HeaderSettings />
                <ProfileDetails />
                <ImportantNotes />
                <BioDetails />
                <Button />
                <hr />
                <Button />
                <hr />
                <hr />
                <Button />
                <hr />
                <Button />
            </div>
        </>
    );
};

export default UserSettings;
