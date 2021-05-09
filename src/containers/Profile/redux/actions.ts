import { GET_PROFILE_DATA, UPDATE_PROFILE_DATA, GET_UPDATED_PROFILE_DATA, UPDATE_PROFILE_IMAGE } from './actionTypes'
import * as API from "../../../service"

export const getProfileData = () => async dispatch => {
  const response = await API.getUserProfile();
  dispatch( {
    type: GET_PROFILE_DATA,
    payload: response.data
  })
}

export function updateProfileImage (data) {
  return {
    type: UPDATE_PROFILE_IMAGE,
    payload: data
  }
}

export function updateProfileData (data) {
  return {
    type: UPDATE_PROFILE_DATA,
    payload: data
  }
}


export function getUpdatedProfileData () {
  return {
    type: GET_UPDATED_PROFILE_DATA
  }
}

// export function getProfileDataSuccess (data) {
//   console.log('GET_PROFILE_DATA_SUCCESS action :: = ', data)
//   return {
//     type: GET_PROFILE_DATA_SUCCESS,
//     payload: data
//   }
// }


// export function updateProfileDataSuccess (data) {
//   return {
//     type: UPDATE_PROFILE_DATA_SUCCESS,
//     payload: data
//   }
// }



