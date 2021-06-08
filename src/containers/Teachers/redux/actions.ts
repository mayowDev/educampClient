import { FETCH_TEACHERS, FETCH_TEACHER, UPDATE_USER, DELETE_USER, LOADING, API_ERROR } from './constants'
import * as API from "../../../services"

export const getAllTeachers = () => async dispatch => {
  try {
    dispatch({type: LOADING})
    const response = await API.getAllTeachers()
    if(response&&response.success) return dispatch({type: FETCH_TEACHERS, payload: response.data})
  } catch (error) {
    console.log('fetchUserError', error);
    return dispatch({type: API_ERROR})
  }
}

export const getTeacher = (id) => async dispatch => {
  try {
    dispatch({type:LOADING})
    const response = await API.getTeacher(id)
    if(response&&response.success) return dispatch({type: FETCH_TEACHER, payload: response.data})
  } catch (error) {
    console.log('fetchCourseError', error);
    return dispatch({type: API_ERROR})
  }
}

// export const createTeacher = (data)=> async dispatch =>{
//   try {
//     const response = await API.createCourse(data)
//     if(response&&response.success) return dispatch({ type: CREATE_USER, payload: response})
//   } catch (error) {
//     console.log('createCourseError', error);
//     return dispatch({type: API_ERROR})
//   }
// }

// export const updateTeacherDetails = (id, data)=> async dispatch =>{
//   try {
//     const response = await API.updateCourse(id, data)
//     if(response&&response.success) return dispatch({ type: UPDATE_USER, payload: response})
//   } catch (error) {
//     console.log('updateCourseError', error);
//     return dispatch({type: API_ERROR})
//   }
// }

// export const deleteCourse = (id:string) => async dispatch => {
//   try {
//     const response = await API.deleteCourse(id)
//     if(response.success) return dispatch({ type: DELETE_USER, payload: {id, response} })
//   } catch (error) {
//     console.log('deleteCourseError', error);
//     dispatch({type: API_ERROR})
//   }
// }