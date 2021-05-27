import { connect } from 'react-redux';
import Login from './Login'
// import '../../assets/fonts/fonts.css'
import {login, loginWithGoogle} from '../redux/actions'

import './style.scss';
const mapStatesToProps = ({auth}) => {
    // console.log('auth login ',auth);
    return {
        isLoggedIn: auth.isLoggedIn,
        isApiError: auth.isApiError,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => {dispatch(login(data))},
        loginWithGoogle : ()=> dispatch(loginWithGoogle())
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Login);
