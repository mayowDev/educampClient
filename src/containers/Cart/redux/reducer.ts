import {CREATE_ORDER, GET_ORDER_ITEMS, GET_CART_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, LOADING, API_ERROR } from './constants'

const initialState = {
    orderItems: [],
    cartItems:[],
    orderDetails:{},
    lastFetch: '',
    isNull: false,
    apiError: false,
    isAddedToCart: false,
    isRemovedFromCart: false,
    loading:false,
}

export default(state = initialState, action)=>{
    switch (action.type) {
        case LOADING: 
            return {
                ...state,
                loading: true, 
            }
        case GET_CART_ITEMS: 
            return {
                ...state,
                cartItems: [...action.payload],
                lastFetch: Date.now(),
                loading: false,
                apiError:false
            }
        case ADD_TO_CART: 
            return {
                ...state,
                cartItems:{...state.cartItems, ...action.payload},
                isAddedToCart: true,
                loading: false,
                apiError:false

            }
        case REMOVE_FROM_CART: 
            return {
                ...state,
                //@ts-ignore
                cartItems: state.cartItems.filter(course=> course.id !== action.payload),
                isRemovedFromCart: true,
                loading :false
            }
        case GET_ORDER_ITEMS:
            return {
                ...state,
                orderItems:  [...action.payload.rows],
                lastFetch: Date.now(),
                loading: false,
            };
        case CREATE_ORDER:
            return {
                ...state,
                orderDetails: {...action.payload},
                lastFetch: Date.now(),
                loading: false
            }
        case API_ERROR:
        // case NULL_RESPONSE: 
        return{
            ...state,
            loading: false,
            apiError:true,
            isNull: true
        }
        default:
            return state;
    }
}

