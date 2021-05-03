// Messages =CONSTANTS
import { FETCH_COURSES_INIT, FETCH_COURSES_SUCCESS, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE, SET_COURSES_LOADER, SORT_COURSES, RESET_COURSES } from './constants'
import {ICourseFetchInitType} from '../types'
//action-creator aka messenggers/dekivery
export function fetchCoursesInit (filterQuery:ICourseFetchInitType) {
  console.log('fetchCoursesInit => ', filterQuery);
  return {
    type: FETCH_COURSES_INIT,
    payload: {filterQuery}
  }
}
export function fetchCoursesSuccess (data) {
  return {
    type: FETCH_COURSES_SUCCESS,
    payload: data
  }
}
export function setCoursesLoader (data) {
  return {
    type: SET_COURSES_LOADER,
    payload: data
  }
}

export function sortCourses(value) {
  return {
    type: SORT_COURSES,
    payload: value
  }
}
export function resetCourses() {
  return {
    type: RESET_COURSES,
  }
}

export function createCourse(data){
  return { //Action  = The message
    type: CREATE_COURSE,
    payload: data
  }
}

export function updateCourse(data){
  return {
    type: UPDATE_COURSE,
    payload: data
  }
}

export function deleteCourse(data){
  return {
    type: DELETE_COURSE,
    payload: data
  }
}