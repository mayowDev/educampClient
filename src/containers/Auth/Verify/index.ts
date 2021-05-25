import { connect } from 'react-redux';
import Verify from './Verify'
import {verify} from '../redux/actions'
import './style.scss'
const mapStatesToProps = ({auth}) => {
    console.log('auth state', auth);
    
    return {
        isLoggedIn: auth.isLoggedIn,
        isVerified: auth.isVerified,
        isLoading: auth.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        verify: (token) => dispatch(verify(token)),
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Verify);
