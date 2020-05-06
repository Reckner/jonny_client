import React, {useState} from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss'

const Button: React.FC= () => {
    return(
        <>
            <div className={classnames(
                'd-flex align-items-center justify-content-between px-5 flex-fill',
                styles['button'],
            )}>
                <div className="info">Username</div>
                <div className="name">danielantonov</div>
            </div>
        </>
    );
};


export default Button;
