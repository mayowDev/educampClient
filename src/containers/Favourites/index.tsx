import { connect } from 'react-redux'
import Favourites from './Favourites'
import { getWishlistItems, addToWishlist, removeFromWishlist } from './redux/actions'
import './style.scss'

const mapStatesToProps = ({favourites}) => {
    return {
      isLoading: favourites.loading,
      favouriteItems: favourites.favouriteItems,
      isRemovedFromFavorite: favourites.isRemovedFromFavorite,
  };
};

const mapDispatchToProps = dispatch => ({
    getWishlistItems:() => dispatch(getWishlistItems()),
    addToWishlist:(id:object) => dispatch(addToWishlist(id)),
    removeFromWishlist:(id:string) => dispatch(removeFromWishlist(id)),
    // toggleFavourite: (itemId, isFavourite) => dispatch(toggleFavourite(itemId, isFavourite)),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Favourites)
