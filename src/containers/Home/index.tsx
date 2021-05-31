import Home from './Home'
import { connect } from 'react-redux'
import { fetchCourses } from '../Courses/redux/actions'
import './style.scss'

const mapStatesToProps = (state) => {    
    return {
        isLoading: state.auth.loading,
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.userProfile,
        courses: state.courses
    };
};

const mapDispatchToProps = dispatch => ({
    fetchCourses: () => dispatch(fetchCourses()),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Home)
