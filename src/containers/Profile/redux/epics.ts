import {ofType} from 'redux-observable';
import {catchError, mergeMap, map} from 'rxjs/operators';
import {UPDATE_PROFILE_DATA_INIT, GET_UPDATE_PROFILE_DATA_INIT} from './actionTypes'
import * as API from "../../../service/api"
import {updateProfileDataSuccess, getUpdatedProfileDataSuccess} from './actions';
import {IResponseType} from "../../Profile/types";

const updateProfile = action$ =>
    action$.pipe(
        ofType(UPDATE_PROFILE_DATA_INIT),
        mergeMap(({payload}) => API.updateProfile(payload)),
        map((resp: IResponseType) => {
            if (resp.data) {
                return updateProfileDataSuccess(resp.data);
            }
        }),
        catchError(error => {
            console.log('error = ', error);
            return () => {}
        })
    );

const getUpdatedProfile = action$ =>
    action$.pipe(
        ofType(GET_UPDATE_PROFILE_DATA_INIT),
        mergeMap(() => API.getUpdateProfile()),
        map((resp: IResponseType) => {
            if (resp.data) {
                return getUpdatedProfileDataSuccess(resp);
            }
        }),
        catchError(error => {
            console.log('error = ', error);
            return () => {}
        })
    );

export default [
    updateProfile,
    getUpdatedProfile
];
