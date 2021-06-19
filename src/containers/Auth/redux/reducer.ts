import { SIGNUP_SUCCESS, VERIFY_SUCCESS, GET_USER_DATA, RESET_PAGE, LOGOUT,  LODING, RESET_PASSWORD_SUCCESS, UPDATE_PROFILE_IMAGE,
  LOGIN_SUCCESS, FORGOT_PASSWORD_SUCCESS, RESEND_VERIFICATION_SUCCESS, UPDATE_PROFILE, UPDATE_PASSWORD, DELETE_ACCOUNT, API_ERROR, 
} from './constants';
import {LOCAL_STORAGE_KEYS} from "../../../components/Constants"

// const isLogged = ()=>{
//   console.log()
//   if(initialState.userProfile.length > 0){return true}else{return false}
// }

const initialState = {
  userProfile:[],
  isRegistered:false,
  isVerified:false,
  isLoggedIn: !!localStorage.getItem(LOCAL_STORAGE_KEYS.LOGIN_STATE),
  userId:null,
  isForgotPasswordSuccess: false,
  isResetPasswordSuccess: false,
  isResendEmailSuccess: false,
  isProfileUpdated: false,
  isProfileImgUpdated:false,
  authLoading:false,
  isApiError: false,
};

export default(state = initialState, action)=>{
  switch (action.type) {
    case LODING:
      return{
        ...state, 
        authLoading:true,
      }
    case SIGNUP_SUCCESS:
      return { 
        ...state, 
        isRegistered: action.payload.success,
        authLoading:false,

      };
    case RESEND_VERIFICATION_SUCCESS: 
      return  {
        ...state,
        isResendEmailSuccess:true,
        authLoading:false
      }
    case VERIFY_SUCCESS: 
      return{
        ...state, 
        isVerified: action.payload.success,
        authLoading:false
      }
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, authLoading:false, };
    case LOGOUT:
      return { 
        ...state, isLoggedIn: false, userProfile:[], authLoading:false,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return { 
        ...state,  
        isForgotPasswordSuccess: action.payload.success, 
        authLoading:false
      }
    case RESET_PASSWORD_SUCCESS:
      return { 
        ...state,  
        isResetPasswordSuccess: action.payload.success, 
        authLoading:false
      }
    case GET_USER_DATA:
      return {
          ...state,
          userProfile:  {...action.payload.data},
          authLoading: false,
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        isProfileUpdated:action.payload.success,
        authLoading: false
    }
    case UPDATE_PROFILE_IMAGE: 
      return {
       ...state,
       isProfileImgUpdated:action.payload.success,
       authLoading: false
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        isPasswordUpdated: action.payload.success,
        authLoading: false
      }
    case DELETE_ACCOUNT: 
    return {
      ...state,
      isRegistered:false,
      isVerified:false,
      isLoggedIn: false,
      isForgotPasswordSuccess: false,
      isResetPasswordSuccess: false,
      isResendEmailSuccess: false,
      isProfileUpdated: false,
      authLoading:false,
      userProfile:[],
      isApiError: false,
    }
    case API_ERROR:
    case RESET_PAGE:
      return {
         ...state,
        authLoading: false, 
        isApiError: true ,
        // isRegistered: false,
        // isVerified:false,
        // isLoggedIn:false,
      };
    default:
      return state;
    }
}
