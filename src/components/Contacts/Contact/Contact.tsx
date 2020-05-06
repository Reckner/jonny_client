import React, {useState} from 'react';
import classnames from 'classnames';
import styles from './Contact.module.scss'
import profilePicture from '../../../assets/mocks/images/daniel.jpg';

const Contact: React.FC= () => {
    return(
        <>
            <div className={classnames(
                'd-flex align-items-center px-3 py-2 border-bottom',
                styles['contact'],
            )}>
                <div className="mr-2">
                    <img
                        className={classnames('rounded-circle', styles.avatar)}
                        src={profilePicture}
                        alt="Avatar"
                    />
                </div>
                <div className="d-flex flex-column">
                    <div className="font-weight-bold">
                        <span className={styles.name}>Daniel Antonov</span>
                    </div>
                    <span className={styles.time}>Now active</span>
                </div>
            </div>
        </>
    );
};


export default Contact;
