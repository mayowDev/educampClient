import { connect } from 'react-redux';
import GlobalPage from './Global'
import '../../assets/fonts/fonts.css'
import { getUserData } from '../Auth/redux/actions';
import {fetchCourses} from '../Courses/redux/actions'
import {getCartItems} from '../Cart/redux/actions'
import { getRouteName } from './redux/actions';

const mapStatesToProps = ({auth, global}) => {    
    return {
        isLoggedIn: auth.isLoggedIn,
        userProfile: auth.userProfile,
        // courses: courses,
        routeName: global.routeName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserData: () => dispatch(getUserData()),
        fetchCourses: () => dispatch(fetchCourses()), 
        getCartItems: () => dispatch(getCartItems()),
        getRouteName:() => dispatch(getRouteName())
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(GlobalPage);