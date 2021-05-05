// import { LOCAL_STORAGE_KEYS } from '../../../components/Constants'
import { SIGNUP } from './constants';

const initialState = {
  isLoggedIn: false,
  user: {}
};

function getSignUp (state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      console.log('SIGNUP reducer', action.payload);
      return { ...state, user: action.payload };

    default:
      return state
    }
}

export default getSignUp
