import React from 'react';
import classnames from 'classnames';
import styles from './Contact.module.scss';

interface IContact {
    name: string;
    photo: string;
}

const Contact: React.FC<IContact> = ({ name, photo }) => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex align-items-center px-3 py-2',
                    styles['contact'],
                )}
            >
                <div className="mr-2">
                    <img
                        className={classnames('rounded-circle', styles.avatar)}
                        src={photo}
                        alt="Avatar"
                    />
                </div>
                <div className="d-flex flex-column">
                    <div className="font-weight-bold">
                        <span className={styles.name}>{name}</span>
                    </div>
                    <span className={styles.time}>Now active</span>
                </div>
            </div>
        </>
    );
};

export default Contact;
