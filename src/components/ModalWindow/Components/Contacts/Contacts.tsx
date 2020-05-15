import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './Contacts.module.scss';
import Contact from './Contact/Contact';
import HeaderSettings from '../HeaderSettings/HeaderSettings';
import { ChatMock } from '../../../ChatList/ChatList';
import { users } from '../../../../assets/mocks/users';
import { Link } from 'react-router-dom';
import { Contact as IContact } from '../../../Chat/Chat';
import photo from '../../../../assets/mocks/images/avatar.png';

interface Contacts {
    target: ChatMock | null;
    contacts: IContact[];
}

const Contacts: React.FC<Contacts> = ({ target, contacts }) => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-column flex-fill border-bottom',
                    styles['contacts'],
                )}
            >
                <HeaderSettings target={target} headerName="Contacts" />
                <div className="d-flex flex-column flex-fill overflow-auto w-100 border-top border-bottom">
                    {contacts.map((contact) => (
                        <Contact name={contact.username} photo={photo} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Contacts;
