import './style.scss'
import Courses from './Courses'
import { connect } from 'react-redux'

const mapStatesToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    // dispatching actions to the store.
    // increment: () => dispatch({ type: INCREMENT }),
    // toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))
    // You will also likely want to forward arguments to your action creators
     // explicitly forwarding arguments
    //  onClick: (event) => dispatch(trackClick(event)),

     // implicitly forwarding arguments
    //  onReceiveImpressions: (...impressions) =>
      //  dispatch(trackImpressions(impressions))
})

export default connect(mapStatesToProps, mapDispatchToProps)(Courses)

// export {default} from './Login'
