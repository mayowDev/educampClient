// Messages =CONSTANTS
import { FETCH_COURSES, FETCH_COURSE, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE, LOADING, SORT_COURSES, 
  API_ERROR, RESET_COURSES } from './constants'
import * as API from "../../../services"
//action-creator aka messenggers/delivery

export const fetchCourses = () => async dispatch => {
  const response = await API.getAllCourses()
  if(!response.success){
    dispatch({
      type: API_ERROR,
    })
  }
  dispatch({
    type: FETCH_COURSES,
    payload: response.data
  })
}

export const fetchCourse = (id) => async dispatch => {
  try {
    dispatch({type:LOADING})
    const response = await API.getCourse(id)
    if(response.success){
      dispatch({
        type: FETCH_COURSE,
        payload: response.data
      })
    }
  } catch (error) {
    console.log('editCourseError', error);
    dispatch({
      type: API_ERROR
    })
  }
}

export const createCourse = (data)=> async dispatch =>{
  try {
    const response = await API.createCourse(data)
    if(response.success){
      dispatch({
        type: CREATE_COURSE,
        payload: response
      })
    }
  } catch (error) {
    console.log('createCourseError', error);
    dispatch({
      type: API_ERROR
    })
  }
}

export const updateCourse = (id, data)=> async dispatch =>{
  try {
    const response = await API.updateCourse(id, data)
    dispatch({
      type: UPDATE_COURSE,
      payload: response
    })
  } catch (error) {
    console.log('updateCourseError', error);
    dispatch({
      type: API_ERROR
    })
  }
}

export const deleteCourse = (id:string) => async dispatch => {
  try {
    const response = await API.deleteCourse(id)
    console.log('DELETE_COURSE action => ', response);
    if(response.success){
      dispatch({
        type: DELETE_COURSE,
        payload: {id, response}
      })
    }
  } catch (error) {
    console.log('deleteCourseError', error);
    dispatch({
      type: API_ERROR
    })
  }
}

// export function sortCourses(value) {
//   return {
//     type: SORT_COURSES,
//     payload: value
//   }
// }
// export function resetCourses() {
//   return {
//     type: RESET_COURSES,
//   }
// }
