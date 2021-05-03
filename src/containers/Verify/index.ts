import { connect } from 'react-redux';
import Verify from './Verify'
// import '../../assets/fonts/fonts.css'

const mapStatesToProps = ({auth}) => {
    return {
        // isLoggedIn: global.isLoggedIn,
        // redirectPath: global.redirectPath,
        // profile: profile.profileData,
        // isConversation: global.isConversation,
        auth: auth.verify,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // updateProfileData: () => {dispatch(getUpdatedProfileDataInit())},
        // setConversation: (val) => {dispatch(setConversation(val))},
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Verify);
