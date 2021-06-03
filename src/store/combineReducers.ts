import { combineReducers } from 'redux'
import globalReducer from '../containers/Global/redux/reducer'
import coursesReducer from '../containers/Courses/redux/reducer'
import searchReducer from '../containers/Search/redux/reducer'
import favouritesReducer from '../containers/Favourites/redux/reducer'
import authReducer from '../containers/Auth/redux/reducer'

export default combineReducers({
  auth: authReducer,
  global: globalReducer,
  courses: coursesReducer,
  search: searchReducer,
  favourites: favouritesReducer,
})
