import { connect } from 'react-redux'
import Cart from './Cart';
import Checkout from './Checkout/Checkout';
import CheckoutForm from './Checkout/CheckoutForm';
import {getWishlistItems, addToWishlist, removeFromWishlist} from '../Favourites/redux/actions'
import {getCartItems, addToCart, removeFromCart,  createOrder} from './redux/actions'
import './style.scss'

const mapStateToProps = ({cart, favourites}) => { 
  return {
    isLoading: cart.loading,
    isApiError: cart.isApiError,
    orderItems: cart.orderItems,
    cartItems: cart.cartItems,
    favouriteItems: favourites.favouriteItems,
    isRemovedFromCart: cart.isRemovedFromCart,
    isRemovedFromFavorite: favourites.isRemovedFromFavorite,
    orderDetails: cart.orderDetails
  }
}

const mapDispatchToProps = (dispatch) => ({
    getCartItems: () => dispatch(getCartItems()),
    addToCart: (id:object) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    createOrder:() => dispatch(createOrder()),
    getWishlistItems:() => dispatch(getWishlistItems()),
    addToWishlist:(id:object) => dispatch(addToWishlist(id)),
    removeFromWishlist:(id:string) => dispatch(removeFromWishlist(id))

})

export default {
  Cart: connect(mapStateToProps, mapDispatchToProps)(Cart),
  Checkout: connect(mapStateToProps, mapDispatchToProps)(Checkout),
  CheckoutForm: connect(mapStateToProps, mapDispatchToProps)(CheckoutForm)
}