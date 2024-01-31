import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
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
                    <div className="w-full md:w-5/12 lg:w-4/12 mx-0 md:mx-2 mb-4 lg:mb-0">
                      <div className="bg-white py-0 px-0 rounded-2xl shadow-xl mt-6">
                        <div className="silver_plan_box pt-8 pb-14">
                          <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                            Silver Plan
                          </h2>
                          <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                            3 Day Free Trial
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
                        </div>
                        <div className="bg-white rounded-2xl p-6">
                          <ul>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              All Basic Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Unlimited AI Outputs
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Paragraph Generator
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Essay Writer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Class Assistant
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Coding Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Writing Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Language Tutor Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Maths and Science
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Plagiarism Checker
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Create custom Past Paper Test
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              AI Detector
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Image Describer
                            </li>
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-[#bababa] shadow-xl rounded-2xl text-sm lg:text-base font-medium text-black px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#e1e1e1]"
                              to="/registration"
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
                      <div className="bg-white py-0 px-0 rounded-2xl shadow-xl mt-6">
                        <div className="gold_plan_box pt-8 pb-14">
                          <h2 className="text-center text-2xl lg:text-3xl font-bold text-white pb-2">
                            Gold Plan
                          </h2>
                          <p className="text-center text-base lg:text-lg font-medium text-white pb-1">
                            3 Day Free Trial
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
                        </div>
                        <div className="bg-white rounded-2xl p-6">
                          <ul>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              All Silver Plan Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Unlimited AI Outputs
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Paragraph Generator
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Essay Writer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Class Assistant
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Coding Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Writing Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Language Tutor Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Maths and Science
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Plagiarism Checker
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Create custom Past Paper Test
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              AI Detector
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Image Describer
                            </li>
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-[#ef9b0f] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#fbc873]"
                              to="/registration"
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
                      <div className="bg-white py-0 px-0 rounded-2xl shadow-xl mt-6">
                        <div className="platinum_plan_box pt-8 pb-14">
                          <h2 className="text-center text-2xl lg:text-3xl font-bold text-white pb-2">
                            Platinum Plan
                          </h2>
                          <p className="text-center text-base lg:text-lg font-medium text-white pb-1">
                            3 Day Free Trial
                          </p>
                          <h3 className="text-center text-lg font-medium text-white pb-3">
                            £
                            <span className="text-center text-3xl font-bold text-white pb-6">
                              10
                              <span className="text-center text-lg font-medium text-white">
                                / month
                              </span>
                            </span>
                          </h3>
                        </div>
                        <div className="bg-white rounded-2xl p-6">
                          <ul>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              All Silver and Gold Plan Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Unlimited AI Outputs
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Paragraph Generator
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Essay Writer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Class Assistant
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Coding Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Writing Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Language Tutor Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Maths and Science
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Plagiarism Checker
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Create custom Past Paper Test
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              AI Detector
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Image Describer
                            </li>
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-[#0091f7] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#71c2fb]"
                              to="/registration"
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
                      <div className="bg-white py-0 px-0 rounded-2xl shadow-xl mt-6">
                        <div className="silver_plan_box pt-8 pb-14">
                          <h2 className="text-center text-2xl lg:text-3xl font-bold text-black pb-2">
                            Silver Plan
                          </h2>
                          <p className="text-center text-base lg:text-lg font-normal text-black pb-1">
                            3 Day Free Trial
                          </p>
                          <h3 className="text-center text-lg font-medium text-black pb-3">
                            £
                            <span className="text-center text-3xl font-bold text-black pb-6">
                              4
                              <span className="text-center text-lg font-medium text-black">
                                / month
                              </span>
                            </span>
                          </h3>
                        </div>
                        <div className="bg-white rounded-2xl p-6">
                          <ul>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              All Basic Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Unlimited AI Outputs
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Paragraph Generator
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Essay Writer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Class Assistant
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Coding Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Writing Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Language Tutor Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Maths and Science
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Plagiarism Checker
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Create custom Past Paper Test
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              AI Detector
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Image Describer
                            </li>
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-[#bababa] shadow-xl rounded-2xl text-sm lg:text-base font-medium text-black px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#e1e1e1]"
                              to="/registration"
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
                      <div className="bg-white py-0 px-0 rounded-2xl shadow-xl mt-6">
                        <div className="gold_plan_box pt-8 pb-14">
                          <h2 className="text-center text-2xl lg:text-3xl font-bold text-white pb-2">
                            Gold Plan
                          </h2>
                          <p className="text-center text-base lg:text-lg font-medium text-white pb-1">
                            3 Day Free Trial
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
                        </div>
                        <div className="bg-white rounded-2xl p-6">
                          <ul>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              All Silver Plan Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Unlimited AI Outputs
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Paragraph Generator
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Essay Writer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Class Assistant
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Coding Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Writing Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Language Tutor Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Maths and Science
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Plagiarism Checker
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Create custom Past Paper Test
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              AI Detector
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <AiFillCloseCircle
                                className="text-[#d85c32] mt-0 mr-2"
                                size={20}
                              />
                              Image Describer
                            </li>
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-[#ef9b0f] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#fbc873]"
                              to="/registration"
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
                      <div className="bg-white py-0 px-0 rounded-2xl shadow-xl mt-6">
                        <div className="platinum_plan_box pt-8 pb-14">
                          <h2 className="text-center text-2xl lg:text-3xl font-bold text-white pb-2">
                            Platinum Plan
                          </h2>
                          <p className="text-center text-base lg:text-lg font-medium text-white pb-1">
                            3 Day Free Trial
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
                        </div>
                        <div className="bg-white rounded-2xl p-6">
                          <ul>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              All Silver and Gold Plan Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Unlimited AI Outputs
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Paragraph Generator
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Essay Writer
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Class Assistant
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Coding Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Writing Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Language Tutor Tools
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Maths and Science
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Plagiarism Checker
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Speech To Text
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Create custom Past Paper Test
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              AI Detector
                            </li>
                            <li className="flex items-center text-base lg:text-base font-normal mb-5">
                              <BsFillCheckCircleFill
                                className="text-[#02c36f] mt-0 mr-2"
                                size={20}
                              />
                              Image Describer
                            </li>
                          </ul>
                          <div className="text-center pt-6 pb-4">
                            <Link
                              className="bg-[#0091f7] rounded-2xl text-sm lg:text-base font-medium text-white px-6 lg:px-10 py-3 lg:py-3 hover:bg-[#71c2fb]"
                              to="/registration"
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
