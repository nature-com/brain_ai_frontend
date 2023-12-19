import React, { useRef, useEffect, useState } from "react";
import { bannerImage } from "../../assets/images/images";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* banner section start here */}
      <div className="banner_area my-2 lg:my-12">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div className="flex-none md:flex">
            <div className="text-center md:text-left w-full mb-8 md:mb-0 md:w-6/12">
              <div
                className="home_banner_cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h1 className="text-3xl lg:text-7xl font-bold text-black pb-2 lg:pb-24">
                  A STUDY TOOL TO GROW YOUR MIND
                </h1>
                <p className="text-base lg:text-lg font-medium text-black pb-8 lg:pb-12">
                  Let's make your work more organize and easily using the Taskio
                  Dashboard with many of the latest featuresin managing work
                  every day.
                </p>
                <div>
                  <a
                    className="bg-[#ba9e63] text-sm lg:text-lg font-medium text-white rounded-full px-4 lg:px-8 py-3 lg:py-4 hover:bg-[#c9b575]"
                    href="#"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <div
                className="home_banner_img"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <img src={bannerImage} width="702" height="559" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner section ends here */}
    </div>
  );
};

export default Banner;
