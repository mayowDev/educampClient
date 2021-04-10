// import { LOCAL_STORAGE_KEYS } from '../../../components/Constants'
import { SIGNUP, CHANGE_FORM_TYPE } from './constants';

const initialState = {
  formType: '',
};

function getSignUp (state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return { ...state, isLoggedIn: true };

    case CHANGE_FORM_TYPE:
      return { ...state, formType: action.payload };
    
    default:
      return state
    }
}

export default getSignUp
