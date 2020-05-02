import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    return <>{props.auth ? props.children : <Redirect to={'/'} />}</>;
};

export default PrivateRoute;
