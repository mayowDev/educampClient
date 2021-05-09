// import Home from './Home'
import { connect } from 'react-redux'
// import { fetchBootcampsInit, resetBootcamps } from '../Bootcamps/redux/actions'
import './style.scss'

const mapStatesToProps = ({bootcamp, global}) => {
    return {
        bootcamp,
        globalProps: global
    };
};

const mapDispatchToProps = dispatch => ({
    // resetBootcamps: () => dispatch(resetBootcamps()),
    // fetchBootcamps: (filterQuery) => dispatch(fetchBootcampsInit( filterQuery)),
});

// export default connect(mapStatesToProps, mapDispatchToProps)(Home)
