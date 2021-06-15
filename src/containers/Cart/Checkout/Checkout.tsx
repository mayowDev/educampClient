import React,{useState, useEffect} from 'react';
import { loadStripe } from "@stripe/stripe-js";
import {Elements,CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import StripeCheckout from 'react-stripe-checkout';
import {STRIPE_PUBLISH_KEY} from "../../../configs"
import PaypalImage from '../../../assets/images/paypal-icon.jpg'
import  courseThumbnail  from '../../../assets/images/coursesThumbnails/modern-react-thumb.jpg'
import './style.scss'

const Checkout = (props) => {
    const {getCartItems, cartItems, isLoading} = props;
    const [product, setProduct] = useState<any>()
    const [originalPrice, setOriginalPrice] = useState<number>(0)
    const [discountedAmount, setDiscountedAmount] = useState<number>(0)
    const [totalPrice, setTotalPrice] = useState(0)
    
    const stripePromise = loadStripe(STRIPE_PUBLISH_KEY)
    useEffect(() => {
        getCartItems()
    },[])

    useEffect(() => {
        if(cartItems &&cartItems.length > 0){
            console.log('cartItems', cartItems)
            let total = cartItems.reduce((a, b) => {
               return  a + b.price
            }, 0);
            setTotalPrice(total)
            setOriginalPrice(total*8)
            setDiscountedAmount(Math.abs(originalPrice - total*7))
            setProduct(cartItems)
        }
    }, [cartItems.length]); 

    const handleCardChange  = ()=>{
        console.log('payment changed')
    }
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
                        <input onChange={handleCardChange} type="radio" checked />
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

                        {product&&product.map(item =>
                        <div key={item.id} className="item-card">
                             <img src={courseThumbnail} alt="course-item-img"/>
                             <h4>{item.title}</h4>
                             <div className="item-price">${item.price}.99</div>
                         </div>
                        )}
                    </div>
                </div>
                <div className="checkout__content--sidebar">
                    <h3>Summary</h3>
                    <div className="original">
                        <p>Original amount:</p>
                        <span>${originalPrice}.99</span>
                    </div>
                    <div className="discounted">
                        <p>Discounted price:</p>
                        <span>${discountedAmount}</span>
                    </div>
                    <div className="total">
                        <p>Total:</p>
                        <span>${totalPrice}.99</span>
                    </div>
                    <div className="legal-message">
                        <p> Educamp is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</p>
                        <p>By completing your purchase you agree to these <a href="#">Terms of Service.</a></p>
                    </div>
                    
                    <StripeCheckout 
                        stripeKey={STRIPE_PUBLISH_KEY&&STRIPE_PUBLISH_KEY || ''} 
                        token={paymentToken}
                        amount={totalPrice * 100}
                    >
                        <button onClick={e=>console.log('/cart/checkout')} className="btn">Complete payment</button>
                    </StripeCheckout>
                </div>
            </div>
            
        </div>
    )
}

export default Checkout
