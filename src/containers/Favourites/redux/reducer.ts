import {GET_FAVOURITE_ITEMS, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, LOADING, API_ERROR } from './constants'
const initialState = {
    favouriteItems: [],
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
        case GET_FAVOURITE_ITEMS: 
            return {
                ...state,
                favouriteItems: action?.payload? [...action.payload]:[],
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

