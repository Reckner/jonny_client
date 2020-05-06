import React, {useState} from 'react';
import classnames from 'classnames';
import styles from './BioDetails.module.scss';

const BioDetails: React.FC= () => {
    return(
        <>
            <div className={classnames(
                'd-flex align-items-center px-5 flex-fill',
                styles['bio-details'],
            )}>
                <div className='d-flex'>
                    <form >
                        <label className={styles.bio}>BIO</label>
                        <input type='text' value='A few words about you'></input>
                    </form>
                </div>
            </div>
        </>
    );
};


export default BioDetails;