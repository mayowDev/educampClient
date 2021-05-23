import BootcampDetails from './BootcampDetails';
import { connect } from 'react-redux'
// import {setConversation, setRedirectPath} from "../../containers/Global/redux/actions";
// import {setCurrentConversation, setEnquireMessage} from "../../containers/Conversation/redux/actions";

const mapStatesToProps = ({ auth, bootcamps }) => {
    return {
        isLoggedIn: auth.isLoggedIn,
        bootcamps: bootcamps.data
    };
};

const mapDispatchToProps = dispatch => ({
    // setEnquireMessage: (message) => {dispatch(setEnquireMessage(message))}
});


export default connect(mapStatesToProps, mapDispatchToProps)(BootcampDetails)
