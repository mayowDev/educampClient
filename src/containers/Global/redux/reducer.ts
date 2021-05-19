import { CHANGE_SEARCH, SET_REDIRECT_PATH } from './constants';

const initialState = {
  searchQuery: '',
  redirectPath: '',
};

function getLogin (state = initialState, action) {
  switch (action.type) {
   
    case CHANGE_SEARCH:
      return { ...state, searchQuery: action.payload };

    case SET_REDIRECT_PATH:
      return { ...state, redirectPath: action.payload };

    
    default:
      return state
    }
}

export default getLogin
