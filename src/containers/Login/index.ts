import { connect } from 'react-redux';
import Login from './Login'
// import '../../assets/fonts/fonts.css'
// import { getUpdatedProfileDataInit } from '../Profile/redux/actions';
import {login} from './redux/actions'

// import { setConversation } from './redux/actions';
import './style.scss';
const mapStatesToProps = (state) => {
    console.log('login mapStatesToProps',state.global);
    
    return {
        isLoggedIn: state.global.isLoggedIn,
        // redirectPath: global.redirectPath,
        // profile: profile.profileData,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // updateProfileData: () => {dispatch(getUpdatedProfileDataInit())},
        login: (data) => {dispatch(login(data))},
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Login);
