import React, {useState, useEffect} from "react";
import { loadStripe } from "@stripe/stripe-js";
import {Elements,CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import axios from "../../../services/axios";
import PaypalImage from '../../../assets/images/paypal-icon.jpg'
import  courseThumbnail  from '../../../assets/images/coursesThumbnails/modern-react-thumb.jpg'
import {STRIPE_PUBLISH_KEY} from "../../../configs"
import {ITypeCheckout} from './types'
import './style.scss'

const stripePromise = loadStripe(STRIPE_PUBLISH_KEY);

const CheckoutForm = (props) => {
  const { success, getCartItems, cartItems, isLoading }  = props
  const [product, setProduct] = useState<any>()
  const [originalPrice, setOriginalPrice] = useState<number>(0)
  const [discountedAmount, setDiscountedAmount] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    getCartItems && getCartItems()
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

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    let cardElement;
    console.log('cardElement',cardElement)
    if(CardElement){
      cardElement = elements!.getElement(CardElement)
    }
    const { error, paymentMethod } = await  stripe!.createPaymentMethod({
      type: "card",
      card: cardElement
    });

    if (!error) {
    let id = paymentMethod?.id;
      try {
        const { data } = await axios.post("/cart/checkout", { id, amount: 1099 });
        console.log(data);
        success();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="checkout">
        <div className="checkout__header"><h1>Checkout</h1></div>
        <div className="checkout__content">
            <div className="checkout__content--user-info">
                <h3>Card information</h3>
                <p>Billing address</p>
                <div className="input-group" >   
                    <input onChange={()=>console.log('handle input change')} type="radio" checked />
                    <label>Credit card</label>
                </div>
                <div className="input-group" >   
                    <input type="radio" />
                    <label>Paypal</label>
                    <img src={PaypalImage} alt="paypal-icon" />
                </div>
                <form className="card-form" onSubmit={handleSubmit}>
                    <div className="name-number">
                        <div className="input-group">
                            <input placeholder="Name on the Card" id="name" type="text" />
                        </div>
                        <CardElement className="stripe-card" />                          
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
                <button type="submit" disabled={!stripe} className="btn">Complete payment</button>
            </div>
        </div>
        
    </div>
  )
};

// you should use env variables here to not commit this
// but it is a public key anyway, so not as sensitive

const Index = (props:ITypeCheckout) => {
  const { getCartItems, cartItems, isLoading }  = props
  const [status, setStatus] = React.useState("ready");

  if (status === "success") {
    return <div>Congrats on your empanadas!</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        isLoading={isLoading}
        cartItems={cartItems}
        getCartItems={getCartItems}
        success={() => {
          setStatus("success");
        }}
      />
    </Elements>
  );
};

export default Index;