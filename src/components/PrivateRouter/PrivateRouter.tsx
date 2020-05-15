import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ auth, render, path }) => {
    return (
        <>
            {auth ? (
                <Route path={path} render={render} />
            ) : (
                <Redirect to={'/login'} />
            )}
        </>
    );
};

export default PrivateRoute;
