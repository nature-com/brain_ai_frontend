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
const Registration = () => {
  const [showRegistration, setShowRegistration] = useState(true);
  const [showPlan, setShowPlan] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const [steps, setSteps] = useState({
    registration: true,
    selectPlan: false,
    payment: false,
  });

  const stepsHandler = (type) => {
    if (type == "registration") {
      setSteps((prev) => ({
        ...prev,
        registration: true,
        selectPlan: false,
        payment: false,
      }));
    } else if (type == "selectplan") {
      setSteps((prev) => ({
        ...prev,
        registration: false,
        selectPlan: true,
        payment: false,
      }));
    } else {
      setSteps((prev) => ({
        ...prev,
        registration: false,
        selectPlan: false,
        payment: true,
      }));
    }
  };
  return (
    <>
      {/* Registration section start here */}

      <div className="mx-6 md:mx-12 my-14">
        <div className="register_step_box">
          <ul>
            <li onClick={() => stepsHandler("registration")}>
              <span
                className={`${
                  steps.registration ? "bg-[#ba9e63]" : "bg-black"
                }`}
              >
                1
              </span>
              <p>Account Creation</p>
            </li>
            <li onClick={() => stepsHandler("selectplan")}>
              <span
                className={`${steps.selectPlan ? "bg-[#ba9e63]" : "bg-black"}`}
              >
                2
              </span>
              <p>Subscription</p>
            </li>
            <li onClick={() => stepsHandler("payment")}>
              <span
                className={`${steps.payment ? "bg-[#ba9e63]" : "bg-black"}`}
              >
                3
              </span>
              <p>Payment</p>
            </li>
          </ul>
        </div>

        {steps.registration && (
          <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-4xl mx-auto my-0">
            <div
              className="container mx-auto my-0"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="flex justify-center items-center">
                <div className="hidden lg:block w-2/5 flex justify-center items-center">
                  <div>
                    <img src={registrationImg} />
                  </div>
                </div>
                <div className="w-full lg:w-3/5">
                  <div>
                    <h2 className="text-center text-2xl lg:text-3xl text-[#ba9e63] font-bold mb-5">
                      Create a new account
                    </h2>
                    <form>
                      <div>
                        <input
                          type="text"
                          className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                          placeholder="Last Name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                          placeholder="Email"
                        />
                      </div>
                      <div className="flex items-center justify-center bg-white rounded-full h-12 border border-slate-400 border-solid w-full mb-3">
                        <span className="text-base p-3.5 h-12">+91</span>
                        <input
                          type="tel"
                          className="bg-transparent text-base pr-5 h-12 border-0 w-full"
                          placeholder="Phone"
                        />
                      </div>
                      <button
                        type="submit"
                        className="rounded-full text-sm mb-0 uppercase h-12 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                        onClick={() => stepsHandler("selectplan")}
                      >
                        Submit
                      </button>
                    </form>
                    <p className="text-center my-4">OR</p>
                    <div className="mb-3">
                      <Link
                        className="flex justify-center items-center bg-red-500 hover:bg-red-800 rounded-full text-base h-12 border border-red-800 border-solid w-full"
                        to="/"
                      >
                        <span className="pe-3 text-white">
                          Sign in with Google
                        </span>
                        <BsGoogle className="text-white" size={22} />
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link
                        className="flex justify-center items-center bg-blue-800 hover:bg-blue-700 rounded-full text-base h-12 border border-blue-800 border-solid w-full"
                        to="/"
                      >
                        <span className="pe-3 text-blue-300">
                          Sign in with Facebook
                        </span>
                        <BsFacebook className="text-blue-300" size={25} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {steps.selectPlan && (
          <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-4xl mx-auto my-0">
            <div className="container mx-auto my-0">
              {/* Choose your plan section start here */}
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

                  <div className="plan_tab_area">
                    <Tabs>
                      <TabList>
                        <Tab>Monthly Plan</Tab>
                        <Tab>Yearly Plan</Tab>
                      </TabList>

                      <TabPanel>
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
                      </TabPanel>
                      <TabPanel>
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
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
              </div>
              {/* Choose your plan section ends here */}
            </div>
          </div>
        )}

        {steps.payment && (
          <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-4xl mx-auto my-0">
            <div
              className="container mx-auto my-0"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="flex">
                <div className="hidden lg:block w-2/5 flex justify-center items-center">
                  <div>
                    {/* <img className="" src={paymentIcon} /> */}
                    <img src={paymentIcon} />
                  </div>
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="register_cont">
                    <h2 className="text-center text-3xl text-[#ba9e63] font-bold mb-5">
                      Please Payment
                    </h2>
                    <form>
                      <div>
                        <input
                          type="text"
                          className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                          placeholder="Card Holder Name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                          placeholder="Card Number"
                        />
                      </div>
                      <div className="flex">
                        <div className="me-4">
                          <input
                            type="text"
                            className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                            placeholder="Expire Date"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="rounded-full text-sm mb-0 uppercase h-12 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                      >
                        Submit Payment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Registration section ends here */}
    </>
  );
};

export default Registration;
