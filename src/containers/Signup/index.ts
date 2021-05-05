import { connect } from 'react-redux';
import Signup from './Signup'
import {signup} from './redux/actions'
// import '../../assets/fonts/fonts.css'

const mapStatesToProps = (state) => {
    console.log('signUp MapstateToProps', state)

    return {
        // isLoggedIn: global.isLoggedIn,
        // redirectPath: global.redirectPath,
        // profile: profile.profileData,
        // isConversation: global.isConversation,
        auth: state.auth,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (data) => {dispatch(signup(data))},
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Signup);
