import { combineReducers } from 'redux'
import globalReducer from '../containers/Global/redux/reducer'
import coursesReducer from '../containers/Courses/redux/reducer'
import bootcampsReducer from '../containers/Bootcamps/redux/reducer'
import searchReducer from '../containers/Search/redux/reducer'
import profileReducer from '../containers/Auth/Profile/redux/reducer'
import favouritesReducer from '../containers/Favourites/redux/reducer'
import authReducer from '../containers/Auth/redux/reducer'
// import signupReducer from '../containers/Auth/Signup/redux/reducer'
// import loginReducer from '../containers/Auth/redux/reducer'
// import conversationReducer from '../containers/Conversation/redux/reducer'

export default combineReducers({
  auth: authReducer,
  global: globalReducer,
  courses: coursesReducer,
  bootcamps: bootcampsReducer,
  search: searchReducer,
  profile: profileReducer,
  favourites: favouritesReducer,
})
