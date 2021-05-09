import { SIGNUP } from './constants';

const initialState = {
  user: {}
};

function getSignUp (state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      console.log('SIGNUP reducer', action.payload);
      return { 
        ...state, user: action.payload,
      };

    default:
      return state
    }
}

export default getSignUp
