import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Menu from '../components/Menu';

const PrivateRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
console.log(isAuthenticated)
    return (
        <>
        <Menu />
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/login" /> )
            )}
        />
        </>
    )
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}