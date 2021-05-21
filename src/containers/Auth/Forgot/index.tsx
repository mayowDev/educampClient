import './style.scss'
import Forgot from './Forgot'
import { connect } from 'react-redux'
import {forgotPassword} from '../redux/actions'
const mapStatesToProps = (state) => {
  return {
    state: state.auth.forgotPassword,
    loading: state.auth.loading
  }
}

const mapDispatchToProps = dispatch => ({
  forgotPassword: (email) => dispatch(forgotPassword(email))
})

export default connect(mapStatesToProps, mapDispatchToProps)(Forgot)