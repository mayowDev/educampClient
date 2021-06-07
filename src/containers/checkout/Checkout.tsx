import React,{useState} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {STRIPE_PUBLISH_KEY} from "../../configs"
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
            <StripeCheckout 
                stripeKey={STRIPE_PUBLISH_KEY&&STRIPE_PUBLISH_KEY || ''} 
                token={paymentToken}
                amount={product.price * 100}
                
            />
        </div>
    )
}

export default Checkout
