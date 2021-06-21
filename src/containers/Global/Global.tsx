import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import HomePage from "../Home"
import NotFound from "../../views/404/NoFound";
import ProtectedRoute from '../../components/Common/protectedRoute'
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
import Cart from '../Cart'
import Favourites from '../Favourites';

const RenderRoutes = ({isLoggedIn}) => {  
    return (
            <Switch>
                <Route exact path="/" component={Courses.Courses}/>
                <Route exact path="/register" component={SignUp.Signup}/>
                <Route exact path="/login" render={(props) => <Login isLoggedIn={isLoggedIn} {...props} />} />
                {/* <Route exact path="/login" isLoggedIn={isLoggedIn} component={Login}/> */}
                <Route exact path="/resend-email" component={SignUp.Resend}/>
                <Route exact path="/verify" component={Verify}/>
                <Route exact path="/profile" render={(props) => <ProfilePage isLoggedIn={isLoggedIn} {...props} />} />
                {/* <ProtectedRoute exact path="/profile" isLoggedIn={isLoggedIn}  component={ProfilePage}/> */}
                <Redirect exact from="/signup" to="/register"/>
                <Redirect exact from="/signin" to="/login"/>
                <Redirect exact from="/courses" to="/"/>
                <Route exact path="/forgot-password" component={ForgotPassword}/>
                <Route exact path="/reset"  component={ResetPage}/>
                <Route exact path="/courses/new" component={Courses.AddCourse}/>
                <Route exact path="/courses/edit/:id" component={Courses.EditCourse}/>
                <Route exact path="/courses/:slug" component={Courses.CourseDetails}/>
                <Route exact path="/gift/:slug" component={Courses.CourseGift}/>
                <Route exact path="/teachers" component={Teachers.Teachers}/>
                <Route exact path="/teachers/:id" component={Teachers.TeacherDetails}/>
                <Route exact path="/cart" component={Cart.Cart}/>
                <Route exact path="/favourites" component={Favourites}/>
                <Route exact path="/cart/checkout" component={Cart.CheckoutForm}/>
               <Route component={NotFound}/>
            </Switch>
     )
};

const Global = ({isLoggedIn, getUserData, fetchCourses, getWishlistItems,  getCartItems, userProfile, resetPage}) => { 
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)

    useEffect(() => {
        if( isLoggedIn&& !!userProfile.id === false){
            localStorage.clear()
            resetPage()
        }
    },[userProfile&&userProfile.id, isLoggedIn]); 
    useEffect(() => {
        if(isLoggedIn){
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