import { connect } from 'react-redux'
import Header from './Header'
import {changeSearch} from '../../containers/Global/redux/actions'

import './style.scss'

const mapStatesToProps = (state) => {
    console.log('Header state', state);
    
    return {
        // searchQuery: global.searchQuery,
        isLoggedIn: state.global.isLoggedIn,
        profileData: state.profile.profileData,
        
    };
};

const mapDispatchToProps = dispatch => ({
    changeSearch: (value) => dispatch(changeSearch(value)),
    // setChat: (val) => dispatch(setConversation(val))
});

export default connect(mapStatesToProps, mapDispatchToProps)(Header)
