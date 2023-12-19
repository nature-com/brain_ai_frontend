import React, { useRef, useEffect, useState, Suspense } from "react";
import { benefitImg } from "../../assets/images/images";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Benefit = () => {
  return (
    <div>
      {/* Benefit section ends here */}
      <div className="benefit_section my-8 lg:my-16">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div className="flex-none md:flex">
            <div className="w-full md:w-6/12">
              <div
                className="benefit_section_cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h2 className="text-2xl lg:text-4xl text-center md:text-left font-semibold text-black pb-4 pt-6 mb-6">
                  What Benifit Will <br /> You Get
                </h2>
                <ul>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Free Consulting With Experet Saving Money
                  </li>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Online Banking
                  </li>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Investment Report Every Month
                  </li>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Saving Money For The Future
                  </li>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Online Transection
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <div
                className="benefit_section_img"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <img src={benefitImg} width="" height="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefit section ends here */}
    </div>
  );
};

export default Benefit;
