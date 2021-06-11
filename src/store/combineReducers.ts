import { combineReducers } from 'redux'
import coursesReducer from '../containers/Courses/redux/reducer'
// import searchReducer from '../containers/Search/redux/reducer'
// import favouritesReducer from '../containers/Favourites/redux/reducer'
import authReducer from '../containers/Auth/redux/reducer'
import teachersReducer from '../containers/Teachers/redux/reducer'
import cartReducer from '../containers/Cart/redux/reducer'
import globalReducer from '../containers/Global/redux/reducer'

export default combineReducers({
  auth: authReducer,
  cart:cartReducer,
  courses: coursesReducer,
  teachers: teachersReducer,
  global: globalReducer,
  // search: searchReducer,
  // favourites: favouritesReducer,
})
