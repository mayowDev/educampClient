import { connect } from 'react-redux'
import Header from './Header'
import {searchCourse} from '../../containers/Courses/redux/actions'
import {logout} from '../../containers/Auth/redux/actions'
import {addToCart, getCartItems} from '../../containers/Cart/redux/actions'
import { removeFromWishlist } from '../../containers/Favourites/redux/actions'
import './style.scss'

const mapStatesToProps = ({auth, cart, favourites}) => {    
    return {
        isLoggedIn: auth.isLoggedIn,
        userProfile: auth.userProfile,
        isLoading: auth.authLoading,
        cartItems: cart.cartItems,
        favouriteItems: favourites.favouriteItems
    };
};

const mapDispatchToProps = dispatch => ({
    searchCourse:(q)=> dispatch(searchCourse(q)),
    logout: () => dispatch(logout()),
    getCartItems: ()=> dispatch(getCartItems()),
    addToCart: (id)=> dispatch(addToCart(id)),
    removeFromWishlist:(id) => dispatch(removeFromWishlist(id))
});

export default connect(mapStatesToProps, mapDispatchToProps)(Header)
