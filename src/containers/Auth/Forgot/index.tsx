import './style.scss'
import Forgot from './Forgot'
import { connect } from 'react-redux'
// import {bindActionCreators} from "redux";
import {forgotPassword} from '../redux/actions'
// import {IForgotPassword} from '../types'
const mapStatesToProps = (state) => {
  return {
    forgotPasswordResponse: state.auth.forgotPassword,
    loading: state.auth.loading
  }
}

const mapDispatchToProps = dispatch => ({
  forgotPassword: (email) => dispatch(forgotPassword(email))
})

export default connect(mapStatesToProps, mapDispatchToProps)(Forgot)