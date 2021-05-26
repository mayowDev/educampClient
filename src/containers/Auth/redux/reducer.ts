import { SIGNUP_SUCCESS, VERIFY_SUCCESS, GET_USER_DATA, RESET_PAGE, LOGOUT,  LODING, RESET_PASSWORD_SUCCESS,
  LOGIN_SUCCESS, FORGOT_PASSWORD_SUCCESS, RESEND_VERIFICATION_SUCCESS, UPDATE_PASSWORD, DELETE_ACCOUNT, API_ERROR, 
} from './constants';
import {LOCAL_STORAGE_KEYS} from "../../../components/Constants"

const initialState = {
  isRegistered:false,
  isVerified:false,
  isLoggedIn: !!localStorage.getItem(LOCAL_STORAGE_KEYS.LOGIN_STATE),
  isForgotPasswordSuccess: false,
  isResetPasswordSuccess: false,
  isResendEmailSuccess: false,
  loading:false,
  profileLoading:true,
  userProfile:[],
  isApiError: false,
};

export default(state = initialState, action)=>{
  switch (action.type) {
    case LODING:
      return{
        ...state, 
        loading:true,
      }
    case SIGNUP_SUCCESS:
      return { 
        ...state, 
        isRegistered: action.payload.success,
        loading:false,

      };
    case RESEND_VERIFICATION_SUCCESS: 
      return  {
        ...state,
        isResendEmailSuccess:true,
        loading:false
      }
    case VERIFY_SUCCESS: 
      return{
        ...state, 
        isVerified: action.payload.success,
        loading:false
      }
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, loading:false, };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    case FORGOT_PASSWORD_SUCCESS:
      return { 
        ...state,  
        isForgotPasswordSuccess: action.payload.success, 
        loading:false
      }
    case RESET_PASSWORD_SUCCESS:
      return { 
        ...state,  
        isResetPasswordSuccess: action.payload.success, 
        loading:false
      }
    case GET_USER_DATA:
      return {
          ...state,
          userProfile:  {...action.payload.data},//working fine now
          loading: false,
      };
    case API_ERROR:
    case RESET_PAGE:
      return {
         ...state,
        loading: false, 
        isApiError: true ,
        isRegistered: false,
        isVerified:false,
        isLoggedIn:false,
        profileLoading:false
      };
    default:
      return state;
    }
}
