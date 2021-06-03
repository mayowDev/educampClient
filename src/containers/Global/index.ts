import { connect } from 'react-redux';
import GlobalPage from './Global'
import '../../assets/fonts/fonts.css'
import { getUserData } from '../Auth/redux/actions';

const mapStatesToProps = ({auth, courses}) => {    
    return {
        isLoggedIn: auth.isLoggedIn,
        userProfile: auth.userProfile,
        courses: courses,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserData: () => dispatch(getUserData())
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(GlobalPage);