import React, {useState} from 'react';
import classnames from 'classnames';
import styles from './ImportantNotes.module.scss';

const ImportantNotes: React.FC= () => {
    return(
        <>
            <div className={classnames(
                'd-flex align-items-center flex-fill',
                styles['important-notes'],
            )}>
                <div className="px-5">
                    <span className={styles.info}>Here you can write some useful tips for users</span>
                </div>
            </div>
        </>
    );
};


export default ImportantNotes;