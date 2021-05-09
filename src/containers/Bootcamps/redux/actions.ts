import { FETCH_BOOTCAMP, FETCH_BOOTCAMPS,  SEARCH_BOOTCAMPS } from './constants'
import * as API from "../../../service"

export const  fetchBootcamps = () =>  async dispatch =>{
    const response = await API.getAllBootcamps()    
    dispatch({type: FETCH_BOOTCAMPS, payload: response.data})
}
  
export const fetchBootcamp =  (id:string) => async dispatch =>{
    const response = await API.getBootcamp(id)    
    dispatch({type: FETCH_BOOTCAMP, payload: response})
}

// export const  searchBootcamp =(query)=> async dispatch =>{
//     const response = await API.searchBootcamp(query)
//     dispatch({type: SEARCH_BOOTCAMPS, payload: response})
// }
