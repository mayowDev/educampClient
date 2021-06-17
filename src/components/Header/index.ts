import { connect } from 'react-redux'
import Header from './Header'
import {changeSearch} from '../../containers/Global/redux/actions'
import {logout} from '../../containers/Auth/redux/actions'
import {addToCart, getCartItems} from '../../containers/Cart/redux/actions'
import './style.scss'

const mapStatesToProps = ({auth, cart, favourites}) => {    
    return {
        isLoggedIn: auth.isLoggedIn,
        profileData: auth.userProfileData,
        cartItems: cart.cartItems,
        favouriteItems: favourites.favouriteItems
    };
};

const mapDispatchToProps = dispatch => ({
    changeSearch: (value) => dispatch(changeSearch(value)),
    logout: () => dispatch(logout()),
    getCartItems: ()=> dispatch(getCartItems()),
    addToCart: (id)=> dispatch(addToCart(id))
});

export default connect(mapStatesToProps, mapDispatchToProps)(Header)
