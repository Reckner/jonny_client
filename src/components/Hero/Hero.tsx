import React from 'react';
import $ from 'jquery';

import './Hero.scss';

const Hero: React.FC = () => {
    const changeButton = e => {
        e.preventDefault();
        $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
    };

    return (
        <div className="login-page">
            <div className="form">
                <h2>JONNY</h2>
                <form className="register-form">
                    <div className="input-wrapper">
                        <input type="text" id="reg-name" required />
                        <label htmlFor="reg-name">name</label>
                    </div>
                    <div className="input-wrapper">
                        <input type="password" id="reg-password" required />
                        <label htmlFor="reg-password">password</label>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" id="email" required />
                        <label htmlFor="email">email</label>
                    </div>

                    <button>create</button>
                    <p className="message">
                        Already registered?{' '}
                        <a onClick={changeButton} href="#">
                            Sign In
                        </a>
                    </p>
                </form>
                <form className="login-form">
                    <div className="input-wrapper">
                        <input type="text" id="log-name" required />
                        <label htmlFor="log-name">name</label>
                    </div>
                    <div className="input-wrapper">
                        <input type="password" id="log-password" required />
                        <label htmlFor="log-password">password</label>
                    </div>

                    <button>login</button>
                    <p className="message">
                        Not registered?{' '}
                        <a onClick={changeButton} href="#">
                            Create an account
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Hero;
