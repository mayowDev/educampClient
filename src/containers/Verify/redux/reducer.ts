// import { LOCAL_STORAGE_KEYS } from '../../../components/Constants'
import { VERIFY } from './constants';

const initialState = {
  isverified: false
};

function getVerified (state = initialState, action: typeof VERIFY) {
  switch (action) {
    case VERIFY:
      return { ...state, isVerified: true };

    default:
      return state
    }
}

export default getVerified
