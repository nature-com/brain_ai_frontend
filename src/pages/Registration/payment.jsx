import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/registration.css";
import { paymentIcon } from "../../assets/images/images";
import "react-tabs/style/react-tabs.css";
import CheckoutForm from "../stripe/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Payment = (props) => {
  const plansList = useSelector((state) => state.plans?.plans);

  const [stripePromise, setStripePromise] = useState(null);
  const [options, setOptions] = useState(null);

  const [errorMessage, setErrorMessage] = useState();

  const {
    stripeClientSecret,
    customer_id,
    subscription_id,
    stripePublishableKey,
    email,
    user_id,
    planId,
  } = props;


  useEffect(() => {
    const promise = loadStripe(stripePublishableKey);
    setStripePromise(promise);

    const stripe_options = {
      clientSecret: stripeClientSecret,
    };
    setOptions(stripe_options);
  }, []);

  const monthly = plansList?.monthly_plans?.find(plan => plan.id === planId);
  const yearly = plansList?.yearly_plans?.find(plan => plan.id === planId);

  return (
    // <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-4xl mx-auto my-0">
    <>
      <ScrollToTop />
      <div
        className="container mx-auto my-0"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="flex">
          {monthly && !yearly &&
            (
              <div className="hidden lg:block w-2/5 flex justify-center items-center">
                <p className="text-center text-base lg:text-lg font-medium text-gray-400 pb-2">
                  Your Subscription
                </p>
                <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-3">
                  {monthly.name || "plan name"}
                </h2>
                <h3 className="text-center text-lg font-medium text-black pb-3">
                  {monthly.currency}
                  <span className="text-center text-3xl font-bold text-black pb-6">
                    {monthly.discounted_price}{" "}
                    <span className="text-center text-lg font-medium text-black">
                      / {monthly.plan_interval}
                    </span>
                  </span>
                </h3>
                <p className="text-center text-base lg:text-lg font-normal text-black pb-2">
                  3 Day Free Trial
                </p>
                <div>
                  <img src={paymentIcon} />
                </div>
                <p className="text-center text-base lg:text-lg font-normal text-black pb-2">
                  Total after 3 days: {monthly.currency}{monthly.discounted_price}{" "} / {monthly.plan_interval}
                </p>
                <p className="text-center text-base lg:text-lg font-normal text-black pb-2">
                  Total due today: {monthly.currency}{monthly.discounted_price}
                </p>
              </div>
            )}

          {yearly && !monthly &&
            (
              <div className="hidden lg:block w-2/5 flex justify-center items-center">
                <p className="text-center text-base lg:text-lg font-medium text-gray-400 pb-2">
                  Your Subscription
                </p>
                <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-3">
                  {yearly.name || "plan name"}
                </h2>
                <h3 className="text-center text-lg font-medium text-black pb-3">
                  {yearly.currency}
                  <span className="text-center text-3xl font-bold text-black pb-6">
                    {yearly.discounted_price}{" "}
                    <span className="text-center text-lg font-medium text-black">
                      / {yearly.plan_interval}
                    </span>
                  </span>
                </h3>
                <p className="text-center text-base lg:text-lg font-normal text-black pb-2">
                  3 Day Free Trial
                </p>
                <div>
                  <img src={paymentIcon} />
                </div>
                <p className="text-center text-base lg:text-lg font-normal text-black pb-2">
                  Total after 3 days: {yearly.currency}{yearly.discounted_price}{" "} / {yearly.plan_interval}
                </p>
                <p className="text-center text-base lg:text-lg font-normal text-black pb-2">
                  Total due today: {yearly.currency}{yearly.discounted_price}
                </p>
              </div>
            )}

          <div className="w-full lg:w-3/5">
            <div className="register_cont">
              <h2 className="text-center text-3xl text-[#ba9e63] font-bold mb-5">
                Make Payment
              </h2>
              <div className="stripe-error text-red-600">{errorMessage}</div>
              {stripePublishableKey &&
                customer_id &&
                subscription_id &&
                planId &&
                user_id && (
                  <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm
                      customer_id={customer_id}
                      subscription_id={subscription_id}
                      plan_id={planId}
                      user_id={user_id}
                    />
                  </Elements>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
    // </div>
  );
};

export default Payment;
