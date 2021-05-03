// Messages =CONSTANTS
import { FETCH_VIDEOS_INIT, FETCH_VIDEOS_SUCCESS, SELECTED_VIDEO, VIDEO_COMPLETED, SET_VIDEO_LOADER } from './constants'
import {IFetchCourseVideosType} from '../types'

//action-creator aka messenggers/dekivery
export function fetchVideos (filterQuery:IFetchCourseVideosType) {
  console.log('fetchCoursesInit => ', filterQuery);
  return {
    type: FETCH_VIDEOS_INIT,
    payload: {filterQuery}
  }
}
export function fetchVideosSuccess (data) {
  return {
    type: FETCH_VIDEOS_SUCCESS,
    payload: data
  }
}
export function setVideosLoader (data) {
  return {
    type: SET_VIDEO_LOADER,
    payload: data
  }
}

export function setVideoComplete(value) {
  return {
    type: VIDEO_COMPLETED,
    payload: value
  }
}
export function selectVideo() {
  return {
    type: SELECTED_VIDEO,
  }
}

// export function uploadCourseVideos(data){
//   return { //Action  = The message
//     type: UPLOAD_COURSE_VIDEOS,
//     payload: data
//   }
// }
