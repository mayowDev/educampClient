import { connect } from 'react-redux'
import Header from './Header'
import {changeSearch} from '../../containers/Global/redux/actions'
import {logout} from '../../containers/Auth/redux/actions'

import './style.scss'

const mapStatesToProps = (state) => {    
    return {
        // searchQuery: global.searchQuery,
        isLoggedIn: state.auth.isLoggedIn,
        profileData: state.profile.profileData,
    };
};

const mapDispatchToProps = dispatch => ({
    changeSearch: (value) => dispatch(changeSearch(value)),
    logout: () => dispatch(logout()),
    // setChat: (val) => dispatch(setConversation(val))
});

export default connect(mapStatesToProps, mapDispatchToProps)(Header)
