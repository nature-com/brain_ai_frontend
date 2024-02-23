import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { subscriptionPlans } from "../../reducers/PlansSlice";
const Plan = () => {
  const dispatch = useDispatch();
  const plansList = useSelector((state) => state.plans?.plans);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    dispatch(subscriptionPlans());
  }, []);

  useEffect(() => {
    setPlans(plansList);
  }, [plansList]);

  const location = useLocation();
  const isBackToDashboard = (endPoint) => {
    return location.pathname === endPoint;
  };

  return (
    <div>
      {/* Choose your plan section start here */}
      <div className="choose_your_plan_section pb-16">
        <div className="container max-w-6xl mx-auto py-0 lg:py-4 px-0">
          {isBackToDashboard("/payment-plan-inside") && (
            <div className="flex justify-end">
              <Link
                className="text-[14px] font-semibold text-black mr-0 hover:text-[#ba9e63] underline"
                to="/dashboard"
              >
                Back to Dashboard
              </Link>
            </div>
          )}
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="text-2xl lg:text-4xl font-semibold text-black pb-4 pt-6 mb-0 lg:mb-6">
              OUR PRICING & PLANS
            </h2>
            <p className="text-gray-400 text-base lg:text-lg font-medium pb-10">
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
                            {plankey == 0 && (
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
                            )}
                            {plankey == 1 && (
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
                            )}
                            {plankey == 2 && (
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
                            )}
                            <div className="bg-white rounded-2xl p-6">
                              <ul>
                                {plan.description
                                  .split("%")
                                  .map((desc, ind) => (
                                    <li
                                      key={ind}
                                      className="flex items-center text-base lg:text-base font-normal mb-5"
                                    >
                                      {desc
                                        .split("/> ")[0]
                                        .search("AiFillCloseCircle") === -1 ? (
                                        <BsFillCheckCircleFill
                                          className="text-[#d0bd7b] mt-0 mr-2"
                                          size={20}
                                        />
                                      ) : (
                                        <AiFillCloseCircle
                                          className="text-[#d85c32] mt-0 mr-2"
                                          size={20}
                                        />
                                      )}{" "}
                                      {desc.split("/> ")[1]}
                                    </li>
                                  ))}
                              </ul>
                              {plankey == 0 && (
                                <div className="text-center pt-6 pb-4">
                                  <Link
                                    className="bg-[#bababa] shadow-xl rounded-2xl text-sm lg:text-base font-medium text-black px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#e1e1e1]"
                                    to="/registration"
                                  >
                                    Signup Now
                                  </Link>
                                </div>
                              )}
                              {plankey == 1 && (
                                <div className="text-center pt-6 pb-4">
                                  <Link
                                    className="bg-[#ef9b0f] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#fbc873]"
                                    to="/registration"
                                  >
                                    Signup Now
                                  </Link>
                                </div>
                              )}
                              {plankey == 2 && (
                                <div className="text-center pt-6 pb-4">
                                  <Link
                                    className="bg-[#0091f7] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#71c2fb]"
                                    to="/registration"
                                  >
                                    Signup Now
                                  </Link>
                                </div>
                              )}
                              <p className="text-center pt-1 text-[12px] text-gray-400">
                                *Cancel Anytime*
                              </p>
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
                            {plankey == 0 && (
                              <div className="silver_plan_box pt-8 pb-14">
                                <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                                  {plan.name || "plan name"}
                                </h2>
                                <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                                  3 Day Free Trial
                                </p>
                                <p className="text-center text-base lg:text-base font-medium text-black pb-0">
                                  {plan.currency}
                                  <span className="text-center text-xl font-bold text-black pb-6">
                                    {plan.annual_price}{" "}
                                    <span className="text-center text-lg font-medium text-black">
                                      {plan.annual_interval}
                                    </span>
                                  </span>
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
                            )}
                            {plankey == 1 && (
                              <div className="gold_plan_box pt-8 pb-14">
                                <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                                  {plan.name || "plan name"}
                                </h2>
                                <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                                  3 Day Free Trial
                                </p>
                                <p className="text-center text-base lg:text-base font-medium text-black pb-0">
                                  {plan.currency}
                                  <span className="text-center text-xl font-bold text-black pb-6">
                                    {plan.annual_price}{" "}
                                    <span className="text-center text-lg font-medium text-black">
                                      {plan.annual_interval}
                                    </span>
                                  </span>
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
                            )}
                            {plankey == 2 && (
                              <div className="platinum_plan_box pt-8 pb-14">
                                <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                                  {plan.name || "plan name"}
                                </h2>
                                <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                                  3 Day Free Trial
                                </p>
                                <p className="text-center text-base lg:text-base font-medium text-black pb-0">
                                  {plan.currency}
                                  <span className="text-center text-xl font-bold text-black pb-6">
                                    {plan.annual_price}{" "}
                                    <span className="text-center text-lg font-medium text-black">
                                      {plan.annual_interval}
                                    </span>
                                  </span>
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
                            )}
                            <div className="bg-white rounded-2xl p-6">
                              <ul>
                                {plan.description
                                  .split("%")
                                  .map((desc, ind) => (
                                    <li
                                      key={ind}
                                      className="flex items-center text-base lg:text-base font-normal mb-5"
                                    >
                                      {desc
                                        .split("/> ")[0]
                                        .search("AiFillCloseCircle") === -1 ? (
                                        <BsFillCheckCircleFill
                                          className="text-[#d0bd7b] mt-0 mr-2"
                                          size={20}
                                        />
                                      ) : (
                                        <AiFillCloseCircle
                                          className="text-[#d85c32] mt-0 mr-2"
                                          size={20}
                                        />
                                      )}{" "}
                                      {desc.split("/> ")[1]}
                                    </li>
                                  ))}
                              </ul>
                              {plankey == 0 && (
                                <div className="text-center pt-6 pb-4">
                                  <Link
                                    className="bg-[#bababa] shadow-xl rounded-2xl text-sm lg:text-base font-medium text-black px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#e1e1e1]"
                                    to="/registration"
                                  >
                                    Signup Now
                                  </Link>
                                </div>
                              )}
                              {plankey == 1 && (
                                <div className="text-center pt-6 pb-4">
                                  <Link
                                    className="bg-[#ef9b0f] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#fbc873]"
                                    to="/registration"
                                  >
                                    Signup Now
                                  </Link>
                                </div>
                              )}
                              {plankey == 2 && (
                                <div className="text-center pt-6 pb-4">
                                  <Link
                                    className="bg-[#0091f7] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#71c2fb]"
                                    to="/registration"
                                  >
                                    Signup Now
                                  </Link>
                                </div>
                              )}
                              <p className="text-center pt-1 text-[12px] text-gray-400">
                                *Cancel Anytime*
                              </p>
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
      {/* Choose your plan section ends here */}
    </div>
  );
};

export default Plan;
