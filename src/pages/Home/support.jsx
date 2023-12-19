import React, { useRef, useEffect, useState, Suspense } from "react";
import {
  rating01,
  rating02,
  activityIcon,
  pieChartIcon,
  commandIcon,
} from "../../assets/images/images";
const Support = () => {
  return (
    <div>
      {/* this is for support section start here */}
      <div className="support_section pb-0 lg:pb-8 pt-8">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div className="flex-none lg:flex">
            <div className="w-full lg:w-7/12 mb-10 lg:mb-0 text-center lg:text-left">
              <div
                className="support_left pr-0 lg:pr-16"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h2 className="text-2xl lg:text-4xl font-semibold text-black pb-2 lg:pb-4 mb-2">
                  How we support our pratner all over the world
                </h2>
                <p className="text-base text-gray-400 font-medium pb-8 lg:pb-12">
                  SaaS become a common delivery model for many business
                  application, including office software, messaging software,
                  payroll processing software, DBMS software, management
                  software
                </p>

                <div>
                  <ul className="flex md:justify-center lg:justify-normal">
                    <li className="mr-12">
                      <img src={rating01} className="mb-4" width="" height="" />
                      <p className="text-base text-black font-medium pb-4">
                        <strong>4.9</strong> / 5 rating
                      </p>
                      <span className="text-base text-gray-400 font-medium pb-12">
                        databricks
                      </span>
                    </li>
                    <li>
                      <img src={rating02} className="mb-4" width="" height="" />
                      <p className="text-base text-black font-medium pb-4">
                        <strong>4.8</strong> / 5 rating
                      </p>
                      <span className="text-base text-gray-400 font-medium pb-12">
                        Chainalysis
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div
                className="pl-0 lg:pl-8"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <ul>
                  <li className="flex">
                    <div className="w-1/12">
                      <img src={activityIcon} width="" height="" />
                    </div>
                    <div className="support_right_cont w-11/12 pl-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-black pb-2 lg:pb-4">
                        Publishing
                      </h3>
                      <p className="text-base lg:text-lg text-gray-400 font-medium pb-8">
                        Plan, collaborate, and publishing your contetn that
                        drivees meaningful engagement and growth for your barnd
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-1/12">
                      <img src={pieChartIcon} width="" height="" />
                    </div>
                    <div className="support_right_cont w-11/12 pl-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-black pb-2 lg:pb-4">
                        Analytics
                      </h3>
                      <p className="text-base lg:text-lg text-gray-400 font-medium pb-8">
                        Analyze your performance and create goegeous report
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-1/12">
                      <img src={commandIcon} width="" height="" />
                    </div>
                    <div className="support_right_cont w-11/12 pl-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-black pb-2 lg:pb-4">
                        Engagement
                      </h3>
                      <p className="text-base lg:text-lg text-gray-400 font-medium pb-8">
                        Quiuckly navigate you anda engage with your adience
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* this is for support section ends here */}
    </div>
  );
};

export default Support;
