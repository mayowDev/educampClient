import React, {useState, useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux"
import {getUserData } from '../../containers/Auth/redux/actions'

import {IProtectedRoute} from './types'
const ProtectedRoute = ({path, component: Component, render, isLoading, isLoggedIn, userProfile, ...rest }:IProtectedRoute) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        if(userProfile&& userProfile.id){
            setIsAuthenticated(true)
        }
    }, [userProfile&&userProfile.id]);
    console.log('isLoading', isLoading, 'isLoggedIn',isLoggedIn, 'isAuthenticated', isAuthenticated)
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

const mapStateToProps = ({auth}) => ({
    isLoading: auth.authLoading,
    logged: auth.isLoggedIn,
    userProfile: auth.userProfile,
})

const mapDispatchToProps = dispatch => ({
    getUserData: () => dispatch(getUserData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);