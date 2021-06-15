import React, {useEffect, useState} from 'react'
import { useHistory, Link } from 'react-router-dom';
import  courseThumbnail  from '../../assets/images/coursesThumbnails/modern-react-thumb.jpg'
import  course2Thumbnail  from '../../assets/images/coursesThumbnails/google-cloud.jpg'
import IconBtn from '../../components/IconBtn';
import Spinner from '../../components/Spinner'

const Cart = (props) => {
    const {getCartItems, addToCart, removeFromCart, getWishlistItems, addToWishlist, 
        removeFromWishlist, cartItems, favouriteItems, isLoading} = props;

    const history = useHistory()
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        getCartItems()
        getWishlistItems()
    },[])

    useEffect(() => {
        if(cartItems ){
            let total = cartItems.reduce((a, b) => {
               return  a + b.price
            }, 0);
            setTotalPrice(total)
        }
    }, [cartItems.length]); 

    const handleMoveToCart = async (courseid:string)=>{
        await addToCart({courseid})
        await removeFromWishlist(courseid)
    }
    const handleRemoveFromCart =async (courseid) => {
        await removeFromCart(courseid)
    }
    const handleMoveToWishlist = async (courseid:string) =>{
        await addToWishlist({courseid})
        await removeFromCart(courseid)
    }
    const  handleRemoveFromWishlist = async (courseid:string) =>{
        await removeFromWishlist(courseid)
    }
    return (
        <div className="cart">
            <div className="cart__header"> <h1>Shopping cart</h1> </div>
            {isLoading ?
                <Spinner type="cover" />
                :
                <div className="cart__content">
                <div className="cart__content--items">
                    <div>
                        <h3 className="item-header"> {cartItems.length} course in cart</h3>
                        { cartItems.length == 0?
                            <div className="empty-item-card">
                                <IconBtn onClick={()=> console.log("Your cart is empty!")} className="user--cart" type="cart" />
                                <p>Your cart is empty. Keep shopping to find courses</p>
                                <div className="checkout-btn">
                                    <button onClick={()=>history.push('/courses')} className="btn">Keep shopping</button>
                                </div>
                            </div>
                        :
                         cartItems.map(item =>{
                            return (
                                <div key={item.id} className="item-card">
                                    <img src={courseThumbnail} alt="course-item-img"/>
                                    <div className="item-content">
                                        <h4>{item.title}</h4>
                                        <p>By {item.createdBy}</p>
                                    </div>
                                    <div className="item-actions">
                                        <Link onClick={()=>handleRemoveFromCart(item.id)} to="#">Remove</Link>
                                        <Link onClick={()=>handleMoveToWishlist(item.id)} to="#">Move to wishlist</Link>
                                    </div>
                                    <div className="item-price">${item.price}</div>
                                </div>

                            )
                        })
                    }
                    </div>
                    <div className="whislist">
                         <h3 className="item-header"> Recently wishlisted</h3>
                         {favouriteItems && favouriteItems.length == 0?
                            <div className="empty-item-card">
                                <p>You haven't added any courses to your wishlist.</p>
                            </div>
                        :
                         favouriteItems.map(item =>{
                            return (
                                <div key={item.id} className="item-card">
                                    <img src={course2Thumbnail} alt="course-item-img"/>
                                    <div className="item-content">
                                        <h4>{item.title}</h4>
                                        <p>By {item.createdBy}</p>
                                    </div>
                                    <div className="item-actions">
                                        <Link onClick={()=>handleRemoveFromWishlist(item.id)} to="#">Remove</Link>
                                        <Link onClick={()=>handleMoveToCart(item.id)} to="#">Move to cart</Link>
                                    </div>
                                    <div className="item-price">${item.price}</div>
                                </div>

                            )
                        })
                    }
                    </div>
                </div>
                <div className="checkout-sidebar">
                    <div className="price">
                        <span>Total:</span>
                        <h3>${totalPrice}</h3>
                    </div>
                    <div className="checkout-btn">
                        <button onClick={e=>history.push('/cart/checkout')} className="btn">Checkout</button>
                    </div>
                    <input type="text" placeholder="Enter discount Code"/>
                    <input className="aplly-btn" value="apply" type="submit" placeholder="Enter discount Code"/>
                </div>

            </div>
            }
            
        </div>
    )
}

export default Cart
