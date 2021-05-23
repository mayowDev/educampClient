import React from "react";
import { Route, Redirect } from "react-router-dom";
import {IProtectedRoute} from './types'
const ProtectedRoute = ({path, component: Component, render, isLoggedIn, ...rest }:IProtectedRoute) => {
    return (
        <Route
        {...rest}
        render={props => {
            if (!isLoggedIn)
            return (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: props.location }
                }}
                />
            );
            return Component ? <Component {...props} /> : render(props);
        }}
        />
    );
};

export default ProtectedRoute;