import React, {lazy, Suspense, useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
/** Shared components */
import HomePage from "../Home"
import NotFound from "../../views/404/NoFound";
import ProtectedRoute from '../../components/Common/protectedRoute'

/** Auth components */
import Login from '../Auth/Login';
import SignUp from '../Auth/Signup';
import Verify from '../Auth/Verify';
import ForgotPassword from '../Auth/Forgot';
import ResetPage from '../Auth/Reset'
import ProfilePage from '../Auth/Profile'
/** Course components */
import CourseDetails from "../Courses/Details"
import CoursesPage from "../Courses";

const RenderRoutes = ({isLoggedIn}) => {  
    return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/courses" component={CoursesPage}/>
                <Route exact path="/courses/:id" component={CourseDetails}/>
                <Route exact path="/auth/reset"  component={ResetPage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={SignUp.Signup}/>
                <Route exact path="/resend-email" component={SignUp.Resend}/>
                <Route exact path="/auth/verify" component={Verify}/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
                <Redirect exact from="/signup" to="/register"/>
                <Redirect exact from="/signin" to="/login"/>
                <ProtectedRoute exact path="/profile" isLoggedIn={isLoggedIn}  component={ProfilePage}/>
               <Route component={NotFound}/>
            </Switch>
     )
};
const Global = ({isLoggedIn, userProfile, getUserData}) => { 
    useEffect(() => {
        getUserData()
    },[])
    useEffect(() => {
        if(userProfile && userProfile.id){
            // console.log('userProfile in 123 : ', userProfile);
            const { id, name, email, role } = userProfile;
            console.log('global profile ====>', name)
        }
    }, [userProfile.id]); 
    return (
        <BrowserRouter>
            <RenderRoutes isLoggedIn={isLoggedIn}/>
        </BrowserRouter>
    )
};

export default Global;