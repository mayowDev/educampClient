import {CREATE_ORDER, GET_ORDER_ITEMS, GET_CART_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, LOADING, API_ERROR } from './constants'
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
      if(response&&response.success) return dispatch({type: ADD_TO_CART, payload: response.data})
    } catch (error) {
      console.log('addToCartError', error);
      return dispatch({type: API_ERROR})
    }
}

export const removeFromCart = (courseid) => async dispatch => {
    try {
      dispatch({type:LOADING})
      const response = await API.removeItemFromCart(courseid)
      if(response&&response.success) return dispatch({type: REMOVE_FROM_CART, payload: response.data})
    } catch (error) {
      console.log('removeFromCartError', error);
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