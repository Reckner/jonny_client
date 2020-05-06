import React from 'react';
import classnames from 'classnames';
import styles from './HeaderSettings.module.scss';

const HeaderSettings: React.FC = () => {
    return (
        <>
            <div
                className={classnames(
                    'd-flex justify-content-around align-items-center flex-fill my-2',
                    styles['header-settings'],
                )}
            >
                <div className="header-back">Back</div>
                <div className="header-name">Daniel Antonov</div>
                <div className="header-done">Done</div>
            </div>
        </>
    );
};

export default HeaderSettings;
