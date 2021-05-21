import { connect } from 'react-redux';
import GlobalPage from './Global'
import '../../assets/fonts/fonts.css'
import { getUserData } from '../Auth/redux/actions';

const mapStatesToProps = (state) => {    
    return {
        isLoggedIn: state.auth.isLoggedIn,
        bootcamps: state.bootcamps,
        profile: state.auth.userProfileData,
        courses: state.courses,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserData: () => dispatch(getUserData())
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(GlobalPage);