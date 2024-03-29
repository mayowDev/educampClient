import {CREATE_ORDER, GET_ORDER_ITEMS, GET_CART_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT, LOADING, API_ERROR } from './constants'
import * as API from "../../../services"

export const getCartItems = () => async dispatch => {
  try {
    dispatch({type:LOADING})
    const {success, cart} = await API.getCartItems();
    if(success) return dispatch({type: GET_CART_ITEMS, payload: cart&&cart.items.length> 0? cart.items: []})
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

export const createOrder = () => async dispatch => {
    try {
      dispatch({type:LOADING})
      const response = await API.createOrder()
      console.log('response', response)
      if(response&&response.success) return dispatch({type: CREATE_ORDER, payload: response})
    } catch (error) {
      console.log('createOrderError', error);
      return dispatch({type: API_ERROR})
    }
}

export const getOrderItems = () => async dispatch => {
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
    if(response&&response.success) return dispatch({type: CHECKOUT, payload: response.data})
  } catch (error) {
    console.log('postCheckoutError', error);
    return dispatch({type: API_ERROR})
  }

}