import { SIGNUP_SUCCESS, SIGNUP_FAIL, VERIFY, GET_USER_DATA, RESET_PAGE, LOGOUT,  RESET_PASSWORD,
  LOGIN_SUCCESS, UPDATE_PASSWORD, DELETE_ACCOUNT, API_ERROR, 
} from './constants';
import {LOCAL_STORAGE_KEYS} from "../../../components/Constants"

const initialState = {
  isRegistered:false,
  isVerified:false,
  loading:true,
  profileLoading:true,
  isLoggedIn: !!localStorage.getItem(LOCAL_STORAGE_KEYS.LOGIN_STATE),
  userProfile:[],
  isApiError: false,
};

export default(state = initialState, action)=>{
  switch (action.type) {
    case RESET_PAGE:
      return{
        ...state, 
        isRegistered: false,
        loading:false,
      }
    case SIGNUP_SUCCESS:
      return { 
        ...state, 
        isRegistered: action.payload.success,
        loading:false,

      };
    case SIGNUP_FAIL:
      return { 
        ...state, 
        loading:false,
        isApiError: true,
        isRegistered: false
      };
    
    case VERIFY: 
      return{...state, isVerified:true}
    case LOGIN_SUCCESS:
      return { ...state, loading:false, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    case GET_USER_DATA:
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
