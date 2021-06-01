import {FETCH_COURSES, CREATE_COURSE, FETCH_COURSE, UPDATE_COURSE, API_ERROR,  LOADING, SORT_COURSES} from './constants'


const initialState = {
    coursesList: [],
    courseDetails:{},
    isCourseCreated: false,
    isCourseUpdated: false,
    canLoadMore: true,
    apiError: false,
    loading:false,
    currentPage: 0,
    pages: {},
    sortBy: 'alphabetical',
}

export default(state = initialState, action)=>{
    switch (action.type) {
        case LOADING: 
            return {
                ...state,
                loading: true, 
            }
        case FETCH_COURSES:
            return {
                ...state,
                coursesList:  [...action.payload.rows],
                pages: action.payload.pagination,
                loading: false,
            };
        case FETCH_COURSE:
            return {
                ...state,
                courseDetails: {...action.payload},
                loading: false
            }
        case CREATE_COURSE: 
        console.log('isCourseCreated reducer', action.payload.success,)
            return {
                ...state,
                isCourseCreated: action.payload.success,
                loading: false,
            }
        case UPDATE_COURSE: 
            return {
                ...state,
                isCourseUpdated: action.payload.success,
                courseDetails: {...action.payload},
                loading: false,
            }
        case SORT_COURSES:
            console.log('SORT_COURSES = ', action.payload);
            return {...state, sortBy: action.payload};
        case API_ERROR: 
        return{
            ...state,
            // courses:  [],
            loading: false,
            apiError:true
        }
        default:
            return state;
    }
}

