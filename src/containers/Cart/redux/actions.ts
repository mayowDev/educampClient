import {CREATE_ORDER, GET_ORDER_ITEMS, GET_CART_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, GET_FAVOURITE_ITEMS, CHECKOUT,
  ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, LOADING, API_ERROR 
} from './constants'
import * as API from "../../../services"

export const getCartItems = () => async dispatch => {
  try {
    dispatch({type:LOADING})
    const response = await API.getCartItems();
    if(response&&response.success) return dispatch({type: GET_CART_ITEMS, payload: response.cart.items})
  } catch (error) {
    console.log('getCartItemsError', error);
    return dispatch({type: API_ERROR})
  }
}

export const addToCart = (courseid) => async dispatch => {
    try {
      dispatch({type:LOADING})
      const response = await API.addItemToCart(courseid)
      if(response&&response.success) return dispatch({type: ADD_TO_CART, payload: response.cart.items})
    } catch (error) {
      console.log('addToCartError', error);
      dispatch({type: API_ERROR})
    }
}

export const removeFromCart = (courseid) => async dispatch => {
    try {
      dispatch({type:LOADING})
      const response = await API.removeItemFromCart(courseid)
      if(response&&response.success) return dispatch({type: REMOVE_FROM_CART, payload: courseid})
    } catch (error) {
      console.log('removeFromCartError', error);
      return dispatch({type: API_ERROR})
    }
}

export const getWishlistItems = () => async dispatch => {
  try {
    dispatch({type:LOADING})
    const response = await API.getFavouriteItems();
    if(response&&response.success) return dispatch({type: GET_FAVOURITE_ITEMS, payload: response.favourites.items})
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

export const createOrder = () => async dispatch => {
    try {
      dispatch({type:LOADING})
      const response = await API.createOrder()
      if(response&&response.success) return dispatch({type: CREATE_ORDER, payload: response.data})
    } catch (error) {
      console.log('createOrderError', error);
      return dispatch({type: API_ERROR})
    }
}

export const getOrder = () => async dispatch => {
    try {
      dispatch({type:LOADING})
      const response = await API.getOrder()
      if(response&&response.success) return dispatch({type: GET_ORDER_ITEMS, payload: response.data})
    } catch (error) {
      console.log('createOrderError', error);
      return dispatch({type: API_ERROR})
    }
}

export const postCheckout = (data: any) => async dispatch =>{
  try {
    dispatch({type:LOADING})
    const response = await API.postCheckout(data)
    console.log('postCheckout action ===> ', response)
    if(response&&response.success) return dispatch({type: CHECKOUT, payload: response.data})
  } catch (error) {
    console.log('postCheckoutError', error);
    return dispatch({type: API_ERROR})
  }

}