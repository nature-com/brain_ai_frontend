import React, { useRef, useEffect, useState, Suspense } from "react";
import { featured01, featured02, featured03 } from "../../assets/images/images";
const Featured = () => {
  return (
    <div>
      {/* Featured section start here */}
      <div>
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div
            className="flex-none lg:flex justify-between items-center text-center lg:text-left"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="text-2xl lg:text-4xl font-semibold text-black pb-4 pt-0 mb-0">
              FEATURES READY FOR SCHOOL
            </h2>
            <div>
              <a
                className="bg-[#d0bd7b] text-sm lg:text-lg font-medium text-white rounded-full px-4 lg:px-8 py-3 lg:py-4 hover:bg-[#d0bd7b]"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="mt-8 mb-0 lg:mb-12">
            <div className="flex-none lg:flex">
              <div className="w-full lg:w-4/12 mb-6 lg:mb-0">
                <div
                  className="bg-[#d0bd7b] text-center p-11 rounded-2xl mr-0 lg:mr-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img
                    src={featured01}
                    className="inline-block mb-6"
                    width="135"
                    height=""
                  />
                  <h3 className="text-2xl text-white font-bold">
                    Academic sources
                  </h3>
                </div>
              </div>
              <div className="w-full lg:w-4/12 mb-6 lg:mb-0">
                <div
                  className="bg-[#d0bd7b] text-center p-11 rounded-2xl mr-0 lg:mr-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img
                    src={featured02}
                    className="inline-block mb-6"
                    width=""
                    height=""
                  />
                  <h3 className="text-2xl text-white font-bold">
                    Python Coding
                  </h3>
                </div>
              </div>
              <div className="w-full lg:w-4/12 mb-6 lg:mb-0">
                <div
                  className="bg-[#d0bd7b] text-center p-11 rounded-2xl"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img
                    src={featured03}
                    className="inline-block mb-6"
                    width=""
                    height=""
                  />
                  <h3 className="text-2xl text-white font-bold">
                    Email and Essay writing
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured section ends here */}
    </div>
  );
};

export default Featured;
