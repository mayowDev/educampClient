import { SIGNUP_SUCCESS, VERIFY_SUCCESS, RESEND_VERIFICATION_SUCCESS, GET_USER_DATA, FORGOT_PASSWORD_SUCCESS, LOGOUT,
    LOGIN_SUCCESS, UPDATE_PASSWORD, DELETE_ACCOUNT, API_ERROR, LODING, RESET_PASSWORD_SUCCESS, UPDATE_PROFILE, UPDATE_PROFILE_IMAGE,
} from './constants';
import {ITypeSignUp, ITypeLogin , ITypeResetPassword, ITypeUpdatePassword} from '../types'
import * as API from "../../../services"

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

export const resendVerificationEmail= (email:string)=> async dispatch =>{
    try {
       dispatch({type:LODING})
       const response:any = await API.resendVerificationEmail(email)
       
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

export const verify = (token:string)=> async dispatch=>{
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

export const loginWithGoogle  = () =>  dispatch=>{
    try {
        API.loginWithGoogle()
    } catch (error) {
        dispatch({type:API_ERROR})
    }
}

export const loginWithFacebook  = () =>  dispatch=>{
    try {
        API.loginWithFacebook()
    } catch (error) {
        dispatch({type:API_ERROR})
    }
}

export const getUserData = () => async dispatch => {
    try {
        dispatch({type:LODING})
        const response = await API.getUserProfile();        
        if (!response.success) {
            dispatch({type:API_ERROR})
        }
        if(response && response.success){
            return dispatch({type:GET_USER_DATA, payload: response})
        }
    } catch (error) {
        console.log('getUserErr',error)     
        dispatch({type:API_ERROR})       
    }
}

export const forgotPassword  = (email:string) => async dispatch=>{
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
    try {
        dispatch({type:LODING})
        const response = await API.updatePassword(data);        
        if (!response.success) {
            return dispatch({type:API_ERROR})
        }
        if(response && response.success){
            dispatch({type:UPDATE_PASSWORD, payload: response})
        }
    } catch (error) {
        console.log('updateErr',error)     
        return dispatch({type:API_ERROR})
    }
}

export const updateProfileImage = (file) => async dispatch=>{   
    try {
        dispatch({type:LODING})
        const response = await API.updateProfileImage(file);
        if (!response.success) {
            return dispatch({type:API_ERROR})
        }
        if(response && response.success){
            dispatch({type:UPDATE_PROFILE_IMAGE, payload: response})
        }  
    } catch (error) {
        console.log('updateProfileimg Err',error)     
        return dispatch({type:API_ERROR})
    } 
}

export const updateProfileData = (profileData) => async dispatch => {
    try {
        dispatch({type:LODING})
        const response = await API.updateProfile(profileData);
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

export const deleteAccount= (email:string) => async (dispatch)=>{
    const response = await API.deleteAccount(email)
    if (!response.success) {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success){
        dispatch({type:DELETE_ACCOUNT})
    }
}