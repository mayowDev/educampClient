import { connect } from 'react-redux'
import Teach from './Teach'
import './style.scss'

const mapStatesToProps = (state) => {
    return {
        state
    };
};
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStatesToProps, mapDispatchToProps)(Teach)
