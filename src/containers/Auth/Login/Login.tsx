import React from 'react'
import LoginForm from '../../../components/Login'
const Login = ({ isLoggedIn, loginWithGoogle, loginWithFacebook, login}) => {

    const onLoginSubmit = user => {
        try {
            login(user)  
        } catch (error) {
            console.error(error);
        }    
    }
    const handleLoginWithFacebook =(e)=>{
        try {
            e.preventDefault();
            loginWithFacebook();
        } catch (error) {
            console.error(error);
        }
    }
    const handleLoginWithGoogle =(e)=>{
        try {
            e.preventDefault();
            loginWithGoogle();
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <LoginForm
            title="Login in"
            subtitle="Don't have an Account? "
            subtitleLinkTo="/register"
            onLogin={onLoginSubmit}
            onLoginWithFacebook={handleLoginWithFacebook}
            onLoginWithGoogle={handleLoginWithGoogle}
            isLoggedIn={isLoggedIn}
        />
    )
}

export default Login
