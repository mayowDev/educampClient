import { combineReducers } from 'redux'
import globalReducer from '../containers/Global/redux/reducer'
import coursesReducer from '../containers/Courses/redux/reducer'
import bootcampsReducer from '../containers/Bootcamps/redux/reducer'
import searchReducer from '../containers/Search/redux/reducer'
import profileReducer from '../containers/Profile/redux/reducer'
import favouritesReducer from '../containers/Favourites/redux/reducer'
import signupReducer from '../containers/Signup/redux/reducer'
// import authReducer from '../containers/Auth/redux/reducer'
// import conversationReducer from '../containers/Conversation/redux/reducer'

export default combineReducers({
  global: globalReducer,
  // auth: authReducer,
  signup: signupReducer,
  courses: coursesReducer,
  bootcamps: bootcampsReducer,
  search: searchReducer,
  profile: profileReducer,
  favourites: favouritesReducer,
  // conversation: conversationReducer,
})
