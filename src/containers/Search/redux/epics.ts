// import {ofType} from 'redux-observable';
// import { map, mergeMap, take, takeUntil, catchError} from 'rxjs/operators';
// // import { throwError } from 'rxjs';

// import {FETCH_SEARCH_INIT} from './actionTypes'
// // import {CHANGE_SEARCH} from '../../Global/redux/actionTypes'
// import * as API from "../../../service"
// import {fetchSearchSuccess} from './actions';

// const fetchSearch = action$ =>
//     action$.pipe(
//         ofType(FETCH_SEARCH_INIT),
//         mergeMap(({payload}) => API.fetchSearch(payload.searchQuery, payload.page, payload.loadingMore)),
//         // @ts-ignore
//         map((resp: IResponseType) => {
//             console.log('resp = ', resp)
//             if  (resp) {
//                 return fetchSearchSuccess(resp);
//             }
//         }),
//         // @ts-ignore
//         catchError(error => {
//             console.log('error = ', error);
//             // return throwError(error);
//             // return ofType('GLOBAL_ERROR');
//             // return new Promise((resolve, reject) => {resolve(true)})
//         })
//     );


// export default [
//     fetchSearch,
// ]
