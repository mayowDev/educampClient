import { GET_PROFILE_DATA, UPDATE_PROFILE_IMAGE, UPDATE_PROFILE_DATA_SUCCESS, GET_UPDATE_PROFILE_DATA_SUCCESS } from './actionTypes'

const initialState = {
  profileData: {},
  uploadMeta: {}
}

function GetProfile (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return { ...state, profileData: action.payload.data, uploadMeta: action.payload.refs };
    case UPDATE_PROFILE_DATA_SUCCESS:
      // console.log('UPDATE_PROFILE_DATA_SUCCESS payload here is : ', action.payload)
      return { ...state, profileData: action.payload }
    case GET_UPDATE_PROFILE_DATA_SUCCESS:
      // console.log('GET_UPDATE_PROFILE_DATA_SUCCESS payload here is : ===>> ', action.payload);
      return {
        ...state,
        profileData: action.payload.data,
        uploadMeta: action.payload.refs
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
