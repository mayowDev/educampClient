import { GET_FAVOURITE_ITEMS, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, LOADING, API_ERROR } from './constants'
import * as API from "../../../services"

export const getWishlistItems = () => async dispatch => {
  try {
    dispatch({type:LOADING})
    const response = await API.getFavouriteItems();
    if(response&&response.success) return dispatch({type: GET_FAVOURITE_ITEMS, payload: response.favourites?.items})
  } catch (error) {
    console.log('getFavouritesError', error);
    return dispatch({type: API_ERROR})
  }
}

export const addToWishlist = (courseid) => async dispatch => {
  try {
    dispatch({type:LOADING})
    const response = await API.addItemToFavourites(courseid)
    if(response&&response.success) return dispatch({type: ADD_TO_FAVOURITE, payload: response.favourites.items})
  } catch (error) {
    console.log('addToFavouritetError', error);
    dispatch({type: API_ERROR})
  }
}

export const removeFromWishlist = (courseid) => async dispatch => {
  try {
    dispatch({type:LOADING})
    const response = await API.removeItemFromFavourites(courseid)
    if(response&&response.success) return dispatch({type: REMOVE_FROM_FAVOURITE, payload: courseid})
  } catch (error) {
    console.log('removeFromFavouriteError', error);
    return dispatch({type: API_ERROR})
  }
}