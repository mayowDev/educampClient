import { connect } from 'react-redux';
import GlobalPage from './Global'
import '../../assets/fonts/fonts.css'
import { getProfileData } from '../Profile/redux/actions';
// import { setConversation } from './redux/actions';
// import { fetchSendBirdInit } from '../Conversation/redux/actions';

const mapStatesToProps = (state) => {
    console.log('global state',state);
    
    return {
        isLoggedIn: state.global.isLoggedIn,
        bootcamps: state.bootcamps,
        profile: state.profile.profileData,
        courses: state.courses,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProfileData: () => {dispatch(getProfileData())}
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(GlobalPage);