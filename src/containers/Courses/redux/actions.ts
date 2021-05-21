// Messages =CONSTANTS
import { FETCH_COURSES,FETCH_COURSES_FAILED, FETCH_COURSE, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE, SORT_COURSES, RESET_COURSES } from './constants'
import * as API from "../../../services"
//action-creator aka messenggers/delivery

export const fetchCourses = () => async dispatch => {
  const response = await API.getAllCourses()
  console.log('FETCH_COURSES action => ', response.success);
  if(!response.success){
    dispatch({
      type: FETCH_COURSES_FAILED,
    })
  }
  dispatch({
    type: FETCH_COURSES,
    payload: response.data
  })
}
export const fetchCourse = (id) => async dispatch => {
  const response = await API.getCourse(id)
  console.log('FETCH_COURSE action => ', response);
  dispatch({
    type: FETCH_COURSE,
    payload: id
  })
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

// export const  createCourse = (data, userId)=> async dispatch =>{
//   const response = await API.createCourse(data, userId)
//   console.log('CREATE_COURSE action => ', response);
//   dispatch({
//     type: CREATE_COURSE,
//     payload: response
//   })
// }

// export function updateCourse(data){
//   return {
//     type: UPDATE_COURSE,
//     payload: data
//   }
// }

// export function deleteCourse(data){
//   return {
//     type: DELETE_COURSE,
//     payload: data
//   }
// }