import {combineEpics} from "redux-observable";
import coursesEpics from "../containers/Courses/redux/epics"
import bootcampsEpics from "../containers/Bootcamps/redux/epics"
import searchEpics from "../containers/Search/redux/epics"
import profileEpics from "../containers/Profile/redux/epics"
import favouritesEpics from "../containers/Favourites/redux/epics"
// import conversationEpics from "../containers/Conversation/redux/epics"

export default combineEpics(...coursesEpics, ...bootcampsEpics, ...searchEpics, ...profileEpics, ...favouritesEpics);
