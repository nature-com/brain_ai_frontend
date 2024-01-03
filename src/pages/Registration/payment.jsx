import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/registration.css";
import { paymentIcon } from "../../assets/images/images";
import "react-tabs/style/react-tabs.css";
import CheckoutForm from "../stripe/CheckoutForm";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = (props) => {
  const [stripePublishableKey, setStripePublishableKey] = useState(null);
  const [stripeClientSecret, setStripeClientSecret] = useState(null);
  const [stripePromise, setStripePromise] = useState(null);
  const [options, setOptions] = useState(null);

  const [errorMessage, setErrorMessage] = useState();

  const planId = localStorage.getItem('planId');
  // const user_id = localStorage.getItem('user_id');

  // console.log('props.userPlan :>> ', props.userPlan);

  useEffect(() => {
    const url = 'https://aitools.bestworks.online/user/stripe-plan-keys';
    var publishableKey = null;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        // console.log('payment data', data);
        publishableKey = data['stripe-publishable-key'];
        // console.log(publishableKey);
        setStripePublishableKey(publishableKey);
      })
      .catch((error) => console.error('Error:', error));

    // Create subscription with incomplete payment method
    const url2 = 'https://aitools.bestworks.online/user/payment';
    const userData = {
      plan_id: planId,
      entity: 'payment_intent',
      user_id: props.user_id,
      // user_id: user_id,
    };

    fetch(url2, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // You might need to include additional headers if required by the API
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('data?.customer_id', data?.customer_id);
        var custId = localStorage.getItem('custId');
        var subscriptionId = localStorage.getItem('subscriptionId');
        // if (custId == null && subscriptionId == null) {
        localStorage.setItem('custId', data?.customer_id);
        localStorage.setItem('subscriptionId', data?.subscription_id);
        // }
        // console.log('SUBSCRIPTION', data?.clientSecret);
        setStripeClientSecret(data?.clientSecret);

        const promise = loadStripe(publishableKey);
        setStripePromise(promise);
        const stripe_options = {
          // passing the client secret obtained from the server
          clientSecret: data?.clientSecret,
        };

        setOptions(stripe_options);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

    return (
        // <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-4xl mx-auto my-0">
            <div
              className="container mx-auto my-0"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="flex">
                <div className="hidden lg:block w-2/5 flex justify-center items-center">
                  <div>
                    <img src={paymentIcon} />
                  </div>
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="register_cont">
                    <h2 className="text-center text-3xl text-[#ba9e63] font-bold mb-5">
                      Make Payment
                    </h2>
                    <div className='stripe-error text-red-600'>{errorMessage}</div>
                    {stripePublishableKey && (
                      <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm setErrorMessage={setErrorMessage} />
                      </Elements>
                    )}
                  </div>
                  </div>
                </div>
              </div>
            // </div>
    );
};

export default Payment;