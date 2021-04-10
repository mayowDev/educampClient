import { SIGNUP, CHANGE_FORM_TYPE } from './constants';
import {ITypeSignUp} from '../types'
export function signup(data:ITypeSignUp){
    return {
        type: SIGNUP,
        payload: data
    }
}

export function changeFormType(value:string){
    return {
        type: CHANGE_FORM_TYPE,
        payload: value
    }
}


