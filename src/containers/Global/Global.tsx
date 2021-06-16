import React, {lazy, Suspense, useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route, Redirect, useHistory} from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import {Elements,CardElement,useStripe,useElements} from "@stripe/react-stripe-js";

import HomePage from "../Home"
import NotFound from "../../views/404/NoFound";
import ProtectedRoute from '../../components/Common/protectedRoute'
import Header from '../../components/Header'
// import Footer from '../../components/Footer'
import Login from '../Auth/Login';
import SignUp from '../Auth/Signup';
import Verify from '../Auth/Verify';
import ForgotPassword from '../Auth/Forgot';
import ResetPage from '../Auth/Reset'
import ProfilePage from '../Auth/Profile'
import Courses from "../Courses";
import Teachers from '../Teachers'
import Cart from '../Cart'
const RenderRoutes = ({isLoggedIn}) => {  
    return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/register" component={SignUp.Signup}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/resend-email" component={SignUp.Resend}/>
                <Route exact path="/verify" component={Verify}/>
                <ProtectedRoute exact path="/profile" isLoggedIn={isLoggedIn}  component={ProfilePage}/>
                <Redirect exact from="/signup" to="/register"/>
                <Redirect exact from="/signin" to="/login"/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
                <Route exact path="/reset"  component={ResetPage}/>
                <Route exact path="/courses" component={Courses.Courses}/>
                <Route exact path="/courses/new" component={Courses.AddCourse}/>
                <Route exact path="/courses/edit/:id" component={Courses.EditCourse}/>
                <Route exact path="/courses/:slug" component={Courses.CourseDetails}/>
                <Route exact path="/teachers" component={Teachers.Teachers}/>
                <Route exact path="/teachers/:id" component={Teachers.TeacherDetails}/>
                <Route exact path="/cart" component={Cart.Cart}/>
                <Route exact path="/cart/checkout" component={Cart.Checkout}/>
               <Route component={NotFound}/>
            </Switch>
     )
};

const Global = ({isLoggedIn, getUserData, fetchCourses, getWishlistItems, getRouteName, getCartItems, userProfile, cartItems, routeName}) => { 
    useEffect(() => {
        if(isLoggedIn){
            getUserData();  
            getCartItems();  
            getWishlistItems()   
        }
        fetchCourses();
    }, [isLoggedIn]);
    // useEffect(() => {
    //     getRouteName()
    // },[routeName])

    useEffect(() => {
        if(userProfile && userProfile.id){
        }
    }, [userProfile.id]); 

    return (
        <BrowserRouter>
            <Header/>
            <RenderRoutes isLoggedIn={isLoggedIn}/>
            {/* <Footer/> */}
        </BrowserRouter>
    )
};

export default Global;