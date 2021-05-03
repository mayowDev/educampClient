import { FETCH_BOOTCAMPS_INIT, FETCH_BOOTCAMPS_SUCCESS, RESET_BOOTCAMPS, TOGGLE_GROUP_FAVOURITE, SEARCH_BOOTCAMPS } from './constants'
import {IBootcampFetchInitType} from '../types'

export function fetchBootcampsInit (filterQuery:IBootcampFetchInitType) {
    console.log('fetchBootcampsInit => ', filterQuery);
    return {
      type: FETCH_BOOTCAMPS_INIT,
      payload: { filterQuery      }
    }
}

export function fetchBootcampsSuccess (data) {
    return {
        type: FETCH_BOOTCAMPS_SUCCESS,
        payload: data
    }
}
  
export function searchBootcamps(value:string) {
    return {
        type: SEARCH_BOOTCAMPS,
        payload: value
    }
}
 export function toggleFavourite(itemId, isFavourite){
     return {
         type: TOGGLE_GROUP_FAVOURITE,
         payload: {itemId, isFavourite}
     }

 }

export function resetBootcamps() {
    return {
        type: RESET_BOOTCAMPS,
    }
}
  