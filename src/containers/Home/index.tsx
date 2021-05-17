import Home from './Home'
import { connect } from 'react-redux'
import { fetchBootcamps } from '../Bootcamps/redux/actions'
import './style.scss'

const mapStatesToProps = (state) => {
    return {
        globalProps: state.global
    };
};

const mapDispatchToProps = dispatch => ({
    // resetBootcamps: () => dispatch(resetBootcamps()),
    fetchBootcamps: () => dispatch(fetchBootcamps()),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Home)
