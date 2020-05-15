import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { Chat, Hero, PrivateRoute } from './components';

export interface User {
    identifier: string;
    username: string;
    email: string;
}

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const authenticated = async (): Promise<boolean> => {
        return true
        //Promise((resolve, reject) => {
        //     const token = localStorage.getItem('x-access-token') || '';
        //     if (token.length > 0) {
        //         try {
        //             const decoded = jwt.verify(
        //                 token,
        //                 process.env.JWT_SECRET || 'bestteamreckneris',
        //             );

        //             if (decoded) {
        //                 resolve(true);
        //             } else {
        //                 resolve(false);
        //             }
        //         } catch (err) {
        //             reject(err);
        //         }
        //     } else {
        //         resolve(false);
        //     }
        // });
    };

    const [auth, setAuth] = useState<any>(authenticated());

    useEffect(() => {
        (async () => {
            setAuth(await authenticated());
        })();

        const token = localStorage.getItem('x-access-token') || '';
        if (token.length > 0) {
            try {
                const decoded = jwt.verify(
                    token,
                    process.env.JWT_SECRET || 'bestteamreckneris',
                );

                if (decoded) {
                    const { identifier, email, username } = decoded;
                    setUser({ identifier, email, username });
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    }, []);

    return (
        <Router>
            <Switch>
                <Route
                    render={() => (
                        <Hero auth={auth} setAuth={setAuth} setUser={setUser} />
                    )}
                    path="/login"
                />
                <Route
                    render={() => <Redirect to={'/login'} />}
                    exact
                    path="/"
                />
                <PrivateRoute
                    auth={auth}
                    path="/chat"
                    render={() => <Chat user={user} />}
                />
            </Switch>
        </Router>
    );
};

export default App;
