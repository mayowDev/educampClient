import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {Elements,CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import axios from "../../services/axios";
import {STRIPE_PUBLISH_KEY} from "../../configs"
const stripePromise = loadStripe(STRIPE_PUBLISH_KEY);

const CheckoutForm = ({ success }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    let cardElement;
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
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <h2>Price: $10.99 USD</h2>
      <img
        src="https://images.ricardocuisine.com/services/recipes/500x675_7700.jpg"
        style={{ maxWidth: "50px" }}
      />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

// you should use env variables here to not commit this
// but it is a public key anyway, so not as sensitive

const Index = () => {
  const [status, setStatus] = React.useState("ready");

  if (status === "success") {
    return <div>Congrats on your empanadas!</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        success={() => {
          setStatus("success");
        }}
      />
    </Elements>
  );
};


//from -stripe documentation
// const checkoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       if (!stripe || !elements) {
//         // Stripe.js has not loaded yet. Make sure to disable
//         // form submission until Stripe.js has loaded.
//         return;
//       }
  
//       // Get a reference to a mounted CardElement. Elements knows how
//       // to find your CardElement because there can only ever be one of
//       // each type of element.
//       let cardElement;
//       if(CardElement){
//         cardElement = elements.getElement(CardElement)
//       }
//       // Use your card Element with other Stripe.js APIs
//       const {error, paymentMethod} = await stripe.createPaymentMethod({
//         type: 'card',
//         card:  cardElement
//       });
  
//       if (error) {
//         console.log('[error]', error);
//       } else {
//         console.log('[PaymentMethod]', paymentMethod);
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button type="submit" disabled={!stripe}>
//           Pay
//         </button>
//       </form>
//     );
//   };

export default Index;