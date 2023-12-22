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
              Choose your plan
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
                <Tab>Your plans</Tab>
              </TabList>

              <TabPanel>
                <div className="plan_list_area">
                  <div className="flex-none md:flex justify-center">
                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                      <div className="bg-slate-100 py-6 px-5 rounded-2xl shadow-xl mt-6">
                        <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-3">
                          Silver Plan
                        </h2>
                        <p className="text-center text-base lg:text-lg font-medium text-gray-400 pb-2">
                          Introductory price
                        </p>
                        <h3 className="text-center text-lg font-medium text-black pb-3">
                          £
                          <span className="text-center text-3xl font-bold text-black pb-6">
                            6{" "}
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
                              All AI Tools
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
                              Maths & Science
                            </li>
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-slate-100 shadow-xl rounded-2xl text-sm lg:text-base font-medium text-[#ae9258] px-6 lg:px-10 py-3 lg:py-4 hover:bg-white"
                              to="/"
                            >
                              Signup Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                      <div className="bg-[#c9b575] py-6 px-5 rounded-2xl shadow-xl mt-6">
                        <h2 className="text-center text-2xl lg:text-3xl font-bold text-white pb-3">
                          Gold Plan
                        </h2>
                        <p className="text-center text-base lg:text-lg font-bold text-white pb-3">
                          Introductory price
                        </p>
                        <h3 className="text-center text-lg font-medium text-white pb-3">
                          £
                          <span className="text-center text-3xl font-bold text-white pb-6">
                            8
                            <span className="text-center text-lg font-medium text-white">
                              / month
                            </span>
                          </span>
                        </h3>
                        <h3 className="text-center text-lg font-medium text-white pb-3">
                          £
                          <span className="text-center text-3xl font-bold text-white pb-6">
                            10
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
                              All AI Tools
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
                              All Tools from basic plan
                            </li>
                          </ul>
                          <h3 className="text-center pb-4 font-bold">PLUS</h3>
                          <ul>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Past Papers
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Maths and Science
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Create your own test with AI
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              AI Detector
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Image describer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Create AI images
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              AI detector
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Plagiarism checker
                            </li>
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-[#c2aa6d] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#d0bd7b]"
                              to="/"
                            >
                              Signup Now
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
