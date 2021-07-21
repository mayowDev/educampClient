import { FETCH_TEACHERS, FETCH_TEACHER, NULL_RESPONSE, UPDATE_USER, DELETE_USER, LOADING, API_ERROR } from './constants'


const initialState = {
    teachersList: [],
    teacherDetails:{},
    lastFetch: '',

    isNull: false,
    // isCourseUpdated: false,
    // isCourseDeleted: false,
    apiError: false,
    loading:true,
    // currentPage: 0,
    // pages: {},
    // sortBy: 'alphabetical',
}

export default(state = initialState, action)=>{
    switch (action.type) {
        case LOADING: 
            return {
                ...state,
                loading: true, 
            }
        case FETCH_TEACHERS:
            return {
                ...state,
                teachersList:  [...action.payload.rows],
                lastFetch: Date.now(),
                loading: false,
            };
        case FETCH_TEACHER:
            return {
                ...state,
                teacherDetails: {...action.payload},
                lastFetch: Date.now(),
                loading: false
            }
        // case CREATE_COURSE: 
        //     return {
        //         ...state,
        //         isCourseCreated: action.payload.success,
        //         loading: false,
        //     }
        // case UPDATE_COURSE: 
        //     return {
        //         ...state,
        //         isCourseUpdated: action.payload.success,
        //         courseDetails: {...action.payload},
        //         loading: false,
        //     }
        // case DELETE_COURSE: 
        // return {
        //     ...state,
        //     //@ts-ignore
        //     coursesList: state.coursesList.filter(course=> course.id !== action.payload.id),
        //     isCourseDeleted: action.payload.response.success,
        //     loading :false
        // }
        // case SORT_COURSES:
        //     console.log('SORT_COURSES = ', action.payload);
        //     return {...state, sortBy: action.payload};
        case API_ERROR:
        case NULL_RESPONSE: 
        return{
            ...state,
            loading: false,
            apiError:true,
            isNull: true
        }
        default:
            return state;
    }
}

