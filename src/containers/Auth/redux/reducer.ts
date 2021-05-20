import {SIGNUP, LOGIN, LOGOUT,  FORGOT_PASSWORD, API_ERROR } from './constants';
import {LOCAL_STORAGE_KEYS} from "../../../components/Constants"

const initialState = {
  isNewUser:false,
  loading:true,
  isLoggedIn: !!localStorage.getItem(LOCAL_STORAGE_KEYS.LOGIN_STATE),
  forgotPassword: {},
  isApiError: false,
};

export default(state = initialState, action)=>{
  switch (action.type) {
    case SIGNUP:
      return { 
        ...state, isNewUser: true,
      };
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    case FORGOT_PASSWORD: 
    console.log('FORGOT_PASSWORD reducer', action.payload);
      return { 
        ...state, 
        forgotPassword: {...state.forgotPassword, ...action.payload},
        loading: false
      }
    case API_ERROR:
      console.log('API_ERROR reducer', action.payload);
      return { ...state, isApiError: true };
    default:
      return state
    }
}
