import { GET_PROFILE_DATA_INIT, UPDATE_PROFILE_IMAGE, UPDATE_PROFILE_DATA_SUCCESS, GET_PROFILE_DATA_SUCCESS } from './actionTypes'

const initialState = {
  profileData: {},
  uploadMeta: {}
}

function GetProfile (state = initialState, action) {
  switch (action.type) {
    // case GET_PROFILE_DATA_INIT:
    //   return { ...state, profileData: action.payload.data };
    // case UPDATE_PROFILE_DATA_SUCCESS:
    //   // console.log('UPDATE_PROFILE_DATA_SUCCESS payload here is : ', action.payload)
    //   return { ...state, profileData: action.payload }
    case GET_PROFILE_DATA_SUCCESS:
      console.log('GET_PROFILE_DATA_SUCCESS payload here is : ===>> ', action.payload);
      return {
        ...state,
        profileData: action.payload.data
      };
    case UPDATE_PROFILE_IMAGE:
      console.log('action.payload L ', action.payload);
      return {
        ...state,
        profileData: {
          ...state.profileData,
          image: action.payload
        }
      }

    default:
      return state
  }
}

export default GetProfile
