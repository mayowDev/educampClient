import {SIGNUP, LOGIN, LOGOUT, API_ERROR } from './constants';
import {LOCAL_STORAGE_KEYS} from "../../../components/Constants"

const initialState = {
  isNewUser:false,
  isLoggedIn: !!localStorage.getItem(LOCAL_STORAGE_KEYS.LOGIN_STATE),
  searchQuery: '',
  isApiError: false,
  isConversation: false
};

function authReducer (state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return { 
        ...state, isNewUser: true,
      };
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
  
    case API_ERROR:
      console.log('API_ERROR reducer', action.payload);
      return { ...state, isApiError: true };
    default:
      return state
    }
}

export default authReducer
