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
              PLAN
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
                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                      <div className="bg-slate-100 py-6 px-5 rounded-2xl shadow-xl mt-6">
                        <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-3">
                          Silver Plan
                        </h2>
                        <p className="text-center text-base lg:text-lg font-normal text-black pb-2">
                          3 Day Free Trial
                        </p>
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
                        <h3 className="text-center text-lg font-medium text-black pb-3 line-through">
                          £
                          <span className="text-center text-3xl font-bold text-black pb-6">
                            8{" "}
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
                              Paragraph Generator
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Essay Writer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Class Assistant
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Coding Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Writing Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Language Tutor Tools
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
                          <p className="text-center pt-1 text-[12px] text-gray-400">
                            *Cancel Anytime*
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                      <div className="bg-[#c9b575] py-6 px-5 rounded-2xl shadow-xl mt-6">
                        <h2 className="text-center text-2xl lg:text-3xl font-bold text-white pb-3">
                          Gold Plan
                        </h2>
                        <p className="text-center text-base lg:text-lg font-medium text-white pb-3">
                          3 Day Free Trial
                        </p>
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
                        <h3 className="text-center text-lg font-medium text-white pb-3 line-through">
                          £
                          <span className="text-center text-3xl font-bold text-white pb-6">
                            13
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
                              All Tools from Silver plan
                            </li>
                          </ul>
                          <h3 className="text-center pb-4 font-bold">PLUS</h3>
                          <ul>
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
                              Plagiarism Checker
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
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
                          <p className="text-center pt-1 text-[12px] text-gray-400">
                            *Cancel Anytime*
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                      <div className="bg-[#e0e1e1] py-6 px-5 rounded-2xl shadow-xl mt-6">
                        <h2 className="text-center text-2xl lg:text-3xl font-bold text-[#c9b575] pb-3">
                          Platinum Plan
                        </h2>
                        <p className="text-center text-base lg:text-lg font-medium text-black pb-3">
                          3 Day Free Trial
                        </p>
                        <p className="text-center text-base lg:text-lg font-bold text-[#9da4b0] pb-3">
                          Introductory price
                        </p>
                        <h3 className="text-center text-lg font-medium text-black pb-3">
                          £
                          <span className="text-center text-3xl font-bold text-black pb-6">
                            10
                            <span className="text-center text-lg font-medium text-black">
                              / month
                            </span>
                          </span>
                        </h3>
                        <h3 className="text-center text-lg font-medium text-[#9da4b0] pb-3 line-through">
                          £
                          <span className="text-center text-3xl font-bold text-[#9da4b0] pb-6">
                            15
                            <span className="text-center text-lg font-medium text-[#9da4b0]">
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
                            <li className="flex items-start text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              All Tools from Silver and Gold plan
                            </li>
                          </ul>
                          <h3 className="text-center pb-4 font-bold">PLUS</h3>
                          <ul>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
                            </li>
                            <li className="flex items-start text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Create your own custom test with AI
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
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-[#9da4b0] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#b1b7c2]"
                              to="/"
                            >
                              Signup Now
                            </Link>
                          </div>
                          <p className="text-center pt-1 text-[12px] text-gray-400">
                            *Cancel Anytime*
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="plan_list_area">
                  <div className="flex-none md:flex justify-center">
                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                      <div className="bg-slate-100 py-6 px-5 rounded-2xl shadow-xl mt-6">
                        <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-3">
                          Silver Plan
                        </h2>
                        <p className="text-center text-base lg:text-lg font-normal text-black pb-2">
                          3 Day Free Trial
                        </p>
                        <p className="text-center text-base lg:text-lg font-medium text-gray-400 pb-2">
                          Introductory price
                        </p>
                        <h3 className="text-center text-lg font-medium text-black pb-3">
                          £
                          <span className="text-center text-3xl font-bold text-black pb-6">
                            3{" "}
                            <span className="text-center text-lg font-medium text-black">
                              / month
                            </span>
                          </span>
                        </h3>
                        <h3 className="text-center text-lg font-medium text-black pb-3 line-through">
                          £
                          <span className="text-center text-3xl font-bold text-black pb-6">
                            5{" "}
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
                              Paragraph Generator
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Essay Writer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Class Assistant
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Coding Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Writing Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Language Tutor Tools
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
                          <p className="text-center pt-1 text-[12px] text-gray-400">
                            *Cancel Anytime*
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                      <div className="bg-[#c9b575] py-6 px-5 rounded-2xl shadow-xl mt-6">
                        <h2 className="text-center text-2xl lg:text-3xl font-bold text-white pb-3">
                          Gold Plan
                        </h2>
                        <p className="text-center text-base lg:text-lg font-medium text-white pb-3">
                          3 Day Free Trial
                        </p>
                        <p className="text-center text-base lg:text-lg font-bold text-white pb-3">
                          Introductory price
                        </p>
                        <h3 className="text-center text-lg font-medium text-white pb-3">
                          £
                          <span className="text-center text-3xl font-bold text-white pb-6">
                            6
                            <span className="text-center text-lg font-medium text-white">
                              / month
                            </span>
                          </span>
                        </h3>
                        <h3 className="text-center text-lg font-medium text-white pb-3 line-through">
                          £
                          <span className="text-center text-3xl font-bold text-white pb-6">
                            9
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
                              All Tools from Silver plan
                            </li>
                          </ul>
                          <h3 className="text-center pb-4 font-bold">PLUS</h3>
                          <ul>
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
                              Plagiarism Checker
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
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
                          <p className="text-center pt-1 text-[12px] text-gray-400">
                            *Cancel Anytime*
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                      <div className="bg-[#e0e1e1] py-6 px-5 rounded-2xl shadow-xl mt-6">
                        <h2 className="text-center text-2xl lg:text-3xl font-bold text-[#c9b575] pb-3">
                          Platinum Plan
                        </h2>
                        <p className="text-center text-base lg:text-lg font-medium text-black pb-3">
                          3 Day Free Trial
                        </p>
                        <p className="text-center text-base lg:text-lg font-bold text-[#9da4b0] pb-3">
                          Introductory price
                        </p>
                        <h3 className="text-center text-lg font-medium text-black pb-3">
                          £
                          <span className="text-center text-3xl font-bold text-black pb-6">
                            8
                            <span className="text-center text-lg font-medium text-black">
                              / month
                            </span>
                          </span>
                        </h3>
                        <h3 className="text-center text-lg font-medium text-[#9da4b0] pb-3 line-through">
                          £
                          <span className="text-center text-3xl font-bold text-[#9da4b0] pb-6">
                            12
                            <span className="text-center text-lg font-medium text-[#9da4b0]">
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
                            <li className="flex items-start text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              All Tools from Silver and Gold plan
                            </li>
                          </ul>
                          <h3 className="text-center pb-4 font-bold">PLUS</h3>
                          <ul>
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
                              Image Describer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
                            </li>
                            <li className="flex items-start text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#d0bd7b] mt-0 mr-2"
                                size={20}
                              />
                              Create your own custom test with AI
                            </li>
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-[#9da4b0] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#b1b7c2]"
                              to="/"
                            >
                              Signup Now
                            </Link>
                          </div>
                          <p className="text-center pt-1 text-[12px] text-gray-400">
                            *Cancel Anytime*
                          </p>
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
