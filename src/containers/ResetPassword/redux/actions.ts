import { RESET } from './constants';
import {ITypeRESET} from '../types'
export function resetPassword(data:ITypeRESET){
    return {
        type: RESET,
        payload: data
    }
}

