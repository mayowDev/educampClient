import { VERIFY } from './constants';
import {ITypeVerify} from '../types'
export function verify(data:ITypeVerify){
    return {
        type: VERIFY,
        payload: data
    }
}

