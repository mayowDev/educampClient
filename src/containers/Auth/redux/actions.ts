import { SIGNUP, VERIFY, LOGIN, GET_USER_DATA, FORGOT_PASSWORD, LOGOUT,  RESET_PASSWORD, UPDATE_PASSWORD, API_ERROR, } from './constants';
import {ITypeSignUp, ITypeVerify, ITypeLogin, IForgotPassword , ITypeResetPassword, ITypeUpdatePassword} from '../types'
import * as API from "../../../services"
import { UPDATE_PROFILE_IMAGE } from '../Profile/redux/actionTypes';

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


export const verify = (token:ITypeVerify)=> async dispatch=>{
    const response = await API.verify(token)
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
    console.log('loginWithGoogle action', response)
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
    console.log('getMe', response)
    dispatch( {
      type: GET_USER_DATA,
      payload: response
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
    console.log('resetPassword', response)
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:RESET_PASSWORD, payload: response})
    }
}

export const updatePassword = (data:ITypeUpdatePassword) => async dispatch => {
    const response = await API.updatePassword(data);
    console.log('updatePassword', response)
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:UPDATE_PASSWORD, payload: response})
    }
}

export const updateProfileImage = (imgFile) => async dispatch=>{
    const response = await API.updateProfileImage(imgFile);
    console.log('updateProfileImage action', response)
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:UPDATE_PROFILE_IMAGE, payload: response})
    }

}

export const updateProfileData = (profileData) => async dispatch => {

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
