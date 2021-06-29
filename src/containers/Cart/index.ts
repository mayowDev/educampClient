import { connect } from 'react-redux'
import Cart from './Cart';
import CheckoutForm from './Checkout/CheckoutForm';
import {getWishlistItems, addToWishlist, removeFromWishlist} from '../Favourites/redux/actions'
import {getCartItems, addToCart, removeFromCart,  createOrder, getOrderItems, postCheckout} from './redux/actions'
import {getCourseByName} from '../Courses/redux/actions'
import './style.scss'

const mapStateToProps = ({cart, favourites, auth, courses}) => { 
  return {
    isLoading: cart.loading,
    isApiError: cart.isApiError,
    orderItems: cart.orderItems,
    cartItems: cart.cartItems,
    favouriteItems: favourites.favouriteItems,
    isRemovedFromCart: cart.isRemovedFromCart,
    isRemovedFromFavorite: favourites.isRemovedFromFavorite,
    orderDetails: cart.orderDetails,
    userProfile: auth.userProfile,
    courseDetails: courses.courseDetails
  }
}

const mapDispatchToProps = (dispatch) => ({
    getCartItems: () => dispatch(getCartItems()),
    addToCart: (id:object) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    getOrderItems:()=>dispatch(getOrderItems()),
    createOrder:() => dispatch(createOrder()),
    checkoutOrder:(data) => dispatch(postCheckout(data)),
    getWishlistItems:() => dispatch(getWishlistItems()),
    addToWishlist:(id:object) => dispatch(addToWishlist(id)),
    removeFromWishlist:(id:string) => dispatch(removeFromWishlist(id)),
    getCourseByName:(name:string) => dispatch(getCourseByName(name))

})

export default {
  CheckoutForm: connect(mapStateToProps, mapDispatchToProps)(CheckoutForm),
  Cart: connect(mapStateToProps, mapDispatchToProps)(Cart),
}