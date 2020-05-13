import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex justify-content-center flex-fill my-2 py-2',
                    styles['header'],
                )}
            >
                <div className="header-name">
                    <h4>JONNY</h4>
                </div>
            </div>
        </>
    );
};

export default Header;
