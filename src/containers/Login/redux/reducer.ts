import { LOCAL_STORAGE_KEYS } from '../../../components/Constants'
import { LOGIN, CHANGE_SEARCH, SET_REDIRECT_PATH } from './constants';

const initialState = {
  isLoggedIn: !!localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN),
  searchQuery: '',
  redirectPath: '',
  isConversation: false
};

function getLogin (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };

    case SET_REDIRECT_PATH:
      return { ...state, redirectPath: action.payload };

    
    default:
      return state
    }
}

export default getLogin
