import BootcampDetails from './BootcampDetails';
import { connect } from 'react-redux'
// import {setConversation, setRedirectPath} from "../../containers/Global/redux/actions";
// import {setCurrentConversation, setEnquireMessage} from "../../containers/Conversation/redux/actions";

const mapStatesToProps = ({ global, bootcamps }) => {
    return {
        isLoggedIn: global.isLoggedIn,
        bootcamps: bootcamps.data
    };
};

const mapDispatchToProps = dispatch => ({
    // setRedirectPath: (path) => dispatch(setRedirectPath(path)),
    // setChat: (val) => dispatch(setConversation(val)),
    // setCurrentChannel: (conversation) => {dispatch(setCurrentConversation(conversation))},
    // setEnquireMessage: (message) => {dispatch(setEnquireMessage(message))}
});


export default connect(mapStatesToProps, mapDispatchToProps)(BootcampDetails)
