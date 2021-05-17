import './style.scss'
import Courses from './Courses'
import { connect } from 'react-redux'
import {fetchCourses} from './redux/actions'
const mapStatesToProps = (state) => {
  console.log('courses State', state);
  
  return {
    // currentUserId: state.profile.id,
    data: state.courses,
    // ...state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    // dispatching actions to the store.
    fetchCourses: () => dispatch(fetchCourses())
     // explicitly forwarding arguments to action creators
    //  onClick: (event) => dispatch((event)),
     // implicitly forwarding arguments to action creators
    //  onReceiveImpressions: (...impressions) =>dispatch(trackImpressions(impressions))
})

export default connect(mapStatesToProps, mapDispatchToProps)(Courses)

