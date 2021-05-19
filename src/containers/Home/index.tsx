import Home from './Home'
import { connect } from 'react-redux'
import { fetchBootcamps } from '../Bootcamps/redux/actions'
import './style.scss'

const mapStatesToProps = (state) => {
    console.log('Homestate', state.auth);
    
    return {
        isLoggedIn: state.auth.isLoggedIn,
        global: state.global
    };
};

const mapDispatchToProps = dispatch => ({
    // resetBootcamps: () => dispatch(resetBootcamps()),
    fetchBootcamps: () => dispatch(fetchBootcamps()),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Home)
