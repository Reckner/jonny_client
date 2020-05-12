import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './Contacts.module.scss';
import Contact from './Contact/Contact';
import HeaderSettings from '../HeaderSettings/HeaderSettings';
import { ChatMock } from '../../../ChatList/ChatList';
import { users } from '../../../../assets/users';
import { Link } from 'react-router-dom';

interface Contacts {
    target: ChatMock | null;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
}

const Contacts: React.FC<Contacts> = ({ target, setModalLayout }) => {
    const [contacts, setContacts]= useState(users);
    return (
        <>
            <div
                className={classnames(
                    'd-flex flex-column flex-fill border-bottom',
                    styles['contacts'],
                )}
            >
                <HeaderSettings target={target} />
                <div className="d-flex flex-column flex-fill overflow-auto w-100 border-top border-bottom">
                    {contacts.map((contact)=>(
                        <Link to={`/chat/${contact.id}`}>
                        <Contact 
                            name={contact.name}
                            photo={contact.photo}/>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Contacts;
