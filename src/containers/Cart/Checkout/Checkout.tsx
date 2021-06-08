import React,{useState} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {STRIPE_PUBLISH_KEY} from "../../../configs"
import PaypalImage from '../../assets/images/paypal-icon.jpg'
import  courseThumbnail  from '../../assets/images/coursesThumbnails/modern-react-thumb.jpg'

import './style.scss'
const Checkout = () => {
    const [product, setProduct] = useState({
        name:'test product', 
        price: 10,
        description: 'product description'
    })
    const paymentToken = token =>{
        const body ={
            token, product
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        return fetch(`http://localhost:5000/cart/checkout`, {
            method:'POST',
            headers,
            body: JSON.stringify(body)
        }).then(response=>{
            console.log('checkout response', response)
        }).catch(err=>{
            console.log(err)
        })

    }
    return (
        <div className="checkout">
            <div className="checkout__header"><h1>Checkout</h1></div>
            <div className="checkout__content">
                <div className="checkout__content--user-info">
                    <h3>Card information</h3>
                    <p>Billing address</p>
                    <input className="country-options" type="text" placeholder="Select your Country"/>
                    <div className="input-group" >   
                        <input type="radio" checked />
                        <label>New payment Card</label>
                    </div>
                    <div className="input-group" >   
                        <input type="radio" />
                        <label>Paypal</label>
                        <img src={PaypalImage} alt="paypal-icon" />
                    </div>
                    <form className="card-form" action="">
                        <div className="name-number">
                            <div className="input-group">
                                <input placeholder="Name on the Card" id="name" type="text" />
                            </div>
                            <div className="input-group">
                                <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength={19} placeholder="xxxx xxxx xxxx xxxx"></input>
                            </div>                            
                        </div>
                        <div className="date-csv">
                            <div className="input-group">
                                {/* <label htmlFor="name">Card Name</label> */}
                                <input placeholder="MM / YY" id="date" type="date" />
                            </div>
                            <div className="input-group">
                                <input placeholder="Security code" id="csv" type="text" />
                            </div>

                        </div>
                        
                    </form>
                    <div className="order-details">
                        <h3>Order Details</h3>
                        <div className="item-card">
                            <img src={courseThumbnail} alt="course-item-img"/>
                            <h4>Machine Learning A-Z™: Hands-On Python & R In Data Science</h4>
                            <div className="item-price">$11.99</div>
                        </div>
                    </div>
                </div>
                <div className="checkout__content--sidebar">
                    <h3>Summary</h3>
                    <div className="original">
                        <p>Original price:</p>
                        <span>$89.99</span>
                    </div>
                    <div className="discounted">
                        <p>Discounted price:</p>
                        <span>$78.99</span>
                    </div>
                    <div className="total">
                        <p>Total:</p>
                        <span>$11.99</span>
                    </div>
                    <div className="legal-message">
                        <p> Educamp is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</p>
                        <p>By completing your purchase you agree to these <a href="#">Terms of Service.</a></p>
                    </div>
                    
                    <StripeCheckout 
                        stripeKey={STRIPE_PUBLISH_KEY&&STRIPE_PUBLISH_KEY || ''} 
                        token={paymentToken}
                        amount={product.price * 100}
                    >
                        <button onClick={e=>console.log('/cart/checkout')} className="btn">Complete payment</button>
                    </StripeCheckout>
                </div>
            </div>
            
        </div>
    )
}

export default Checkout
