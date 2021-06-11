import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'
import  courseThumbnail  from '../../assets/images/coursesThumbnails/modern-react-thumb.jpg'
import  course2Thumbnail  from '../../assets/images/coursesThumbnails/google-cloud.jpg'
import IconBtn from '../../components/IconBtn';
import Spinner from '../../components/Spinner'
const Cart = ({getCartItems, cartItems, isLoading}) => {
    const history = useHistory()
    const [items, setItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        getCartItems()
    },[])
    useEffect(() => {
        if(cartItems ){
            setItems(cartItems)
            // let total;
            // cartItems.forEach((item, index)=> {
            //     console.log('a', item.price, 'index', index);
            //   total = item.price
            // });
            let total = cartItems.reduce((a, b) => {
                // console.log('a', a);
                // console.log('b---', b);
               return  a + b.price
            }, 0);//is working
            setTotalPrice(total)
        }
    }, [cartItems.length]); 
    console.log('totalPrice', totalPrice);

    // if(!isLoading){ console.log('items', items)} //is working
    return (
        <div className="cart">
            <div className="cart__header"> <h1>Shopping cart</h1> </div>
            {isLoading ?
                <Spinner type="cover" />
                :
                <div className="cart__content">
                <div className="cart__content--items">
                    <div className="cart-container">
                        <h3 className="item-header"> {cartItems.length} course in cart</h3>
                        { cartItems.length == 0?
                            <div className="empty-item-card">
                                <IconBtn onClick={e=> alert("Your cart is empty!")} className="user--cart" type="cart" />
                                <p>Your cart is empty. Keep shopping to find courses</p>
                                <div className="checkout-btn">
                                    <button className="btn">Keep shopping</button>
                                </div>
                            </div>
                        :
                         cartItems.map(item =>{
                            return (
                                <div key={item.id} className="item-card">
                                    <img src={courseThumbnail} alt="course-item-img"/>
                                    <div className="item-content">
                                        <h4>{item.title}</h4>
                                        {/* <h4>Blockchain for Business: The New Industrial Revolution</h4> */}
                                        <p>By Stephen Graider</p>
                                    </div>
                                    <div className="item-actions">
                                        <a href="#">Remove</a>
                                        <a href="#">Save for later</a>
                                        <a href="#">move to wishlist</a>
                                    </div>
                                    <div className="item-price">${item.price}</div>
                                </div>

                            )
                        })
                    }
                    </div>
                    <div className="save-for-later">
                         <h3 className="item-header"> Saved for Later</h3>
                         <div className="item-card">
                            <img src={courseThumbnail} alt="course-item-img"/>
                            <div className="item-content">
                                <h4>Machine Learning A-Z™: Hands-On Python & R In Data Science</h4>
                                <p>By Stephen Graider</p>
                            </div>
                            <div className="item-actions">
                                <a href="#">Remove</a>
                                <a href="#">Move to Cart</a>
                            </div>
                            <div className="item-price">$11.99</div>
                         </div>
                    </div>
                    <div className="whislist">
                         <h3 className="item-header"> Recently wishlisted</h3>
                         <div className="item-card">
                            <img src={course2Thumbnail} alt="course-item-img"/>
                            <div className="item-content">
                                <h4>Machine Learning A-Z™: Hands-On Python & R In Data Science</h4>
                                <p>By Stephen Graider</p>
                            </div>
                            <div className="item-actions">
                                <a href="#">Remove</a>
                                <a href="#">Move to Cart</a>
                            </div>
                            <div className="item-price">$11.99</div>
                         </div>
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
