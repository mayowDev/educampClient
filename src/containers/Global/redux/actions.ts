import browserHistory from '../../../services/history' 
import { CHANGE_SEARCH, SET_REDIRECT_PATH, SET_ROUTE_NAME } from './constants';

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
export function getRouteName(){
    const history = browserHistory;
    return {
        type: SET_ROUTE_NAME,
        payload: history.location.pathname
    }
}