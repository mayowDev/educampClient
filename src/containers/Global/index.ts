import { connect } from 'react-redux';
import GlobalPage from './Global'
import '../../assets/fonts/fonts.css'
// import { getUpdatedProfileDataInit } from '../Profile/redux/actions';
// import { setConversation } from './redux/actions';
// import { fetchSendBirdInit } from '../Conversation/redux/actions';

const mapStatesToProps = ({global, profile}) => {
    return {
        isLoggedIn: global.isLoggedIn,
        redirectPath: global.redirectPath,
        profile: profile.profileData,
        isConversation: global.isConversation,
        courseId: global.courseId,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // updateProfileData: () => {dispatch(getUpdatedProfileDataInit())},
        // setConversation: (val) => {dispatch(setConversation(val))},
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(GlobalPage);
