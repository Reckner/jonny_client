import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ auth, component, path }) => {
    return (
        <>
            {auth ? (
                <Route path={path} component={component} />
            ) : (
                <Redirect to={'/login'} />
            )}
        </>
    );
};

export default PrivateRoute;
