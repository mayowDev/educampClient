import { GET_PROFILE_DATA, UPDATE_PROFILE_IMAGE } from './actionTypes'

const initialState = {
  profileLoading: true,
  profileData: {}
}

function getProfile (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_DATA:
      console.log('GET_PROFILE_DATA reducer : ===>> ', action.payload);
      return {
        ...state,
        profileData: action.payload,
        profileLoading: false,
      };
    default:
      return state
  }
}

export default getProfile
