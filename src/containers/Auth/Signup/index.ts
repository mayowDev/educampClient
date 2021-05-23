import { connect } from 'react-redux';
import Signup from './Signup'
import {signup} from '../redux/actions'
import './style.scss';


const mapStatesToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isApiError: state.auth.isApiError,
        isNewUser:  state.auth.isNewUser,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (data) => {dispatch(signup(data))},
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Signup);
