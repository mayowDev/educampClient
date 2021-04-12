import './style.scss'
import ForgotPassword from './ForgotPassword'
import { connect } from 'react-redux'

const mapStatesToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStatesToProps, mapDispatchToProps)(ForgotPassword)

// export {default} from './Login'
