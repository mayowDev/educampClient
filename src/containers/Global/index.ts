import { connect } from 'react-redux';
import GlobalPage from './Global'
import '../../assets/fonts/fonts.css'
import { getUserData } from '../Auth/redux/actions';
import {fetchCourses} from '../Courses/redux/actions';
import {getCartItems} from '../Cart/redux/actions';
import { getWishlistItems} from '../Favourites/redux/actions';
import { getRouteName } from './redux/actions';

const mapStatesToProps = ({auth, global, cart}) => {    
    // console.log('cart state', cart.cartItems)
    return {
        isLoggedIn: auth.isLoggedIn,
        userProfile: auth.userProfile,
        cartItems: cart.cartItems,
        routeName: global.routeName
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserData: () => dispatch(getUserData()),
        fetchCourses: () => dispatch(fetchCourses()), 
        getCartItems: () => dispatch(getCartItems()),
        getWishlistItems: () => dispatch(getWishlistItems()),
        getRouteName:() => dispatch(getRouteName())
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(GlobalPage);