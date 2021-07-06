import React, {useState, useEffect} from "react";
import { loadStripe } from "@stripe/stripe-js";
import {Elements,CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import { PayPalButton } from 'react-paypal-button-v2'

import {toast} from 'react-toastify'
import axios from "../../../services/axios";
import PaypalImage from '../../../assets/images/paypal-icon.jpg'
import  courseThumbnail  from '../../../assets/images/coursesThumbnails/modern-react-thumb.jpg'
import LoadingButton from '../../../assets/icons/Loading-Button.svg'
import {STRIPE_PUBLISH_KEY} from "../../../configs"
import {ITypeCheckout} from './types'
import './style.scss'

const stripePromise = loadStripe(STRIPE_PUBLISH_KEY);

const CheckoutForm = (props) => {
  const { getCartItems, cartItems,userProfile,  passedProps }  = props
  const [products, setProduct] = useState<any>()
  const [OrderId, setOrderId] = useState<string>()
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [discountedAmount, setDiscountedAmount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [sdkReady, setSdkReady] = useState<boolean>(false);
  const [isGift, setIsGift] = useState<boolean>(false);
  const [isExpressCheckout, setIsExpressCheckout] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [creditCard, setCreditCard] = useState<any>();
  const [paymentType, setPaymentType] = useState<string>('stripe')
  const history = passedProps.history
  const {state} = history.location


  useEffect(() => {
    getCartItems && getCartItems();
  },[])

  useEffect(() => {
    if(userProfile&& userProfile.id){
        setName(userProfile.name)
    }
  }, [userProfile&&userProfile.id]);

  useEffect(() => {
      if(cartItems &&cartItems.length > 0){
          let total = cartItems.reduce((a, b) => {
            return  a + b.price
          }, 0);
          setTotalPrice(total)
          setOriginalPrice(total*8)
          setDiscountedAmount(Math.abs(originalPrice - total*7))
          setProduct(cartItems)
      }
  }, [cartItems.length]); 

  useEffect(() => {
    const slug = state&&state.slug
    const orderid = state&&state.OrderId
    const isExpressCheckout = state&&state.isExpressCheckout
    const isGift = state&&state.isGift
    if(slug && orderid&&isGift){
      passedProps.getCourseByName(slug)
      setOrderId(orderid)
      setIsGift(isGift)
    }
    if(isExpressCheckout){setIsExpressCheckout(true) }

  }, [state&&state.slug, state.OrderId]);

  useEffect(() => {
    if(passedProps.courseDetails&&passedProps.courseDetails.id){
      // setGift(passedProps.courseDetails)
      setTotalPrice(passedProps.courseDetails.price)
      setProduct([passedProps.courseDetails])
    }
  }, [passedProps.courseDetails&&passedProps.courseDetails.id]);

  useEffect(() => {
    if (!userProfile&&!userProfile.id) {
      history.push('/login')
    }
    if(paymentType&&paymentType =='paypal'){
      const addPayPalScript = async () => {
        const {data} = await axios.post('/cart/checkout', {userProfile,products,totalPrice, OrderId, paymentType})
        const clientId = data.clientId
        console.log('clientId:', data.clientId)

        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
        script.async = true
        script.onload = () => {
          setSdkReady(true)
        }
        document.body.appendChild(script)
      }
        if (!window.paypal) {
          addPayPalScript()
        } 
    }
    
      // else {
      //   setSdkReady(true)
      // }
  }, [paymentType&&paymentType])
  const successPaymentHandler = (paymentResult) => {
    console.log('paymentResult', paymentResult)
  }
  const handlePaypalOneTimePayment = async (e)=>{
    e.preventDefault()
    console.log('paypal payment')
  }

  const stripe = useStripe();
  const elements = useElements();
  const handleStripeOneTimePayment = async (e) =>{
    e.preventDefault();
    let cardElement;
    if (!stripe || !elements) {setIsDisabled(true);return;}else{setIsDisabled(false)}
    if(CardElement){cardElement = elements!.getElement(CardElement)}
    setIsLoading(true)
    const res= await axios.post('/cart/checkout', {userProfile,products,totalPrice, OrderId})
    const clientSecret =  res.data['client_secret']
    const result = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: cardElement,
        billing_details:{email:userProfile.email}
      }
    })

    if (result.error) {
      setIsLoading(false)
      toast.error(result.error.message)
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setIsLoading(false)
        toast.dark('Congratulations! your payment is recieved  ')
        console.log('Money is in the bank!');
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        // history.push('/learning')
      }
    }
  }  
  // const isCardValid = (card) => {
    // var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    // var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    // var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    // var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    // var isValid = false;
  
      // return visaRegEx.test(card) === true;
  // };

  const allInputsAreValid = () => {
      return creditCard&& creditCard.empty === false && creditCard&& creditCard.complete === true && name.length > 2
  }
  return (
    <div className="checkout">
        <div className="checkout__header"><h1>Checkout</h1></div>
        <div className="checkout__content">
            <div className="checkout__content--user-info">
                <h3>Card information</h3>
                <div className="input-group" >   
                    <input onChange={e=>setPaymentType('stripe')} type="radio" checked={paymentType === 'stripe'} />
                    <label>Credit card</label>
                </div>
                <div className="input-group" >   
                    <input onChange={e=>setPaymentType('paypal')} type="radio" checked={paymentType === 'paypal'}/>
                    <label>Paypal</label>
                    <img src={PaypalImage} alt="paypal-icon" />
                </div>
                {paymentType === 'stripe'&&
                  <form className="card-form">
                    <div className="name-number">
                        <div className="input-group">
                            <input onChange={(e)=>setName(e.target.value)} value={name} placeholder="Name on the Card" id="name" type="text" />
                        </div>
                        <CardElement onChange={e=>setCreditCard(e)} className={`stripe-card ${creditCard&&!creditCard.complete?'input-error':''}`} />                          
                        {creditCard&&!creditCard.complete&&
                            <span className="error-message">{'please provide complete Credit Card information'}</span>
                          }
                    </div>
                  </form>
                }
                {paymentType === 'paypal'&&
                  <div className="paypal-form">
                  <p>In order to complete your transaction, we will transfer you over to PayPal's secure servers.</p>
                  </div>
                }
                <div className="order-details">
                    <h3>Order Details</h3>
                    {/* {gift&&gift.id&& (
                       <div onClick={e=>history.push(`/courses/${gift.slug}`)} key={gift.id} className="item-card">
                         <img src={courseThumbnail} alt="course-item-img"/>
                         <h4>{gift.title}</h4>
                         <div className="item-price">${gift.price}</div>
                      </div>
                    )} */}
                    {products&&products.map(item =>
                    <div onClick={e=>history.push(`/courses/${item.slug}`)} key={item.id} className="item-card">
                         <img src={courseThumbnail} alt="course-item-img"/>
                         <h4>{item.title}</h4>
                         <div className="item-price">${item.price}</div>
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
                    <span>${discountedAmount}.99</span>
                </div>
                <div className="total">
                    <p>Total:</p>
                    <span>${totalPrice}</span>
                </div>
                <div className="legal-message">
                    <p> Educamp is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</p>
                    <p>By completing your purchase you agree to these <a href="#">Terms of Service.</a></p>
                </div>
                {paymentType === 'stripe'&&
                  <button  onClick={handleStripeOneTimePayment} type="submit" disabled={isDisabled} className={`btn ${!allInputsAreValid()&&'disabled'}`}>
                    {isLoading? <img style={{width: '40px', borderRadius: '50%'}} src={LoadingButton}/>:'Complete payment'}
                  </button>
                }
                {/* {!sdkReady ? (
                    <h2>Loading...</h2>
                  ) : (
                    <PayPalButton
                      amount={totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )} */}
                {paymentType == 'paypal'&&
                  <PayPalButton
                    amount={totalPrice}
                    onSuccess={successPaymentHandler}
                  />
                  // <button onClick={handlePaypalOneTimePayment} type="submit" disabled={isDisabled} className="btn">
                  //   {isLoading? <img style={{width: '40px', borderRadius: '50%'}} src={LoadingButton}/>:'Proceed'}
                  // </button>
                }
                
            </div>
        </div>
        
    </div>
  )
};


const Index = (props:ITypeCheckout) => {
  const { getCartItems, cartItems,userProfile, ...rest }  = props
  const [status, setStatus] = React.useState("ready");
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        passedProps={rest}
        cartItems={cartItems}
        getCartItems={getCartItems}
        userProfile={userProfile}
        success={() => {
          setStatus("success");
        }}
        status={status}
        
      />
    </Elements>
  );
};

export default Index;