import {GET_FAVOURITES_SUCCESS, UPDATE_FAVOURITE, UPDATE_DATA_IN_FAVOURITE} from './actionTypes';

const initialState = {
    favourites: {
        organisations: [],
        artists: [],
        artworks: [],
        exhibitions: []
    },
    currentPage: 0,
    canLoadMore: true,
    favouritesLoading: true,
    isFavouritesUpdated: false,
    pages: {}
};

function GetFavourites(state = initialState, action) {
    switch (action.type) {
        case GET_FAVOURITES_SUCCESS:
            if (state.currentPage === action.payload.currentPage) {
                return {
                    ...state,
                    favouritesLoading: false,
                    isFavouritesUpdated: false
                }
            }
            return {
                ...state,
                favouritesLoading: false,
                favourites: action.payload,
                isFavouritesUpdated: false
            };

        case UPDATE_FAVOURITE:
            // const newFavourites = [...state.favourites];
            console.log('+++>>>>>', state.favourites);
            return {
                ...state,
                favouritesLoading: true,
                isFavouritesUpdated: true
            };

        case UPDATE_DATA_IN_FAVOURITE:
            const newExhibitions = [...state.favourites[action.payload.favouriteType]];
            const newFavourites = newExhibitions.filter((exhibition) => exhibition.data.id === action.payload.id)[0];
            newFavourites.data.isFavourite = false;
            const newIndex = newExhibitions.indexOf(newFavourites);
            newExhibitions[newIndex] = newFavourites;
            newExhibitions.splice(newIndex, 1);
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    [action.payload.favouriteType]: [...newExhibitions]
                }
            };

        default:
            return state
    }
}

export default GetFavourites;
