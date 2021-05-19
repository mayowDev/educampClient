import './style.scss'
import Courses from './Courses'
import { connect } from 'react-redux'
import {fetchCourses} from './redux/actions'
const mapStatesToProps = (state) => {  
  return {
    // currentUserId: state.profile.id,
    data: state.courses,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchCourses: () => dispatch(fetchCourses())
})

export default connect(mapStatesToProps, mapDispatchToProps)(Courses)

