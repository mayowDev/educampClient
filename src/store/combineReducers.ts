import { combineReducers } from 'redux'
import coursesReducer from '../containers/Courses/redux/reducer'
import authReducer from '../containers/Auth/redux/reducer'
import teacherReducer from '../containers/Teachers/redux/reducer'
import cartReducer from '../containers/Cart/redux/reducer'
import favouriteReducer from '../containers/Favourites/redux/reducer'
import globalReducer from '../containers/Global/redux/reducer'

export default combineReducers({
  auth: authReducer,
  cart:cartReducer,
  courses: coursesReducer,
  teachers: teacherReducer,
  global: globalReducer,
  favourites: favouriteReducer,
})
