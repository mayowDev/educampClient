import Home from './Home'
import { connect } from 'react-redux'
import { fetchCourses } from '../Courses/redux/actions'
import './style.scss'

const mapStatesToProps = (state) => {    
    return {
        isLoggedIn: state.auth.isLoggedIn,
        global: state.global,
        courses: state.courses
    };
};

const mapDispatchToProps = dispatch => ({
    fetchCourses: () => dispatch(fetchCourses()),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Home)
