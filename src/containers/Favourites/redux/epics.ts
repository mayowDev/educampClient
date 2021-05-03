import {ofType} from 'redux-observable';
import {mergeMap, map, catchError, } from 'rxjs/operators';
import {GET_FAVOURITES_INIT} from './actionTypes'
import * as API from "../../../service/"
import {fetchFavouritesSuccess} from './actions';
import {IResponseType} from "../../Favourites/types";

const fetchFavourites = action$ =>
    action$.pipe(
        ofType(GET_FAVOURITES_INIT),
        mergeMap(() => {
            return API.fetchFavourites();
        }),
        map((resp: IResponseType) => {
            return fetchFavouritesSuccess(resp);
        }),
        catchError(error => {
            console.log('error = ', error);
            return () => {}
        })
    );

export default [
    fetchFavourites,
]
