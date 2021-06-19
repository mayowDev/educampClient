import { connect } from 'react-redux'
import Header from './Header'
import {changeSearch} from '../../containers/Global/redux/actions'
import {logout} from '../../containers/Auth/redux/actions'
import {addToCart, getCartItems} from '../../containers/Cart/redux/actions'
import './style.scss'
import { removeFromWishlist } from '../../containers/Favourites/redux/actions'

const mapStatesToProps = ({auth, cart, favourites}) => {    
    return {
        isLoggedIn: auth.isLoggedIn,
        userProfile: auth.userProfile,
        cartItems: cart.cartItems,
        favouriteItems: favourites.favouriteItems
    };
};

const mapDispatchToProps = dispatch => ({
    changeSearch: (value) => dispatch(changeSearch(value)),
    logout: () => dispatch(logout()),
    getCartItems: ()=> dispatch(getCartItems()),
    addToCart: (id)=> dispatch(addToCart(id)),
    removeFromWishlist:(id) => dispatch(removeFromWishlist(id))
});

export default connect(mapStatesToProps, mapDispatchToProps)(Header)
