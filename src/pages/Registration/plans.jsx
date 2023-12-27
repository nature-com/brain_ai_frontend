import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/registration.css";
import { NavLink, Link } from "react-router-dom";
import {
  BsFacebook,
  BsGoogle,
  BsArrowRight,
  BsCheckLg,
  BsFillCheckCircleFill,
} from "../../assets/icons";
import { paymentIcon, registrationImg } from "../../assets/images/images";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch, useSelector } from "react-redux";
import { subscriptionPlans } from "../../reducers/PlansSlice";
import Payment from "./payment";

const Plans = (props) => {
  const dispatch = useDispatch();

  const planId = JSON.parse(localStorage.getItem('isSubscribed'))?.isSubscribed;

  const { email, user_id } = useSelector((state) => state.auth?.currentUser);
  const { currentUser } = useSelector((state) => state.auth);

  const [userId, setUserId] = useState(null);

  const plansList = useSelector((state) => state.plans?.plans);
  const [plans,setPlans] = useState([]);

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

  const createSubscription = (planId, user_id) => {
    setShowPayment(true);
    setShowSubscription(false);
    console.log('sanchita->', planId);
    console.log('sanchita->', user_id);
    setUserDetails(() => ({
      ...userDetails,
      plan_id: planId,
    }));
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

  useEffect(()=>{
    setPlans(plansList);
  },[plansList]);

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
                      Choose Plan That’s Right For You
                    </h2>
                    <p className="text-gray-400 text-base font-medium pb-6">
                      Choose plan that works best for you, feel free to contact
                      us
                    </p>
                  </div>
              {plans && plans.length && 
                plans.map((plan,plankey) => (
                  <div className="plan_tab_area" key={'plan_'+plankey}>
                    <Tabs>
                      <TabList>
                        <Tab>{plan.name || 'plan name'}</Tab>
                      </TabList>
                      <TabPanel>
                        <div className="plan_list_area">
                          <div className="flex-none md:flex justify-center">
                            <div className="w-full md:w-6/12 lg:w-5/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                              <div className="bg-slate-100 py-6 px-5 rounded-2xl shadow-xl mt-6">
                                <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-3">
                                {plan.name || 'plan name'}
                                </h2>
                                <p className="text-center text-base lg:text-lg font-medium text-gray-400 pb-2">
                                  3 DAY FREE TRILE
                                </p>
                                <h3 className="text-center text-lg font-medium text-black pb-3">
                                {plan.currency}
                                  <span className="text-center text-3xl font-bold text-black pb-6">
                                  {plan.price}{" "}
                                    <span className="text-center text-lg font-medium text-black">
                                      / {plan.plan_interval}
                                    </span>
                                  </span>
                                </h3>
                                <div className="bg-white rounded-2xl p-6">
                                  <ul>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Classes helper
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Writing tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Math & science tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Coding tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Citation tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Conversational tutor
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Unlimited AI outputs
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Learning tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Academic sources
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Step-by-step solutions
                                    </li>
                                  </ul>
                                  <div className="text-center pt-6 pb-4">
                                    <button
                                      className="bg-slate-100 shadow-xl rounded-2xl text-sm lg:text-base font-medium text-[#ae9258] px-6 lg:px-10 py-3 lg:py-4 hover:bg-white"
                                      onClick={() => {
                                        localStorage.setItem('planId', plan.id);
                                        createSubscription(plan.id, user_id);
                                      }}
                                    >
                                      Subscribe Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <div className="w-full md:w-6/12 lg:w-5/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                              <div className="bg-[#c9b575] py-6 px-5 rounded-2xl shadow-xl mt-6">
                                <h2 className="text-center text-2xl lg:text-3xl font-bold text-white pb-3">
                                  Pro Plan
                                </h2>
                                <p className="text-center text-base lg:text-lg font-bold text-white pb-3">
                                  3 DAY FREE TRILE
                                </p>
                                <h3 className="text-center text-lg font-medium text-white pb-3">
                                  £
                                  <span className="text-center text-3xl font-bold text-white pb-6">
                                    15
                                    <span className="text-center text-lg font-medium text-white">
                                      / month
                                    </span>
                                  </span>
                                </h3>
                                <div className="bg-white rounded-2xl p-6">
                                  <ul>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      AI Detection Tool
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Priority Support
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Discord Community Role
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Our Latest Beta Tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Pro Newsletter
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      + All Base Plan
                                    </li>
                                  </ul>
                                  <div className="text-center pt-6 pb-4">
                                    <Link
                                      className="bg-[#c2aa6d] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#d0bd7b]"
                                      to="/"
                                    >
                                      Subscribe Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </TabPanel>
                      {/* <TabPanel>
                        <div className="plan_list_area">
                          <div className="flex-none md:flex justify-center">
                            <div className="w-full md:w-6/12 lg:w-5/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                              <div className="bg-slate-100 py-6 px-5 rounded-2xl shadow-xl mt-6">
                                <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-3">
                                  Base Plan
                                </h2>
                                <p className="text-center text-base lg:text-lg font-medium text-gray-400 pb-2">
                                  3 DAY FREE TRILE
                                </p>
                                <h3 className="text-center text-lg font-medium text-black pb-3">
                                  £
                                  <span className="text-center text-3xl font-bold text-black pb-6">
                                    10{" "}
                                    <span className="text-center text-lg font-medium text-black">
                                      / month
                                    </span>
                                  </span>
                                </h3>
                                <div className="bg-white rounded-2xl p-6">
                                  <ul>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Classes helper
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Writing tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Math & science tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Coding tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Citation tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Conversational tutor
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Unlimited AI outputs
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Learning tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Academic sources
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Step-by-step solutions
                                    </li>
                                  </ul>
                                  <div className="text-center pt-6 pb-4">
                                    <Link
                                      className="bg-slate-100 shadow-xl rounded-2xl text-sm lg:text-base font-medium text-[#ae9258] px-6 lg:px-10 py-3 lg:py-4 hover:bg-white"
                                      to="/"
                                    >
                                      Subscribe Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="w-full md:w-6/12 lg:w-5/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                              <div className="bg-[#c9b575] py-6 px-5 rounded-2xl shadow-xl mt-6">
                                <h2 className="text-center text-2xl lg:text-3xl font-bold text-white pb-3">
                                  Pro Plan
                                </h2>
                                <p className="text-center text-base lg:text-lg font-bold text-white pb-3">
                                  3 DAY FREE TRILE
                                </p>
                                <h3 className="text-center text-lg font-medium text-white pb-3">
                                  £
                                  <span className="text-center text-3xl font-bold text-white pb-6">
                                    15
                                    <span className="text-center text-lg font-medium text-white">
                                      / month
                                    </span>
                                  </span>
                                </h3>
                                <div className="bg-white rounded-2xl p-6">
                                  <ul>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      AI Detection Tool
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Priority Support
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Discord Community Role
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Our Latest Beta Tools
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      Pro Newsletter
                                    </li>
                                    <li className="flex items-center text-base lg:text-base font-normal mb-5">
                                      <BsFillCheckCircleFill
                                        className="text-[#d0bd7b] mt-0 mr-2"
                                        size={20}
                                      />
                                      + All Base Plan
                                    </li>
                                  </ul>
                                  <div className="text-center pt-6 pb-4">
                                    <Link
                                      className="bg-[#c2aa6d] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#d0bd7b]"
                                      to="/"
                                    >
                                      Subscribe Now
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel> */}
                    </Tabs>
                  </div>
                  ))}
                </div>
              </div>
              )}
              {showPayment && (
          <Payment
            // userPlan={userDetails.plan_id}
            email={userDetails.email}
            user_id={user_id}
          />
      )}
            </div>
        // </div>
  );
};

export default Plans;
