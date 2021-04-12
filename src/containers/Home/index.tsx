import Home from './Home'
import { connect } from 'react-redux'
import {
    fetchExhibitionsInit,
    fetchPrivateAndPublicExhibitionsInit,
    resetExhibitions
} from '../Exhibitions/redux/actions'
import {
    setViewHeight,
    setFirstLoad
} from '../Global/redux/actions'

import './style.scss'

const mapStatesToProps = ({exhibition, global}) => {
    return {
        exhibition,
        globalProps: global
    };
};

const mapDispatchToProps = dispatch => ({
    resetExhibitions: () => dispatch(resetExhibitions()),
    fetchExhibitions: (page, filterType, isGroup) => dispatch(fetchPrivateAndPublicExhibitionsInit(page, filterType, isGroup)),
    setViewHeight: (val) => dispatch(setViewHeight(val)),
    setFirstLoadGlobal: (val) => dispatch(setFirstLoad(val))
});

export default connect(mapStatesToProps, mapDispatchToProps)(Home)
