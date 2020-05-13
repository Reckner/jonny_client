import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './BioDetails.module.scss';

const BioDetails: React.FC = () => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex align-items-center px-5 flex-fill',
                    styles['bio-details'],
                )}
            >
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                            Username
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                    ></input>
                </div>
            </div>
        </>
    );
};

export default BioDetails;
