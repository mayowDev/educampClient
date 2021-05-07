import { SIGNUP } from './constants';
import {ITypeSignUp} from '../types'
import * as API from "../../../service"

export const signup = (data:ITypeSignUp)=> async dispatch =>{
    const response = await API.signup(data)
    console.log('signupAction response', response);//sucess: ture, token
    if(response.success === true){
        dispatch({type:SIGNUP, payload: response})
    }
}

// export function changeFormType(value:string){
//     return {
//         type: CHANGE_FORM_TYPE,
//         payload: value
//     }
// }


