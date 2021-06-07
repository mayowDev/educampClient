import React from 'react'
import './style.scss'
import  courseThumbnail  from '../../assets/images/coursesThumbnails/modern-react-thumb.jpg'
import IconBtn from '../../components/IconBtn';

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart__header"> <h1>Shopping cart</h1> </div>
            <div className="cart__content">
                <div className="cart__content--items">
                    <div className="cart-container">
                        <h3 className="item-header"> 3 courses in cart</h3>
                        <div className="empty-item-card">
                            {/* <img src={courseThumbnail} alt="course-item-img"/> */}
                            <IconBtn onClick={e=> alert("Your cart is empty!")} className="user--cart" type="cart" />
                            <p>Your cart is empty. Keep shopping to find courses</p>
                            <div className="checkout-btn">
                                <button className="btn">Keep shopping</button>
                            </div>
                        </div>
                        <div className="item-card">
                            <img src={courseThumbnail} alt="course-item-img"/>
                            <div className="item-content">
                                <h4>Machine Learning A-Z™: Hands-On Python & R In Data Science</h4>
                                <p>By Stephen Graider</p>
                            </div>
                            <div className="item-actions">
                                <a href="#">Remove</a>
                                <a href="#">Save for later</a>
                                <a href="#">move to wishlist</a>
                            </div>
                            <div className="item-price">$11.99</div>
                        </div>
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
                </div>
                <div className="checkout-sidebar">
                    <div className="price">
                        <span>Total:</span>
                        <h3>$35.98</h3>
                    </div>
                    <div className="checkout-btn">
                        <button className="btn">Checkout</button>
                    </div>
                    <input type="text" placeholder="Enter discount Code"/>
                    <input className="aplly-btn" value="apply" type="submit" placeholder="Enter discount Code"/>
                </div>

            </div>
        </div>
    )
}

export default Cart
