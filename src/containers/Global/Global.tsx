import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect, useHistory} from 'react-router-dom';
import qs from 'querystring';
import NotFound from "../../views/404/NoFound";
import {LOCAL_STORAGE_KEYS} from "../../components/Constants"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Login from '../Auth/Login';
import SignUp from '../Auth/Signup';
import Verify from '../Auth/Verify';
import ForgotPassword from '../Auth/Forgot';
import ResetPage from '../Auth/Reset'
import ProfilePage from '../Auth/Profile'
import Courses from "../Courses";
import Teachers from '../Teachers'
import Teach from '../Teach'

import Cart from '../Cart'
import Favourites from '../Favourites';

const RenderRoutes = ({isLoggedIn}) => {  
    return (
            <Switch>
                <Route exact path="/" component={Courses.Courses}/>
                <Route exact path="/register" component={SignUp.Signup}/>
                <Route exact path="/login" render={(props) => <Login isLoggedIn={isLoggedIn} {...props} />} />
                <Route exact path="/resend-email" component={SignUp.Resend}/>
                <Route exact path="/verify" component={Verify}/>
                <Route exact path="/profile" render={(props) => <ProfilePage isLoggedIn={isLoggedIn} {...props} />} />
                <Redirect exact from="/signup" to="/register"/>
                <Redirect exact from="/signin" to="/login"/>
                <Redirect exact from="/courses" to="/"/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
                <Route exact path="/reset"  component={ResetPage}/>
                <Route exact path="/courses/new" component={Courses.AddCourse}/>
                <Route exact path="/teach" component={Teach}/>
                <Route exact path="/courses/edit/:id" component={Courses.EditCourse}/>
                <Route exact path="/courses/:slug" component={Courses.CourseDetails}/>
                <Route exact path="/gift/:slug" component={Courses.CourseGift}/>
                <Route exact path="/teachers" component={Teachers.Teachers}/>
                <Route exact path="/teachers/:slug" component={Teachers.TeacherDetails}/>
                <Route exact path="/teacher-landing" component={Teachers.TeacherBoarding}/>
                <Route exact path="/teacher-profile" component={Teachers.TeacherProfile}/>
                <Route exact path="/cart" component={Cart.Cart}/>
                <Route exact path="/favourites" component={Favourites}/>
                <Route exact path="/categories" component={Courses.Categories}/>
                <Route exact path="/categories/:slug" component={Courses.Category}/>
                <Route exact path="/cart/checkout" component={Cart.CheckoutForm}/>
                <Route component={NotFound}/>
            </Switch>
     )
};

const Global = ({isLoggedIn, getUserData, fetchCourses, getWishlistItems,  getCartItems, userProfile, resetPage}) => { 
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const history = useHistory()
    const query = qs.parse(history.location.search)  
    const token = query["?socialId"]
    if(token) {
        const isUser =Boolean(token)
        localStorage.setItem(LOCAL_STORAGE_KEYS.LOGIN_STATE, isUser.toString())
        window.location.href = "/"
    }

    useEffect(() => {
        if( isLoggedIn&& !!userProfile.id === false){
            localStorage.clear()
            resetPage()
        }
    },[userProfile&&userProfile.id, isLoggedIn]); 
    useEffect(() => {
        if(isLoggedIn){
            // console.log('isLoggedIn', isLoggedIn);
            getUserData();  
        }
        fetchCourses();
    }, [isAuthenticated, isLoggedIn && userProfile&& userProfile.id]); 
    useEffect(() => {
        if(userProfile&& userProfile.id){
            setIsAuthenticated(true)
            getCartItems();  
            getWishlistItems();
        }
    }, [userProfile&&userProfile.id]); 
    return (
        <BrowserRouter>
            <Header/>
            <RenderRoutes isLoggedIn={isAuthenticated}/>
            <Footer/>
        </BrowserRouter>
    )
};

export default Global;