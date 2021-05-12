import {FETCH_COURSES, SET_COURSES_LOADER, SORT_COURSES, RESET_COURSES} from './constants'


const initialState = {
    courses: [],
    coursesLoading: true,
    canLoadMore: true,
    currentPage: 0,
    pages: {},
    sortBy: 'alphabetical',
}

export default(state = initialState, action) =>{
    switch (action.type) {
        case FETCH_COURSES:
            console.log('FETCH_COURSES reducer = ', action.payload);
            return {
                ...state,
                courses: action.payload.currentPage === 1 ? action.payload.data : [...state.courses, ...action.payload.data],
                pages: action.payload.pagination.page,
                currentPage: action.payload.pagination.currentPage,
                // canLoadMore: action.payload.page && action.payload.page.lastPage && action.payload.currentPage < action.payload.page.lastPage.index,
                coursesLoading: false,
            };

        case SORT_COURSES:
            console.log('UPDATE_SORT_BY = ', action.payload);
            return {...state, sortBy: action.payload};

        case SET_COURSES_LOADER:
            return {
                ...state,
                galleries: [],
                coursesLoading: true,
                canLoadMore: true,
                currentPage: 0,
                pages: {},
                sortBy: 'alphabetical',
                type: '',
            };

        default:
            return state;
    }
}

