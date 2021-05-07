import { connect } from 'react-redux';
import Signup from './Signup'
import {signup} from './redux/actions'
import './style.scss';
// import '../../assets/fonts/fonts.css'

const mapStatesToProps = (state) => {
    console.log('signUp MapstateToProps', state.signup)

    return {
        // isLoggedIn: global.isLoggedIn,
        // redirectPath: global.redirectPath,
        // profile: profile.profileData,
        // isConversation: global.isConversation,
        signup: state.signup,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (data) => {dispatch(signup(data))},
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Signup);
