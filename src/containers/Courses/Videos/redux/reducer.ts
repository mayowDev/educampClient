
import {FETCH_VIDEOS_INIT, FETCH_VIDEOS_SUCCESS, SELECTED_VIDEO, VIDEO_COMPLETED} from './constants'

const initialState = {
    videos: [],
    isVideosLading: true,
    currentVideo: '',
    canLoadMore: true,
    isCurrentVideoCompleted:false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_VIDEOS_INIT:
            return {
                ...state,
                isVideosLading:true
            }
        case FETCH_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: [...state.videos, ...action.payload.data],
                // canLoadMore: action.payload.page && action.payload.page.lastPage && action.payload.currentPage < action.payload.page.lastPage.index,
                isVideosLading: false,
            };
        case SELECTED_VIDEO:
            return {
                ...state,
                currentVideo: action.payload

            }
        case VIDEO_COMPLETED:
            return {
                ...state,
                isCurrentVideoCompleted: true
            }
        default: 
            return  state
    }     

}

export default reducer