import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/registration.css";
import { NavLink, Link } from "react-router-dom";
import {
  BsFacebook,
  BsGoogle,
  BsArrowRight,
  BsCheckLg,
  BsFillCheckCircleFill,
  AiFillCloseCircle,
} from "../../assets/icons";
import { paymentIcon, registrationImg } from "../../assets/images/images";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch, useSelector } from "react-redux";
import { subscriptionPlans } from "../../reducers/PlansSlice";
import Payment from "./payment";
import { stripePayment, stripePlanKeys } from "../../reducers/PaymentSlice";

const Plans = (props) => {
  const dispatch = useDispatch();

  // const planId = JSON.parse(localStorage.getItem('isSubscribed'))?.isSubscribed;

  const { email, user_id } = useSelector((state) => state.auth?.currentUser);
  const { currentUser } = useSelector((state) => state.auth);

  const [userId, setUserId] = useState(null);

  const plansList = useSelector((state) => state.plans?.plans);
  const [plans, setPlans] = useState([]);

  const { userPlan } = useSelector((state) => state.profile);
  const { profile } = useSelector((state) => state.profile);

  const [showPayment, setShowPayment] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: null,
    user_id: profile[0]?.id,
    plan_id: null,
  });

  useEffect(() => {
    setUserId(profile[0]?.id);
  }, [profile]);

  const [showSubscription, setShowSubscription] = useState(true);

  const {
    stripeClientSecret,
    customer_id,
    subscription_id,
    stripePublishableKey,
  } = useSelector((state) => state.payment);

  const createSubscription = (planId) => {
    setUserDetails(() => ({
      ...userDetails,
      plan_id: planId,
    }));
    dispatch(stripePlanKeys());
    dispatch(
      stripePayment({
        plan_id: planId,
        user_id: user_id,
        entity: "payment_intent",
      })
    );
    setShowPayment(true);
    setShowSubscription(false);
  };

  useEffect(() => {
    dispatch(subscriptionPlans()).then(() => {
      setUserDetails({
        email: email,
        user_id: user_id,
      });
    });
  }, []);

  // useEffect(() => {
  //   dispatch(subscriptionPlans());
  // },[]);

  useEffect(() => {
    setPlans(plansList);
  }, [plansList]);

  return (
    // <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-4xl mx-auto my-0">
    <div className="container mx-auto my-0">
      {showSubscription && (
        <div className="pb-16">
          <div
            className="container max-w-6xl mx-auto py-4 px-0"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="text-center">
              <h2 className="text-center text-2xl lg:text-3xl text-[#ba9e63] font-bold mb-2">
                OUR PRICING & PLANS
              </h2>
              <p className="text-gray-400 text-base font-medium pb-6">
                CHOOSE THE PLAN THAT’S RIGHT FOR YOU!
              </p>
            </div>


            <div
              className="plan_tab_area"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <Tabs>
                <TabList>
                  <Tab>Monthly Plan</Tab>
                  <Tab>Yearly Plan</Tab>
                </TabList>

                <TabPanel>
                  <div className="plan_list_area">
                    <div className="flex-none md:flex justify-center">
                      {plans?.monthly_plans &&
                        plans?.monthly_plans?.length > 0 &&
                        plans?.monthly_plans?.map((plan, plankey) => (
                          <div
                            key={"plan_" + plankey}
                            className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0"
                          >
                            <div className="bg-white py-0 px-0 rounded-2xl shadow-xl mt-6">
                              {plankey == 0 &&
                                <div className="silver_plan_box pt-8 pb-14">


                                  <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                                    {plan.name || "plan name"}
                                  </h2>
                                  <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                                    3 Day Free Trial
                                  </p>
                                  <h3 className="text-center text-lg font-medium text-black pb-3">
                                    {plan.currency}
                                    <span className="text-center text-3xl font-bold text-black pb-6">
                                      {plan.discounted_price}{" "}
                                      <span className="text-center text-lg font-medium text-black">
                                        / {plan.plan_interval}
                                      </span>
                                    </span>
                                  </h3>
                                </div>
                              }
                              {plankey == 1 &&
                                <div className="gold_plan_box pt-8 pb-14">
                                  <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                                    {plan.name || "plan name"}
                                  </h2>
                                  <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                                    3 Day Free Trial
                                  </p>
                                  <h3 className="text-center text-lg font-medium text-black pb-3">
                                    {plan.currency}
                                    <span className="text-center text-3xl font-bold text-black pb-6">
                                      {plan.discounted_price}{" "}
                                      <span className="text-center text-lg font-medium text-black">
                                        / {plan.plan_interval}
                                      </span>
                                    </span>
                                  </h3>
                                </div>
                              }
                              {plankey == 2 &&
                                <div className="platinum_plan_box pt-8 pb-14">
                                  <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                                    {plan.name || "plan name"}
                                  </h2>
                                  <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                                    3 Day Free Trial
                                  </p>
                                  <h3 className="text-center text-lg font-medium text-black pb-3">
                                    {plan.currency}
                                    <span className="text-center text-3xl font-bold text-black pb-6">
                                      {plan.discounted_price}{" "}
                                      <span className="text-center text-lg font-medium text-black">
                                        / {plan.plan_interval}
                                      </span>
                                    </span>
                                  </h3>
                                </div>
                              }
                              {/* <h3 className="text-center text-lg font-medium text-black pb-3 line-through">
                                {plan.currency}
                                <span className="text-center text-3xl font-bold text-black pb-6">
                                  {plan.price}{" "}
                                  <span className="text-center text-lg font-medium text-black">
                                    / {plan.plan_interval}
                                  </span>
                                </span>
                              </h3> */}
                              <div className="bg-white rounded-2xl p-6">
                                <ul>
                                  {plan.description.split('%').map((desc, ind) => (
                                    <li key={ind} className="flex items-center text-base lg:text-base font-normal mb-5">
                                      {/* {console.log('desc.split', desc.split('/> ')[0].search("AiFillCloseCircle"))} */}
                                      {desc.split('/> ')[0].search("AiFillCloseCircle") === -1 ? (
                                        <BsFillCheckCircleFill
                                          className="text-[#d0bd7b] mt-0 mr-2"
                                          size={20}
                                        />
                                      ) : (
                                        <AiFillCloseCircle
                                          className="text-[#d85c32] mt-0 mr-2"
                                          size={20} />
                                      )}
                                      {/* {`${desc.split('/> ')[0]}/>`} */}
                                      {/* <div>{`${desc.split('/> ')[0]}/>`}</div> */}
                                      {' '}
                                      {desc.split('/> ')[1]}
                                    </li>
                                  ))}
                                  {/* <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                    <BsFillCheckCircleFill
                                      className="text-[#d0bd7b] mt-0 mr-2"
                                      size={20}
                                    />
                                    {plan.description}
                                  </li> */}
                                </ul>
                                {plankey == 0 &&
                                  <div className="text-center pt-6 pb-4">
                                    {plan.id !== 1 && (
                                      <button
                                        className="bg-[#bababa] shadow-xl rounded-2xl text-sm lg:text-base font-medium text-black px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#e1e1e1]"
                                        onClick={() => {
                                          createSubscription(plan.id, user_id);
                                        }}
                                      >
                                        Subscribe Now
                                      </button>
                                    )}
                                  </div>
                                }
                                {plankey == 1 &&
                                  <div className="text-center pt-6 pb-4">
                                    {plan.id !== 1 && (
                                      <button
                                        className="bg-[#ef9b0f] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#fbc873]"
                                        onClick={() => {
                                          createSubscription(plan.id, user_id);
                                        }}
                                      >
                                        Subscribe Now
                                      </button>
                                    )}
                                  </div>
                                }
                                {plankey == 2 &&
                                  <div className="text-center pt-6 pb-4">
                                    {plan.id !== 1 && (
                                      <button
                                        className="bg-[#0091f7] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#71c2fb]"
                                        onClick={() => {
                                          createSubscription(plan.id, user_id);
                                        }}
                                      >
                                        Subscribe Now
                                      </button>
                                    )}
                                  </div>
                                }
                                {/* <p className="text-center pt-1 text-[12px] text-gray-400">
                                  *Cancel Anytime*
                                </p> */}
                              </div>
                            </div>
                          </div>
                        ))}


                    </div>
                  </div>


                </TabPanel>

                <TabPanel>
                  <div className="plan_list_area">
                    <div className="flex-none md:flex justify-center">
                      {plans?.yearly_plans &&
                        plans?.yearly_plans?.length > 0 &&
                        plans?.yearly_plans?.map((plan, plankey) => (
                          <div
                            key={"plan_" + plankey}
                            className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0"
                          >
                            <div className="bg-white py-0 px-0 rounded-2xl shadow-xl mt-6">
                              {plankey == 0 &&
                                <div className="silver_plan_box pt-8 pb-14">
                                  <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                                    {plan.name || "plan name"}
                                  </h2>
                                  <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                                    3 Day Free Trial
                                  </p>
                                  <h3 className="text-center text-lg font-medium text-black pb-3">
                                    {plan.currency}
                                    <span className="text-center text-3xl font-bold text-black pb-6">
                                      {plan.discounted_price}{" "}
                                      <span className="text-center text-lg font-medium text-black">
                                        / {plan.plan_interval}
                                      </span>
                                    </span>
                                  </h3>
                                </div>
                              }
                              {plankey == 1 &&
                                <div className="gold_plan_box pt-8 pb-14">
                                  <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                                    {plan.name || "plan name"}
                                  </h2>
                                  <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                                    3 Day Free Trial
                                  </p>
                                  <h3 className="text-center text-lg font-medium text-black pb-3">
                                    {plan.currency}
                                    <span className="text-center text-3xl font-bold text-black pb-6">
                                      {plan.discounted_price}{" "}
                                      <span className="text-center text-lg font-medium text-black">
                                        / {plan.plan_interval}
                                      </span>
                                    </span>
                                  </h3>
                                </div>
                              }
                              {plankey == 2 &&
                                <div className="platinum_plan_box pt-8 pb-14">
                                  <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                                    {plan.name || "plan name"}
                                  </h2>
                                  <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                                    3 Day Free Trial
                                  </p>
                                  <h3 className="text-center text-lg font-medium text-black pb-3">
                                    {plan.currency}
                                    <span className="text-center text-3xl font-bold text-black pb-6">
                                      {plan.discounted_price}{" "}
                                      <span className="text-center text-lg font-medium text-black">
                                        / {plan.plan_interval}
                                      </span>
                                    </span>
                                  </h3>
                                </div>
                              }
                              {/* <h3 className="text-center text-lg font-medium text-black pb-3 line-through">
                                {plan.currency}
                                <span className="text-center text-3xl font-bold text-black pb-6">
                                  {plan.price}{" "}
                                  <span className="text-center text-lg font-medium text-black">
                                    / {plan.plan_interval}
                                  </span>
                                </span>
                              </h3> */}
                              <div className="bg-white rounded-2xl p-6">
                                <ul>
                                  {plan.description.split('%').map((desc, ind) => (
                                    <li key={ind} className="flex items-center text-base lg:text-base font-normal mb-5">
                                      {/* {console.log('desc.split', desc.split('/> ')[0].search("AiFillCloseCircle"))} */}
                                      {desc.split('/> ')[0].search("AiFillCloseCircle") === -1 ? (
                                        <BsFillCheckCircleFill
                                          className="text-[#d0bd7b] mt-0 mr-2"
                                          size={20}
                                        />
                                      ) : (
                                        <AiFillCloseCircle
                                          className="text-[#d85c32] mt-0 mr-2"
                                          size={20} />
                                      )}
                                      {/* {`${desc.split('/> ')[0]}/>`} */}
                                      {/* <div>{`${desc.split('/> ')[0]}/>`}</div> */}
                                      {' '}
                                      {desc.split('/> ')[1]}
                                    </li>
                                  ))}
                                  {/* <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                    <BsFillCheckCircleFill
                                      className="text-[#d0bd7b] mt-0 mr-2"
                                      size={20}
                                    />
                                    {plan.description}
                                  </li> */}
                                </ul>
                                {plankey == 0 &&
                                  <div className="text-center pt-6 pb-4">
                                    {plan.id !== 1 && (
                                      <button
                                        className="bg-[#bababa] shadow-xl rounded-2xl text-sm lg:text-base font-medium text-black px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#e1e1e1]"
                                        onClick={() => {
                                          createSubscription(plan.id, user_id);
                                        }}
                                      >
                                        Subscribe Now
                                      </button>
                                    )}
                                  </div>
                                }
                                {plankey == 1 &&
                                  <div className="text-center pt-6 pb-4">
                                    {plan.id !== 1 && (
                                      <button
                                        className="bg-[#ef9b0f] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#fbc873]"
                                        onClick={() => {
                                          createSubscription(plan.id, user_id);
                                        }}
                                      >
                                        Subscribe Now
                                      </button>
                                    )}
                                  </div>
                                }
                                {plankey == 2 &&
                                  <div className="text-center pt-6 pb-4">
                                    {plan.id !== 1 && (
                                      <button
                                        className="bg-[#0091f7] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#71c2fb]"
                                        onClick={() => {
                                          createSubscription(plan.id, user_id);
                                        }}
                                      >
                                        Subscribe Now
                                      </button>
                                    )}
                                  </div>
                                }
                                {/* <p className="text-center pt-1 text-[12px] text-gray-400">
                                  *Cancel Anytime*
                                </p> */}
                              </div>
                            </div>
                          </div>
                        ))}


                    </div>
                  </div>


                </TabPanel>
              </Tabs>
            </div>


          </div>
        </div>
      )}
      {showPayment &&
        stripeClientSecret &&
        customer_id &&
        subscription_id &&
        stripePublishableKey && (
          <Payment
            // userPlan={userDetails.plan_id}
            email={userDetails.email}
            user_id={user_id}
            planId={userDetails.plan_id}
            stripeClientSecret={stripeClientSecret}
            stripePublishableKey={stripePublishableKey}
            customer_id={customer_id}
            subscription_id={subscription_id}
          />
        )}
    </div>
    // </div>
  );
};

export default Plans;
