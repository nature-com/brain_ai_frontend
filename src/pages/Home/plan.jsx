import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Plan = () => {
  return (
    <div>
      {/* Choose your plan section start here */}
      <div className="choose_your_plan_section pb-16">
        <div className="container max-w-6xl mx-auto py-0 lg:py-4 px-0">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="text-2xl lg:text-4xl font-semibold text-black pb-4 pt-6 mb-0 lg:mb-6">
              Choose Plan <br /> That’s Right For You
            </h2>
            <p className="text-gray-400 text-base lg:text-lg font-medium pb-10">
              Choose plan that works best for you, feel free to contact us
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
                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
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

                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
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
                  <div className="flex-none lg:flex justify-center">
                    <div className="w-full lg:w-4/12 mx-0 lg:mx-2 mb-4 lg:mb-0">
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

                    <div className="w-full lg:w-4/12 mx-0 lg:mx-2 mb-4 lg:mb-0">
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
  );
};

export default Plan;
