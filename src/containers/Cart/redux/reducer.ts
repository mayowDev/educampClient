import {CREATE_ORDER, GET_ORDER_ITEMS, GET_CART_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, GET_FAVOURITE_ITEMS, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, LOADING, API_ERROR 
} from './constants'
const initialState = {
    cartItems:[],
    favouriteItems: [],
    orderItems: [],
    orderDetails:{},
    lastFetch: '',
    isNull: false,
    apiError: false,
    isAddedToCart: false,
    isRemovedFromCart: false,
    isRemovedFromFavorite: false,
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
                cartItems:[...action.payload],
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
                isAddedToCart: false,
                loading :false
            }
            case GET_FAVOURITE_ITEMS: 
            return {
                ...state,
                favouriteItems: [...action.payload],
                lastFetch: Date.now(),
                loading: false,
                apiError:false
            }
        case ADD_TO_FAVOURITE: 
            return {
                ...state,
                favouriteItems:[...action.payload],
                isAddedToFavourite: true,
                isAddedToCart: false,
                loading: false,
                apiError:false

            }
        case REMOVE_FROM_FAVOURITE: 
            return {
                ...state,
                //@ts-ignore
                favouriteItems: state.favouriteItems.filter(course=> course.id !== action.payload),
                isRemovedFromFavorite: true,
                isAddedToCart: false,
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

