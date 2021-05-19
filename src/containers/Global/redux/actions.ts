import { CHANGE_SEARCH, SET_REDIRECT_PATH } from './constants';

export function changeSearch(value){
    return {
        type: CHANGE_SEARCH,
        payload: value
    }
}

export function setRedirectPath(value){
    return {
        type: SET_REDIRECT_PATH,
        payload: value
    }
}


