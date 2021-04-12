import { ofType } from 'redux-observable';
import {catchError, mergeMap, map} from 'rxjs/operators';
import { FETCH_BOOTCAMPS_INIT, SORT_BOOTCAMPS } from './constants'
import * as API from "../../../service/api"
import {fetchBootcampsSuccess} from './actions';
import {IResponseType} from '../types'

const fetchBootcamps = action$ =>
    action$.pipe(
        ofType(FETCH_BOOTCAMPS_INIT),
        mergeMap(({payload}) => {
            console.log(' FETCH_BOOTCAMPS_INIT payload = ', payload)
            if(payload) {
                return API.fetchBootcamps(payload);
            }
        
        }),
        map((resp: IResponseType) => {
            console.log('resp = ', resp)
            if  (resp.pagination.currentPage) {
                return fetchBootcampsSuccess(resp);
            }
            else {
                return fetchBootcampsSuccess({...resp, currentPage: 1});
            }
        }),
        catchError(error => {
            console.log('error = ', error);
            return () => {}
        })
    );
const sortBootcamps = action$ =>
    action$.pipe(
        ofType(SORT_BOOTCAMPS),
        
    )
export default [
    fetchBootcamps,
    sortBootcamps
]
