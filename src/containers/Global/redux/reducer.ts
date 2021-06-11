import { CHANGE_SEARCH, SET_REDIRECT_PATH, SET_ROUTE_NAME } from './constants';

const initialState = {
  searchQuery: '',
  redirectPath: '',
  routeName: ''
};

export default(state = initialState, action) => {
  switch (action.type) {
   
    case CHANGE_SEARCH:
      return { ...state, searchQuery: action.payload };

    case SET_REDIRECT_PATH:
      return { ...state, redirectPath: action.payload };
    case SET_ROUTE_NAME: 
      return{...state, routeName: action.payload}
    
    default:
      return state
    }
}


