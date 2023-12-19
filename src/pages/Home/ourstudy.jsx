import React, { useRef, useEffect, useState, Suspense } from "react";
import { toolBrain } from "../../assets/images/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Ourstudy = () => {
  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* Our Study tool section ends here */}
      <div className="our_study_tool_section mb-12">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <h2
            className="text-2xl lg:text-4xl text-center lg:text-left font-semibold text-black pb-4 pt-6 mb-0 lg:mb-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            OUR STUDY TOOL
          </h2>

          <div
            className="our_study_container"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <Slider {...settings}>
              <div>
                <div className="bg-[#c9b575] text-center rounded-2xl p-8 mr-0 lg:mr-2">
                  <img
                    src={toolBrain}
                    className="mb-4"
                    width="148"
                    height="111"
                  />
                  <p className="text-black font-medium text-base">
                    WRITE BETTER PAPERS. PERIOD.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[#ece29b] text-center rounded-2xl p-8 mr-2">
                  <img
                    src={toolBrain}
                    className="mb-4"
                    width="148"
                    height="111"
                  />
                  <p className="text-black font-medium text-base">
                    FINALLY GRASP MATH & SCIENCE
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[#c9b575] text-center rounded-2xl p-8 mr-2">
                  <img
                    src={toolBrain}
                    className="mb-4"
                    width="148"
                    height="111"
                  />
                  <p className="text-black font-medium text-base">
                    LEARN TO CODE, YOUR WAY.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[#ece29b] text-center rounded-2xl p-8 mr-2">
                  <img
                    src={toolBrain}
                    className="mb-4"
                    width="148"
                    height="111"
                  />
                  <p className="text-black font-medium text-base pb-6">
                    CHAT WITH AI
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[#c9b575] text-center rounded-2xl p-8 mr-2">
                  <img
                    src={toolBrain}
                    className="mb-4"
                    width="148"
                    height="111"
                  />
                  <p className="text-black font-medium text-base">
                    WRITE BETTER PAPERS. PERIOD.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[#ece29b] text-center rounded-2xl p-8 mr-2">
                  <img
                    src={toolBrain}
                    className="mb-4"
                    width="148"
                    height="111"
                  />
                  <p className="text-black font-medium text-base">
                    WRITE BETTER PAPERS. PERIOD.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* Our Study tool section ends here */}
    </div>
  );
};

export default Ourstudy;
