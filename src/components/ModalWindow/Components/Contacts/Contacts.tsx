import React from 'react';
import classnames from 'classnames';
import styles from './Contacts.module.scss';
import Contact from './Contact/Contact';
import HeaderSettings from '../HeaderSettings/HeaderSettings';
import { ChatMock } from '../../../ChatList/ChatList';

interface Contacts {
    target: ChatMock | null;
    setModalLayout: React.Dispatch<React.SetStateAction<string>>;
}

const Contacts: React.FC<Contacts> = ({ target, setModalLayout }) => {
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
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Contacts;
