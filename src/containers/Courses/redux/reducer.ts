import {FETCH_COURSES_SUCCESS, SET_COURSES_LOADER, SORT_COURSES, RESET_COURSES} from './constants'


const initialState = {
    courses: [],
    coursesLoading: true,
    canLoadMore: true,
    currentPage: 0,
    pages: {},
    sortBy: 'alphabetical',
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSES_SUCCESS:
            console.log('FETCH_COURSES_SUCCESS = ', action.payload);
            return {
                ...state,
                courses: action.payload.currentPage === 1 ? action.payload.data : [...state.courses, ...action.payload.data],
                pages: action.payload.page,
                currentPage: action.payload.currentPage,
                canLoadMore: action.payload.page && action.payload.page.lastPage && action.payload.currentPage < action.payload.page.lastPage.index,
                coursesLoading: false,
            };

        case SORT_COURSES:
            console.log('UPDATE_SORT_BY = ', action.payload);
            return {...state, sortBy: action.payload};

        case SET_COURSES_LOADER:
            return {
                ...state,
                galleriesLoading: action.payload,
            };

        case SET_COURSES_LOADER:
            return {
                ...state,
                galleries: [],
                galleriesLoading: true,
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

export default reducer
