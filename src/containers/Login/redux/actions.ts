import { LOGIN, SET_REDIRECT_PATH } from './constants';
import {ITypeLoginData} from '../types'
import * as API from "../../../service"

export const login = (data:ITypeLoginData)=> async dispatch=>{
    const response = await API.login(data)
    dispatch({type:LOGIN, payload: response})
}

// export function setRedirectPath(value){
//     return {
//         type: SET_REDIRECT_PATH,
//         payload: value
//     }
// }


