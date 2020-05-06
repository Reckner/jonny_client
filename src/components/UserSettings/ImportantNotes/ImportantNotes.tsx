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
                    <span className={styles.info}>Aljo privet kak dela</span>
                </div>
            </div>
        </>
    );
};


export default ImportantNotes;