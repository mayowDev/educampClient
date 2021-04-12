import { FETCH_COURSES_INIT, FETCH_COURSES_SUCCESS, SET_COURSES_LOADER, SORT_COURSES, RESET_COURSES } from './constants'
import {ICourseFetchInitType} from '../types'
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
