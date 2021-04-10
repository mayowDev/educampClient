// import { LOCAL_STORAGE_KEYS } from '../../../components/Constants'
import { RESET } from './constants';

const initialState = {
  password: ''
};

function getResetPassword (state = initialState, action) {
  switch (action.type) {
    case RESET:
      return { ...state, password: action.payload };

    default:
      return state
    }
}

export default getResetPassword
