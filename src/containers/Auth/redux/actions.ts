import {SIGNUP, LOGIN, LOGOUT, API_ERROR } from './constants';
import {ITypeSignUp, ITypeLoginData} from '../types'
import * as API from "../../../services"

export const signup = (data:ITypeSignUp)=> async dispatch =>{
    const response = await API.signup(data)
    console.log('signupAction response', response);//sucess && verification email and link
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:SIGNUP, payload: response})
    }
}

export const login = (data:ITypeLoginData)=> async dispatch=>{
    const response = await API.login(data)
    console.log('login action response', response);
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:LOGIN, payload: response})
    }
}

export const logout = ()=> async dispatch=>{
    const response = await API.logout()
    console.log('logout action response', response);
    if (typeof response === "undefined") {
        return dispatch({type:API_ERROR})
    }
    if(response && response.success === true){
        dispatch({type:LOGOUT})
    }
}
