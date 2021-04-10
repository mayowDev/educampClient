import { ofType } from 'redux-observable';
import {catchError, mergeMap, map} from 'rxjs/operators';
import { FETCH_COURSES_INIT, SORT_COURSES } from './constants'
import * as API from "../../../services/api"
import {fetchCoursesSuccess} from './actions';
import {IResponseType} from '../types'

const fetchCourses = action$ =>
    action$.pipe(
        ofType(FETCH_COURSES_INIT),
        mergeMap(({payload}) => {
            console.log('payload = ', payload)
            if(payload.isGroup) {
                return API.fetchCourses(payload.filter);
            }
            else {
                return API.fetchCourses(payload);
            }
        }),
        map((resp: IResponseType) => {
            console.log('resp = ', resp)
            if  (resp.currentPage) {
                return fetchCoursesSuccess(resp);
            }
            else {
                return fetchCoursesSuccess({...resp, currentPage: 1});
            }
        }),
        catchError(error => {
            console.log('error = ', error);
            return () => {}
        })
    );
const sortCourses = action$ =>
    action$.pipe(
        ofType(SORT_COURSES),
        
    )
export default [
    fetchCourses,
]
