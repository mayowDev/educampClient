import {FETCH_SEARCH_SUCCESS, RESET_SEARCH, SET_RECENT_SEARCH} from './actionTypes'

const initial = {
    records: {
        galleries: {
            data: [],
            page: {lastPage: {index: 1}}
        },
        artists: {
            data: [],
            page: {lastPage: {index: 1}}
        },
        collectives: {
            data: [],
            page: {lastPage: {index: 1}}
        },
        exhibitions: {
            data: [],
            page: {lastPage: {index: 1}}
        },
    },
    recordsLoading: true,
    canLoadMore: true,
    currentPage: 0,
    pages: {},
}

const initialState = {
    ...initial,
    recentSearch: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case RESET_SEARCH:
            const recentSearch = state.recentSearch;
            return {
                ...initial, recentSearch
            };

        case FETCH_SEARCH_SUCCESS:
          // console.log('action.payload = ', action.payload);
          if (state.currentPage === action.payload.currentPage && action.payload.loadingMore) {
                return state;
            }
            let loadMore = false;
            if (action.payload.galleries.page.lastPage && action.payload.currentPage < action.payload.galleries.page.lastPage.index) {
                loadMore = true;
            }

            if (!loadMore && action.payload.collectives.page.lastPage && action.payload.currentPage < action.payload.collectives.page.lastPage.index) {
                loadMore = true;
            }

            if (!loadMore && action.payload.exhibitions.page.lastPage && action.payload.currentPage < action.payload.exhibitions.page.lastPage.index) {
                loadMore = true;
            }

            if (!loadMore && action.payload.artists.page.lastPage && action.payload.currentPage < action.payload.artists.page.lastPage.index) {
                loadMore = true;
            }

          return {
                ...state,
                records: {
                    galleries: {
                        data: action.payload.currentPage === 1 ? action.payload.galleries.data : [...state.records.galleries.data, ...action.payload.galleries.data],
                        page: action.payload.galleries.page
                    },
                    artists: {
                        data: action.payload.currentPage === 1 ? action.payload.artists.data : [...state.records.artists.data, ...action.payload.artists.data],
                        page: action.payload.artists.page
                    },
                    collectives: {
                        data: action.payload.currentPage === 1 ? action.payload.collectives.data : [...state.records.collectives.data, ...action.payload.collectives.data],
                        page: action.payload.collectives.page
                    },
                    exhibitions: {
                        data: action.payload.currentPage === 1 ? action.payload.exhibitions.data : [...state.records.exhibitions.data, ...action.payload.exhibitions.data],
                        page: action.payload.exhibitions.page
                    },
                },
                recordsLoading: false,
                currentPage: action.payload.currentPage,
                canLoadMore: loadMore,
            }

        case SET_RECENT_SEARCH:
            console.log('recentSearch state => ', action.payload)
            return {...state, recentSearch: action.payload}


        default:
            return state
    }
}

export default reducer
