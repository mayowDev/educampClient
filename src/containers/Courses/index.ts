import { connect } from 'react-redux'
import CourseList from './CourseList';
import AddCourse from './AddCourse';
import EditCourse from './EditCourse';
import CourseDetails from './CourseDetails';
import {fetchCourses, createCourse, updateCourse, deleteCourse, fetchCourse} from './redux/actions'
import './style.scss'

const mapStateToProps = (state) => {  
  return {
    isLoading: state.courses.loading,
    isLoggedIn: state.auth.isLoggedIn,
    currentUser: state.auth.userProfile,
    isCourseCreated: state.courses.isCourseCreated,
    isCourseUpdated: state.courses.isCourseUpdated,
    isApiError: state.courses.isApiError,
    courses: state.courses.coursesList,
    courseDetails: state.courses.courseDetails
  }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCourses: () => dispatch(fetchCourses()),
    fetchCourse :(id:string) => dispatch(fetchCourse(id)),
    createCourse: (data) => dispatch(createCourse(data)),
    updateCourse: (id:string, data) => dispatch(updateCourse(id, data)),
    deleteCourse: (id:string) => dispatch(deleteCourse(id))
})

export default {
  Courses: connect(mapStateToProps, mapDispatchToProps)(CourseList),
  AddCourse: connect(mapStateToProps, mapDispatchToProps)(AddCourse),
  EditCourse: connect(mapStateToProps, mapDispatchToProps)(EditCourse),
  CourseDetails: connect(mapStateToProps, mapDispatchToProps)(CourseDetails)
}