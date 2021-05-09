import {FETCH_BOOTCAMPS} from './constants'

const initialState ={
    bootcamps: [],
    bootcampsLoading: true,
    // canLoadMore: true,
    currentPage: 0,
    pages: {},
}
function reducer(state=initialState, action){
    switch (action.type) {
        case FETCH_BOOTCAMPS:
            console.log('FETCH_BOOTCAMPS payload= ', action.payload);

            return {
                ...state,
                bootcamps:  action.payload,
                pages: action.payload.pagination,
                // canLoadMore: action.payload.page && action.payload.page.lastPage && action.payload.currentPage < action.payload.page.lastPage.index,
                bootcampsLoading: false,
            };
        default:
            return state;
        }
    
}


export default reducer
