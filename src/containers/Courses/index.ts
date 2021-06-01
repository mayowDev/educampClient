import { connect } from 'react-redux'
import CourseList from './CourseList';
import AddCourse from './AddCourse';
import EditCourse from './EditCourse';
import CourseDetails from './CourseDetails';
import {fetchCourses, createCourse, updateCourse, deleteCourse} from './redux/actions'
import './style.scss'

const mapStateToProps = (state) => {  
  return {
    isLoading: state.courses.loading,
    canLoadMore: state.courses.canLoadMore,
    isLoggedIn: state.auth.isLoggedIn,
    iscourseCreated: state.courses.iscourseCreated,
    isApiError: state.courses.isApiError,
    courses: state.courses.coursesList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchCourses: () => dispatch(fetchCourses()),
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