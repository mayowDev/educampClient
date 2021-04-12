import './style.scss'
import Bootcamps from './Bootcamps'
import { connect } from 'react-redux'

const mapStatesToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => ({
  // dispatching actions to the store.
  // increment: () => dispatch({ type: INCREMENT }),
})
export default connect(mapStatesToProps, mapDispatchToProps)(Bootcamps)
