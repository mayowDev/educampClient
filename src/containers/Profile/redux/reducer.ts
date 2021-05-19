import { GET_PROFILE_DATA, UPDATE_PROFILE_IMAGE } from './actionTypes'

const initialState = {
  profileLoading: true,
  profileData: []
}

export default(state = initialState, action)=> {
  switch (action.type) {
    case GET_PROFILE_DATA:
      console.log('GET_PROFILE_DATA reducer : ===>> ', action.payload.data);
      return {
        ...state,
        // profileData:  [...state.profileData, ...action.payload.data],//this works fine
        profileData:   [...action.payload.data],//
        profileLoading: false,
      };
    default:
      return state;
  }
}
