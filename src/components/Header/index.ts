import './style.scss'
import { connect } from 'react-redux'
import Header from './Header'
import {changeSearch, setConversation} from '../../containers/Global/redux/actions'

import './style.scss'

const mapStatesToProps = ({global, profile, exhibition, conversation}) => {
    return {
        searchQuery: global.searchQuery,
        isChat: global.isConversation,
        profileData: profile.profileData,
        currentConversation: conversation.currentConversation,
    };
};

const mapDispatchToProps = dispatch => ({
    changeSearch: (value) => dispatch(changeSearch(value)),
    setChat: (val) => dispatch(setConversation(val))
});

export default connect(mapStatesToProps, mapDispatchToProps)(Header)
