import { GET_PROFILE_DATA, UPDATE_PROFILE_DATA_INIT, UPDATE_PROFILE_DATA_SUCCESS, GET_UPDATE_PROFILE_DATA_INIT, GET_UPDATE_PROFILE_DATA_SUCCESS, UPDATE_PROFILE_IMAGE } from './actionTypes'

export function getProfileData (data) {
  return {
    type: GET_PROFILE_DATA,
    payload: data
  }
}

export function updateProfileDataInit (data) {
  return {
    type: UPDATE_PROFILE_DATA_INIT,
    payload: data
  }
}

export function updateProfileDataSuccess (data) {
  return {
    type: UPDATE_PROFILE_DATA_SUCCESS,
    payload: data
  }
}

export function getUpdatedProfileDataInit () {
  return {
    type: GET_UPDATE_PROFILE_DATA_INIT
  }
}

export function getUpdatedProfileDataSuccess (data) {
  console.log('GET_UPDATE_PROFILE_DATA_SUCCESS :: = ', data)
  return {
    type: GET_UPDATE_PROFILE_DATA_SUCCESS,
    payload: data
  }
}

export function updateProfileImageData (data) {
  return {
    type: UPDATE_PROFILE_IMAGE,
    payload: data
  }
}
