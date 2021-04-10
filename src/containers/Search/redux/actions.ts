import { FETCH_SEARCH_INIT, FETCH_SEARCH_SUCCESS, RESET_SEARCH, SET_RECENT_SEARCH } from './actionTypes'

export function fetchSearchInit (searchQuery, page, loadingMore) {
  return {
    type: FETCH_SEARCH_INIT,
    payload: {
      searchQuery,
      page,
      loadingMore
    }
  }
}
export function fetchSearchSuccess (data) {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: data,
  }
}

export function resetSearch() {
  // console.log('resetSearch')
  return {
    type: RESET_SEARCH,
  }
}

export function setRecentSearch(searchedValue) {
  console.log('searchedValue seted ', searchedValue);
  return {
    type: SET_RECENT_SEARCH,
    payload: searchedValue
  }
}
