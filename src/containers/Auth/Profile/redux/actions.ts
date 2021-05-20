import { GET_PROFILE_DATA, UPDATE_PROFILE_DATA, GET_UPDATED_PROFILE_DATA, UPDATE_PROFILE_IMAGE, FETCH_PROFILE_FAILED } from './actionTypes'
import * as API from "../../../../services"

export const getProfileData = () => async dispatch => {
  const response = await API.getUserProfile();
  console.log('getMe', response)
  dispatch( {
    type: GET_PROFILE_DATA,
    payload: response
  })
}

// export const fetchUserProfile = () => async dispatch => {
//   const response = await API.getUserProfile()
//   console.log('FETCH_Profile action => ', response);
//   if(!response.success){
//    return dispatch({type: FETCH_PROFILE_FAILED})
//   }
//   dispatch({
//     type: GET_PROFILE_DATA,
//     payload: response.data
//   })
// }
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
