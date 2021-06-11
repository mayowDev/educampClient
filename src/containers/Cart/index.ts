import { connect } from 'react-redux'
import Cart from './Cart';
import {getCartItems, addToCart, removeFromCart, createOrder} from './redux/actions'
import './style.scss'

const mapStateToProps = ({cart}) => { 
    // console.log('cart', cart)
  return {
    isLoading: cart.loading,
    isApiError: cart.isApiError,
    orderItems: cart.orderItems,
    cartItems: cart.cartItems,
    isRemovedFromCart: cart.isRemovedFromCart,
    orderDetails: cart.orderDetails
  }
}

const mapDispatchToProps = (dispatch) => ({
    getCartItems: () => dispatch(getCartItems()),
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id:string) => dispatch(removeFromCart(id)),
    createOrder:() => dispatch(createOrder())

})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
    // AddCourse: connect(mapStateToProps, mapDispatchToProps)(AddCourse),
    // EditCourse: connect(mapStateToProps, mapDispatchToProps)(EditCourse),
    // CourseDetails: connect(mapStateToProps, mapDispatchToProps)(CourseDetails