import { connect } from 'react-redux';
import Login from './Login'
// import '../../assets/fonts/fonts.css'
// import { getUpdatedProfileDataInit } from '../Profile/redux/actions';
// import { setConversation } from './redux/actions';
// import { fetchSendBirdInit } from '../Conversation/redux/actions';

const mapStatesToProps = ({course}) => {
    return {
        // isLoggedIn: global.isLoggedIn,
        // redirectPath: global.redirectPath,
        // profile: profile.profileData,
        // isConversation: global.isConversation,
        courseId: course.courseId,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // updateProfileData: () => {dispatch(getUpdatedProfileDataInit())},
        // setConversation: (val) => {dispatch(setConversation(val))},
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Login);
