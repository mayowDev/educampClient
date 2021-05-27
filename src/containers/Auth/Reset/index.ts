import { connect } from 'react-redux';
import Reset from './Reset'
import {resetPassword} from '../redux/actions'
import './style.scss'

const mapStatesToProps = ({auth}) => {
    return {
        isLoggedIn: auth.isLoggedIn,
        isResetPasswordSuccess: auth.isResetPasswordSuccess,
        isApiError: auth.isApiError,
        isLoading:  auth.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        resetPassword: (token, data) => dispatch(resetPassword(token, data)),
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Reset);
