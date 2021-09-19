import { connect } from 'react-redux';
import Login from './Login'
import {login, loginWithGoogle, loginWithFacebook} from '../redux/actions'
import './style.scss';
const mapStatesToProps = ({auth}) => {
    console.log(auth, 'auth');
    
    return {
        isLoggedIn: auth.isLoggedIn,
        isApiError: auth.isApiError,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => {dispatch(login(data))},
        loginWithGoogle : ()=> dispatch(loginWithGoogle()),
        loginWithFacebook: ()=> dispatch(loginWithFacebook())
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Login);
