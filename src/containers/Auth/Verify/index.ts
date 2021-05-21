import { connect } from 'react-redux';
import Verify from './Verify'
import {verify} from '../redux/actions'
const mapStatesToProps = ({auth}) => {
    console.log('verify state', auth);
    
    return {
        isLoggedIn: auth.isLoggedIn,
        // verify: auth.isVerified,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        verify: (token) => dispatch(verify(token)),
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Verify);
