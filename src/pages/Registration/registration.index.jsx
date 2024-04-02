import React, { useRef, useEffect, useState, Suspense } from "react";
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
import UserDetails from "./userdetails";
import Plans from "./plans";
import Payment from "./payment";
import { useSelector } from "react-redux";

const Registration = () => {
  // const [showRegistration, setShowRegistration] = useState(true);
  // const [showPlan, setShowPlan] = useState(false);
  // const [showPayment, setShowPayment] = useState(false);

  const [userPlan, setUserPlan] = useState(null);
  const { otp_verified, email, user_id } = useSelector(
    (state) => state.auth?.currentUser
  );

  const [steps, setSteps] = useState({
    registration: true,
    selectPlan: false,
    payment: false,
  });

  const stepsHandler = (type) => {
    console.log('type->', type)
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
      alert('here');
    } else {
      setSteps((prev) => ({
        ...prev,
        registration: false,
        selectPlan: false,
        payment: true,
      }));
    }
  };


  const selectPlan = (planId) => {
    setUserPlan(planId);
    stepsHandler("payment");
  };
  useEffect(() => {
    console.log(steps, "stepssteps")
  }, [steps])

  return (
    <>
      {/* Registration section start here */}

      <div className="mx-6 md:mx-12 my-14">
        <div className="register_step_box">
          <ul>
            <li>
              {/* <li onClick={() => stepsHandler("registration")}> */}
              <span
                className={`${steps.registration ? "bg-[#ba9e63]" : "bg-black"
                  }`}
              >
                1
              </span>
              <p>Account Creation</p>
            </li>
            <li>
              {/* <li onClick={() => stepsHandler("selectplan")}> */}
              <span
                className={`${steps.selectPlan ? "bg-[#ba9e63]" : "bg-black"}`}
              >
                2
              </span>
              <p>Subscription</p>
            </li>
            <li>
              {/* <li onClick={() => stepsHandler("payment")}> */}
              <span
                className={`${steps.payment ? "bg-[#ba9e63]" : "bg-black"}`}
              >
                3
              </span>
              <p>Payment</p>
            </li>
          </ul>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          {steps?.registration && (
            <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-6xl mx-auto my-0">
              <UserDetails stepsHandler={stepsHandler} />
            </div>
          )}

          {steps?.selectPlan && otp_verified && (
            <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-6xl mx-auto my-0">
              <Plans selectPlan={selectPlan} stepsHandler={stepsHandler} />
            </div>
          )}

          {steps?.payment && userPlan && otp_verified && (
            <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-6xl mx-auto my-0">
              <Payment
                userPlan={userPlan}
                email={email}
                user_id={user_id}
                stepsHandler={stepsHandler}
                setSteps={setSteps}
              />
            </div>
          )}
        </Suspense>
      </div>

      {/* Registration section ends here */}
    </>
  );
};

export default Registration;
