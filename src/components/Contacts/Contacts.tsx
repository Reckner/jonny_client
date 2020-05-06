import React, {useState} from 'react';
import classnames from 'classnames';
import styles from './Contacts.module.scss'
import Contact from './Contact/Contact';
import HeaderSettings from '../HeaderSettings/HeaderSettings';

const Contacts: React.FC= () => {
    return(
        <>
            <div className={classnames(
                'd-flex flex-column flex-fill border-bottom',
                styles['contacts'],
            )}>
                <HeaderSettings/>
                <div className="d-flex flex-column flex-fill overflow-auto w-100 border-top border-bottom">
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                <Contact/>
                </div>
            </div>
        </>
    );
};


export default Contacts;
