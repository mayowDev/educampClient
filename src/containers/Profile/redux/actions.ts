import { LOGIN, CHANGE_SEARCH, SET_REDIRECT_PATH, SET_CONVERSATION } from './constants';

export function login(){
    return {
        type: LOGIN,
        payload: true
    }
}

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

export function setConversation(value){
    return {
        type: SET_CONVERSATION,
        payload: value
    }
}

