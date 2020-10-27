import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
    isAuthenticate,
    component: Component,
    managerRouter,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={(props)=>(
                isAuthenticate
                ?
                    <Component { ...props } managerRouter={ managerRouter } />
                :
                    <Redirect to="/auth/login" />
            )}
        />
    )
}

PrivateRoute.protoTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute;
