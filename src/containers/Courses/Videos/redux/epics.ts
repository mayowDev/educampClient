// @ message receiver
import { ofType } from 'redux-observable';
import {catchError, mergeMap, map} from 'rxjs/operators';
import { FETCH_VIDEOS_INIT, VIDEO_COMPLETED } from './constants'
import * as API from "../../../../service"
import {fetchVideosSuccess} from './actions';
import {IResponseType} from '../types'

const fetchCourseVideos = action$ =>
    action$.pipe(
        ofType(FETCH_VIDEOS_INIT),
        mergeMap(({payload}) => {
            console.log('fetchCourses payload = ', payload)
            if(payload) {
                return API.getPublishedCourses();
            }
            else {
                return API.getPublishedCourses();
                // return API.getAllCourses();Todo: make query argument optional
            }
        }),
        map((resp: IResponseType) => {
            console.log('resp = ', resp)
            if  (resp.pagination.currentPage) {
                return fetchVideosSuccess(resp);
            }
            else {
                return fetchVideosSuccess({...resp, currentPage: 1});
            }
        }),
        catchError(error => {
            console.log('error = ', error);
            return () => {}
        })
    );
const completedVideo = action$ =>
    action$.pipe(
        ofType(VIDEO_COMPLETED),
        
    )
export default [
    fetchCourseVideos,
    completedVideo
]
