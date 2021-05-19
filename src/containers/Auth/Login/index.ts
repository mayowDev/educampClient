import { connect } from 'react-redux';
import Login from './Login'
// import '../../assets/fonts/fonts.css'
import {login} from '../redux/actions'

import './style.scss';
const mapStatesToProps = ({auth}) => {
    console.log('auth login mapStatesToProps',auth);
    return {
        isLoggedIn: auth.isLoggedIn,
        isApiError: auth.isApiError,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => {dispatch(login(data))},
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Login);
