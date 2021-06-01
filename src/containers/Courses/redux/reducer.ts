import { LODING } from '../../Auth/redux/constants';
import {FETCH_COURSES, CREATE_COURSE, FETCH_COURSE, API_ERROR,  LOADING, SORT_COURSES} from './constants'


const initialState = {
    coursesList: [],
    iscourseCreated: false,
    canLoadMore: true,
    apiError: false,
    loading:false,
    currentPage: 0,
    pages: {},
    sortBy: 'alphabetical',
}

export default(state = initialState, action)=>{
    switch (action.type) {
        case LODING: 
            return {
                ...state,
                laoding: true, 
            }
        case FETCH_COURSES:
            console.log('FETCH_COURSES reducer = ', action.payload.rows);
            return {
                ...state,
                coursesList:  [...action.payload.rows],
                pages: action.payload.pagination,
                loading: false,
            };
        case CREATE_COURSE: 
        console.log('iscourseCreated reducer', action.payload.success,)
            return {
                ...state,
                iscourseCreated: action.payload.success,
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

