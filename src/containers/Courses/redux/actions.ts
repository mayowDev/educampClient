import { FETCH_COURSES, FETCH_COURSE, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE, LOADING, API_ERROR } from './constants'
import * as API from "../../../services"

export const fetchCourses = () => async dispatch => {
  try {
    dispatch({type:LOADING})
    const response = await API.getAllCourses()
    if(response&&response.success) return dispatch({type: FETCH_COURSES, payload: response.data})
  } catch (error) {
    console.log('fetchCoursesError', error);
    return dispatch({type: API_ERROR})
  }
}

export const fetchCourse = (id) => async dispatch => {
  try {
    dispatch({type:LOADING})
    const response = await API.getCourse(id)
    if(response&&response.success) return dispatch({type: FETCH_COURSE, payload: response.data})
  } catch (error) {
    console.log('fetchCourseError', error);
    return dispatch({type: API_ERROR})
  }
}

export const createCourse = (data)=> async dispatch =>{
  try {
    const response = await API.createCourse(data)
    if(response&&response.success) return dispatch({ type: CREATE_COURSE, payload: response})
  } catch (error) {
    console.log('createCourseError', error);
    return dispatch({type: API_ERROR})
  }
}

export const updateCourse = (id, data)=> async dispatch =>{
  try {
    const response = await API.updateCourse(id, data)
    if(response&&response.success) return dispatch({ type: UPDATE_COURSE, payload: response})
  } catch (error) {
    console.log('updateCourseError', error);
    return dispatch({type: API_ERROR})
  }
}

export const deleteCourse = (id:string) => async dispatch => {
  try {
    const response = await API.deleteCourse(id)
    if(response.success) return dispatch({ type: DELETE_COURSE, payload: {id, response} })
  } catch (error) {
    console.log('deleteCourseError', error);
    dispatch({type: API_ERROR})
  }
}