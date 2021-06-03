import { connect } from 'react-redux'
import Favourites from './Favourites'
import { fetchFavouritesInit, updateFavourite, updateDataInFavourite } from './redux/actions'
import './style.scss'

const mapStatesToProps = ({favourite}) => {
    return {
    favourite
  };
};

const mapDispatchToProps = dispatch => ({
    fetchFavourites: (page) => dispatch(fetchFavouritesInit(page)),
    updateFavourite: () => dispatch(updateFavourite()),
    updateDataInFavourite: (favouriteType, id, currentState) => dispatch(updateDataInFavourite(favouriteType, id, currentState)),
    // toggleFavourite: (itemId, isFavourite) => dispatch(toggleFavourite(itemId, isFavourite)),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Favourites)
