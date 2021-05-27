import Forgot from './Forgot'
import { connect } from 'react-redux'
import {forgotPassword} from '../redux/actions'
import './style.scss'
const mapStatesToProps = ({auth}) => {
  return {
    isForgotPasswordSuccess: auth.isForgotPasswordSuccess,
    isLoading: auth.loading
  }
}

const mapDispatchToProps = dispatch => ({
  forgotPassword: (email) => dispatch(forgotPassword(email))
})

export default connect(mapStatesToProps, mapDispatchToProps)(Forgot)