import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

interface Button {
    whatFor: string;
}

const Button: React.FC<Button> = ({ whatFor }) => {
    const [name, setName] = useState('');
    return (
        <>
            <div
                className={classnames(
                    'd-flex align-items-center justify-content-between px-5 flex-fill',
                    styles['button'],
                )}
            >
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                            {whatFor}
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
            </div>
        </>
    );
};

export default Button;