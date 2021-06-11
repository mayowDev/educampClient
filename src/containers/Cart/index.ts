import { connect } from 'react-redux'
import Cart from './Cart';
import {getCartItems, addToCart, removeFromCart, getWishlistItems, addToWishlist, removeFromWishlist, createOrder} from './redux/actions'
import './style.scss'

const mapStateToProps = ({cart}) => { 
    // console.log('cart', cart)
  return {
    isLoading: cart.loading,
    isApiError: cart.isApiError,
    orderItems: cart.orderItems,
    cartItems: cart.cartItems,
    favouriteItems: cart.favouriteItems,
    isRemovedFromCart: cart.isRemovedFromCart,
    isRemovedFromFavorite: cart.isRemovedFromFavorite,
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
    // AddCourse: connect(mapStateToProps, mapDispatchToProps)(AddCourse),
    // EditCourse: connect(mapStateToProps, mapDispatchToProps)(EditCourse),
    // CourseDetails: connect(mapStateToProps, mapDispatchToProps)(CourseDetails