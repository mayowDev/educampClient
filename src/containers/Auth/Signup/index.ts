import { connect } from 'react-redux';
import Signup from './Signup'
import Resend from './Resend'
import {signup, resendVerificationEmail} from '../redux/actions'
import { RESET_PAGE} from '../redux/constants';
import './style.scss';


const mapStateToProps = (state) => {   
    return {
        isRegistered: state.auth.isRegistered,
        isResendEmailSuccess: state.auth.isResendEmailSuccess,
        isLoggedIn: state.auth.isLoggedIn,
        isLoading: state.auth.loading,
        isNewUser:  state.auth.isNewUser,
    }
};

const mapDispatchToProps = dispatch => ({
    signup: (data) => dispatch(signup(data)),
    resetPage: () => dispatch({type: RESET_PAGE}),
    resendVerificationEmail: (email) => dispatch(resendVerificationEmail(email))

});

// export default connect(mapStatesToProps, mapDispatchToProps)(Signup, Resend);
export default {
    Signup: connect(mapStateToProps, mapDispatchToProps)(Signup),
    Resend: connect(mapStateToProps, mapDispatchToProps)(Resend)
  }