import { connect } from 'react-redux'
import CourseList from './CourseList';
import AddCourse from './AddCourse';
import EditCourse from './EditCourse';
import CourseDetails from './CourseDetails';
import CourseGift from './CourseGift';
import Categories from './Categories';
import Category from './Category';

import {fetchCourses, createCourse, updateCourse, deleteCourse, fetchCourse, 
  getCourseByName, searchCourse, giftCourse} from './redux/actions'
import {getTeacher} from  '../Teachers/redux/actions'
import { getUserData } from '../Auth/redux/actions';
import { addToWishlist, removeFromWishlist } from '../Favourites/redux/actions';
import { addToCart, removeFromCart} from '../Cart/redux/actions';

import './style.scss'

const mapStateToProps = (state) => {  
  return {
    isLoading: state.courses.loading,
    isLoggedIn: state.auth.isLoggedIn,
    userProfile: state.auth.userProfile,
    isCourseCreated: state.courses.isCourseCreated,
    isCourseUpdated: state.courses.isCourseUpdated,
    isApiError: state.courses.apiError,
    isCartApiError : state.cart.apiError,
    isCartLoading: state.cart.loading,
    isAddedToCart: state.cart.isAddedToCart,
    cartItems: state.cart.cartItems,
    courses: state.courses.coursesList,
    courseDetails: state.courses.courseDetails,
    favouriteItems: state.favourites.favouriteItems
  }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCourses: () => dispatch(fetchCourses()),
    searchCourse:(q)=> dispatch(searchCourse(q)),
    fetchCourse :(id:string) => dispatch(fetchCourse(id)),
    getCourseByName: (slug:string) => dispatch(getCourseByName(slug)),
    createCourse: (data) => dispatch(createCourse(data)),
    updateCourse: (id:string, data) => dispatch(updateCourse(id, data)),
    deleteCourse: (id:string) => dispatch(deleteCourse(id)),
    addToCart:(id:string) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    getTeacher:(id:string) => dispatch(getTeacher(id)),
    getUserData:() => dispatch(getUserData()),
    addToWishlist:(id:object) => dispatch(addToWishlist(id)),
    removeFromWishlist: (id:object) => dispatch(removeFromWishlist(id)),
    giftCourse:(data:object) => dispatch(giftCourse(data))
})

export default {
  Courses: connect(mapStateToProps, mapDispatchToProps)(CourseList),
  AddCourse: connect(mapStateToProps, mapDispatchToProps)(AddCourse),
  EditCourse: connect(mapStateToProps, mapDispatchToProps)(EditCourse),
  CourseDetails: connect(mapStateToProps, mapDispatchToProps)(CourseDetails),
  CourseGift: connect(mapStateToProps, mapDispatchToProps)(CourseGift),
  Categories: connect(mapStateToProps, mapDispatchToProps)(Categories),
  Category: connect(mapStateToProps, mapDispatchToProps)(Category),
}