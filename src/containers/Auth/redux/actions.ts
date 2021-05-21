import { SIGNUP, VERIFY, LOGIN, GET_USER_DATA, FORGOT_PASSWORD, LOGOUT,  RESET_PASSWORD, UPDATE_PASSWORD, API_ERROR, } from './constants';
import {ITypeSignUp, ITypeVerify, ITypeLogin, IForgotPassword , ITypeResetPassword, ITypeUpdatePassword} from '../types'
import * as API from "../../../services"
import { UPDATE_PROFILE_IMAGE, UPDATE_PROFILE } from '../redux/constants';

export const signup = (data:ITypeSignUp)=> async dispatch =>{
    const response = await API.signup(data)
    console.log('signup Action response', response);
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:SIGNUP, payload: response})
    }
}


export const verify = (url:ITypeVerify)=> async dispatch=>{
    const response = await API.verify(url)
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:VERIFY, payload: response})
    }
}

export const login = (data:ITypeLogin)=> async dispatch=>{
    const response = await API.login(data)
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:LOGIN, payload: response})
    }
}

export const loginWithGoogle  = () => async dispatch=>{
    const response = await API.loginWithGoogle()
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:LOGIN, payload: response})
    }
}

export const loginWithFacebook  = () => async dispatch=>{
    const response = await API.loginWithFacebook()
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:LOGIN, payload: response})
    }
}

export const getUserData = () => async dispatch => {
    const response = await API.getUserProfile();
    if (!response.success) {
        return dispatch({type:API_ERROR})
    }
    dispatch( {
      type: GET_USER_DATA,
      payload: response.data
    })
}

export const forgotPassword  = (email:IForgotPassword) => async dispatch=>{
    const response = await API.forgotPassword(email)
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        return dispatch({type:FORGOT_PASSWORD, payload: response})
    }
}

export const resetPassword = (data:ITypeResetPassword, resettoken:string) => async dispatch => {
    const response = await API.resetPassword(data, resettoken);
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:RESET_PASSWORD, payload: response})
    }
}

export const updatePassword = (data:ITypeUpdatePassword) => async dispatch => {
    const response = await API.updatePassword(data);
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:UPDATE_PASSWORD, payload: response})
    }
}

export const updateProfileImage = (imgFile) => async dispatch=>{
    const response = await API.updateProfileImage(imgFile);
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:UPDATE_PROFILE_IMAGE, payload: response})
    }

}

export const updateProfileData = (profileData) => async dispatch => {
    const response = await API.updateProfile(profileData);
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:UPDATE_PROFILE, payload: response})
    }

} 

export const logout = ()=> async dispatch=>{
    const response = await API.logout()
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:LOGOUT})
    }
}
