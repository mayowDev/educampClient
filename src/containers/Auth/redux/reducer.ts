import {SIGNUP, VERIFY, LOGIN, GET_USER_DATA, LOGOUT,  FORGOT_PASSWORD, API_ERROR } from './constants';
import {LOCAL_STORAGE_KEYS} from "../../../components/Constants"

const initialState = {
  isNewUser:false,
  isVerified:false,
  loading:true,
  profileLoading:true,
  isLoggedIn: !!localStorage.getItem(LOCAL_STORAGE_KEYS.LOGIN_STATE),
  userProfile:[],
  isApiError: false,
};

export default(state = initialState, action)=>{
  switch (action.type) {
    case SIGNUP:
      return { ...state, isNewUser: true};
    case VERIFY: 
      return{...state, isVerified:true}
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    case GET_USER_DATA:
      console.log('GET_USER_DATA reducer = ', action.payload);
      return {
          ...state,
          userProfile:  {...action.payload},//working fine now
          profileLoading: false,
      };
    case API_ERROR:
      console.log('API_ERROR reducer', action.payload);
      return { ...state, isApiError: true };
    default:
      return state;
    }
}
