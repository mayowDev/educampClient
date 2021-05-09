// import {ofType} from 'redux-observable';
// import {catchError, mergeMap, map} from 'rxjs/operators';
// import {UPDATE_PROFILE_DATA_INIT, GET_PROFILE_DATA_INIT} from './actionTypes'
// import * as API from "../../../service"
// import {updateProfileDataSuccess, getProfileDataSuccess} from './actions';
// import {IResponseType} from "../../Profile/types";

// const updateProfile = action$ =>
//     action$.pipe(
//         ofType(UPDATE_PROFILE_DATA_INIT),
//         mergeMap(({payload}) => API.updateProfile(payload)),
//         map((resp: IResponseType) => {
//             if (resp.data) {
//                 return updateProfileDataSuccess(resp.data);
//             }
//         }),
//         catchError(error => {
//             console.log('error = ', error);
//             return () => {}
//         })
//     );

// const getUserProfile = action$ =>
//     action$.pipe(
//         ofType(GET_PROFILE_DATA_INIT),
//         mergeMap(() => API.getUserProfile()),
//         map((resp: IResponseType) => {
//             if (resp.data) {
//                 return getProfileDataSuccess(resp);
//             }
//         }),
//         catchError(error => {
//             console.log('error = ', error);
//             return () => {}
//         })
//     );

// export default [
//     updateProfile,
//     getUserProfile
// ];
