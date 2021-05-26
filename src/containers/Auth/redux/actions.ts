import { SIGNUP_SUCCESS, VERIFY_SUCCESS, RESEND_VERIFICATION_SUCCESS, GET_USER_DATA, FORGOT_PASSWORD_SUCCESS, LOGOUT,
    LOGIN_SUCCESS, UPDATE_PASSWORD, DELETE_ACCOUNT, API_ERROR, LODING, RESET_PASSWORD_SUCCESS,
} from './constants';
import {ITypeSignUp, ITypeLogin, IForgotPassword , ITypeResetPassword, ITypeUpdatePassword} from '../types'
import * as API from "../../../services"
import { UPDATE_PROFILE_IMAGE, UPDATE_PROFILE } from '../redux/constants';

export const signup = (data:ITypeSignUp)=> async dispatch =>{
     try {
        dispatch({type:LODING})
        const response = await API.signup(data)
        if (!response.success) {
            return dispatch({type:API_ERROR})
        }
        if(response.success){
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response
            });   
        }
     } catch(error) {
        console.log('SignupErr',error)     
        return dispatch({type:API_ERROR})
     }
}

export const resendVerificationEmail= (data:string)=> async dispatch =>{
    try {
       dispatch({type:LODING})
       const response:any = await API.resendVerificationEmail(data)
       
       if (!response.success) {
           return dispatch({type:API_ERROR})
       }
       if(response.success){
           dispatch({
               type: RESEND_VERIFICATION_SUCCESS,
               payload: response
           });   
       }
    } catch(error) {
       console.log('Resentemail Err',error)     
       return dispatch({type:API_ERROR})
    }
}

export const verify = (token)=> async dispatch=>{
    try {
        dispatch({type:LODING})
        const response = await API.verify(token)
        if (!response.success) {
            return dispatch({type:API_ERROR})
        }
        if(response && response.success){
            dispatch({type:VERIFY_SUCCESS, payload: response})
        }
        
    } catch (error) {
        console.log('VerifyErr',error)     
        return dispatch({type:API_ERROR}) 
    }
   
}

export const login = (data:ITypeLogin)=> async dispatch=>{
    try {
        dispatch({type:LODING})
        const response = await API.login(data)
        if (!response.success) {
            return dispatch({type:API_ERROR})
        }
        if(response && response.success){
            dispatch({type:LOGIN_SUCCESS, payload: response})
        }
    } catch (error) {
        console.log('signInErr',error)     
        return dispatch({type:API_ERROR})
    }
}

export const loginWithGoogle  = () => async dispatch=>{
    const response = await API.loginWithGoogle()
    if (!response.success) {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success){
        dispatch({type:LOGIN_SUCCESS, payload: response})
    }
}

export const loginWithFacebook  = () => async dispatch=>{
    const response = await API.loginWithFacebook()
    if (!response.success) {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success){
        dispatch({type:LOGIN_SUCCESS, payload: response})
    }
}

export const getUserData = () => async dispatch => {
    try {
        dispatch({type:LODING})
        const response = await API.getUserProfile();        
        if (!response.success) {
            return dispatch({type:API_ERROR})
        }
        if(response && response.success){
            return dispatch({type:GET_USER_DATA, payload: response})
        }
    } catch (error) {
        console.log('getUserErr',error)     
        return dispatch({type:API_ERROR})
        
    }
    
}

export const forgotPassword  = (email:IForgotPassword) => async dispatch=>{
    try {
        dispatch({type:LODING})
        const response = await API.forgotPassword(email)
        if (!response.success) {
            return dispatch({type:API_ERROR})
        }
        if(response && response.success){
            return dispatch({type:FORGOT_PASSWORD_SUCCESS, payload: response})
        }
    } catch (error) {
        console.log('forgotErr',error)     
        return dispatch({type:API_ERROR})
    }
}

export const resetPassword = (resettoken:string, data:ITypeResetPassword) => async dispatch => {
    try {
        dispatch({type:LODING})
        const response = await API.resetPassword(resettoken, data);
        if (!response.success) {
            return dispatch({type:API_ERROR})
        }
        if(response && response.success){
            dispatch({type:RESET_PASSWORD_SUCCESS, payload: response})
        }
    } catch (error) {
        console.log('resettErr',error)     
        return dispatch({type:API_ERROR})
    }
}

export const updatePassword = (data:ITypeUpdatePassword) => async dispatch => {
    const response = await API.updatePassword(data);
    if (!response.success) {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success){
        dispatch({type:UPDATE_PASSWORD, payload: response})
    }
}

export const updateProfileImage = (imgFile) => async dispatch=>{
    const response = await API.updateProfileImage(imgFile);
    if (!response.success) {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success){
        dispatch({type:UPDATE_PROFILE_IMAGE, payload: response})
    }
}

export const updateProfileData = (profileData) => async dispatch => {
    try {
        dispatch({type:LODING})
        const response = await API.updateProfile(profileData);
        // console.log('updateProfileData ACTION', response);
        if (!response.success) {
            return dispatch({type:API_ERROR})
        }
        if(response && response.success){
            dispatch({type:UPDATE_PROFILE, payload: response})
        } 
        
    } catch (error) {
        console.log('updateProfileErr',error)     
        return dispatch({type:API_ERROR})
    }
} 

export const logout = ()=> async dispatch=>{
    const response = await API.logout()
    if (!response.success) {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success){
        dispatch({type:LOGOUT})
    }
}

export const deleteAccount= () => async (dispatch)=>{
    const response = await API.logout()
    if (!response.success) {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success){
        dispatch({type:DELETE_ACCOUNT})
    }
}