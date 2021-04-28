import CourseDetails from './CourseDetails';
import { connect } from 'react-redux'
// import {setConversation, setRedirectPath} from "../../containers/Global/redux/actions";
// import {setCurrentConversation, setEnquireMessage} from "../../containers/Conversation/redux/actions";

const mapStatesToProps = ({ global, courses }) => {
    return {
        isLoggedIn: global.isLoggedIn,
        courses: courses.data
    };
};

const mapDispatchToProps = dispatch => ({
    // setRedirectPath: (path) => dispatch(setRedirectPath(path)),
    // setChat: (val) => dispatch(setConversation(val)),
    // setCurrentChannel: (conversation) => {dispatch(setCurrentConversation(conversation))},
    // setEnquireMessage: (message) => {dispatch(setEnquireMessage(message))}
});


export default connect(mapStatesToProps, mapDispatchToProps)(CourseDetails)
