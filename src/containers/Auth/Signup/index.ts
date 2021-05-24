import { connect } from 'react-redux';
import Signup from './Signup'
import {signup} from '../redux/actions'
import { RESET_PAGE} from '../redux/constants';
import './style.scss';


const mapStatesToProps = (state) => {   
    // console.log('state.auth', state.auth);
     
    return {
        isApiError: state.auth.isApiError,
        isLoggedIn: state.auth.isLoggedIn,
        isRegistered: state.auth.isRegistered,
        isLoading: state.auth.loading,
        isNewUser:  state.auth.isNewUser,
    }
};

const mapDispatchToProps = dispatch => ({
    signup: (data) => dispatch(signup(data)),
    resetPage: () => { dispatch({type: RESET_PAGE}) }

});

export default connect(mapStatesToProps, mapDispatchToProps)(Signup);
