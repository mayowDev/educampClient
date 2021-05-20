import { connect } from 'react-redux';
import GlobalPage from './Global'
import '../../assets/fonts/fonts.css'
import { getProfileData } from '../Auth/Profile/redux/actions';

const mapStatesToProps = (state) => {    
    return {
        isLoggedIn: state.auth.isLoggedIn,
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