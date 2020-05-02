import React, { useState } from 'react';
import $ from 'jquery';

import './Hero.scss';
import axios from 'axios';

const Hero: React.FC = () => {
    const [logEmail, setLogEmail] = useState<string>('');
    const [logPassword, setLogPassword] = useState<string>('');

    const [regEmail, setRegEmail] = useState<string>('');
    const [regUserName, setRegUserName] = useState<string>('');
    const [regPassword, setRegPassword] = useState<string>('');

    const changeButton = (e) => {
        e.preventDefault();
        $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://127.0.0.1:5000/auth', {
            email: logEmail,
            password: logPassword,
        });

        console.log(response);
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault();

        await axios.post('http://127.0.0.1:5000/user', {
            email: regEmail,
            username: regUserName,
            password: regPassword,
        });
    };

    return (
        <div className="login-page">
            <div className="form">
                <h2>JONNY</h2>
                <form className="register-form" onSubmit={handleCreateAccount}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="reg-email"
                            required
                            onChange={(e) => {
                                setRegEmail(e.target.value);
                            }}
                        />
                        <label htmlFor="email">email</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="reg-username"
                            required
                            onChange={(e) => {
                                setRegUserName(e.target.value);
                            }}
                        />
                        <label htmlFor="reg-name">username</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            id="reg-password"
                            required
                            onChange={(e) => {
                                setRegPassword(e.target.value);
                            }}
                        />
                        <label htmlFor="reg-password">password</label>
                    </div>

                    <button type="submit">create</button>
                    <p className="message">
                        Already registered?{' '}
                        <a onClick={changeButton} href="#">
                            Sign In
                        </a>
                    </p>
                </form>
                <form className="login-form" onSubmit={handleSignIn}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="log-email"
                            required
                            onChange={(e) => {
                                setLogEmail(e.target.value);
                            }}
                        />
                        <label htmlFor="log-name">email</label>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            id="log-password"
                            required
                            onChange={(e) => {
                                setLogPassword(e.target.value);
                            }}
                        />
                        <label htmlFor="log-password">password</label>
                    </div>

                    <button>login</button>
                    <button>fuck it</button>
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
