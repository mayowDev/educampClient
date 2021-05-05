import './style.scss'
import Bootcamps from './Bootcamps'
import { connect } from 'react-redux'
// import {FETCH_BOOTCAMPS} from './redux/constants'
import {fetchBootcamps, fetchBootcamp} from './redux/actions'
const mapStatesToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => ({
  // dispatching actions to the store.
  fetchBootcamps: () => dispatch(fetchBootcamps()),
  fetchBootcamp: (id:string) => dispatch(fetchBootcamp(id)),
})
export default connect(mapStatesToProps, mapDispatchToProps)(Bootcamps)
