import {FETCH_BOOTCAMPS_SUCCESS, SORT_BOOTCAMPS, SET_BOOTCAMPS_LOADER, RESET_BOOTCAMPS} from './constants'

const initialState ={
    bootcamps: [],
    bootcampsLoading: true,
    canLoadMore: true,
    currentPage: 0,
    pages: {},
    sortBy: 'alphabetical',
}
function reducer(state=initialState, action){
    switch (action.type) {
        case FETCH_BOOTCAMPS_SUCCESS:
            console.log('FETCH_BOOTCAMPS_SUCCESS = ', action.payload);

            return {
                ...state,
                bootcamps: action.payload.currentPage === 1 ? action.payload.data : [...state.bootcamps, ...action.payload.data],
                pages: action.payload.page,
                currentPage: action.payload.currentPage,
                canLoadMore: action.payload.page && action.payload.page.lastPage && action.payload.currentPage < action.payload.page.lastPage.index,
                bootcampsLoading: false,
            };
        default:
            return state;
        }
    
}


export default reducer
