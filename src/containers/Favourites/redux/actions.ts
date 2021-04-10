import {GET_FAVOURITES_INIT, GET_FAVOURITES_SUCCESS, UPDATE_FAVOURITE, UPDATE_DATA_IN_FAVOURITE} from "./actionTypes";

export function fetchFavouritesInit (page) {
    console.log('fetchFavouritesInit ')
    return {
        type: GET_FAVOURITES_INIT,
        payload: page
    }
}

export function fetchFavouritesSuccess (data) {
    return {
        type: GET_FAVOURITES_SUCCESS,
        payload: data
    }
}

export function updateFavourite() {
    return {
        type: UPDATE_FAVOURITE,
    }
}

export function updateDataInFavourite(favouriteType, id, currentState) {
    return {
        type: UPDATE_DATA_IN_FAVOURITE,
        payload: {
            favouriteType, id, currentState
        }
    }
}
