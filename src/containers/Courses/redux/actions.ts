import { FETCH_COURSES_INIT, FETCH_COURSES_SUCCESS, SET_COURSES_LOADER, SORT_COURSES, RESET_COURSES } from './constants'

export function fetchCoursesInit (page, filter, isGroup, type) {
  console.log('payload in fetchCoursesInit => ', page, filter, isGroup, type);
  return {
    type: FETCH_COURSES_INIT,
    payload: {
      page, filter, isGroup, type
    }
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
