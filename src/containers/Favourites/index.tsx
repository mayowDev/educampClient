import { connect } from 'react-redux'
import Favourites from './Favourites'
import { fetchFavouritesInit, updateFavourite, updateDataInFavourite } from './redux/actions'
import {toggleFavouriteExhibition} from "../Exhibitions/redux/actions";
import './style.scss'

const mapStatesToProps = ({favourite, exhibition}) => {
    return {
    exhibition,
    favourite
  };
};

const mapDispatchToProps = dispatch => ({
    fetchFavourites: (page) => dispatch(fetchFavouritesInit(page)),
    updateFavourite: () => dispatch(updateFavourite()),
    updateDataInFavourite: (favouriteType, id, currentState) => dispatch(updateDataInFavourite(favouriteType, id, currentState)),
    toggleFavouriteExhibition: (exhibitionId, isFavourite) => dispatch(toggleFavouriteExhibition(exhibitionId, isFavourite)),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Favourites)
