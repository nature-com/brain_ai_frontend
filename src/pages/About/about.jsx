import React, { useRef, useEffect, useState, Suspense } from "react";
import { aboutImg, ourMission, ourVision } from "../../assets/images/images";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-5 px-6 lg:px-0">
      <div className="benefit_section my-0 lg:my-8">
        <div className="container max-w-6xl mx-auto py-4 lg:py-8 px-0">
          <div className="flex-none md:flex justify-between">
            <div
              className="w-full md:w-6/12"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="benefit_section_cont">
                <h2 className="text-2xl lg:text-4xl text-center md:text-left font-semibold text-black pb-4 pt-6 mb-0">
                  About Us
                </h2>
                <p className="text-sm lg:text-base pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-5/12 mt-8 md:mt-0 flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="">
                <img src={aboutImg} width="" height="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-6xl mx-auto py-4 lg:py-8 px-0">
          <div className="flex-none md:flex justify-between">
            <div
              className="w-full md:w-5/12 mt-8 md:mt-0 flex justify-center items-center"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="">
                <img src={ourMission} width="" height="" />
              </div>
            </div>
            <div
              className="w-full md:w-6/12"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="benefit_section_cont">
                <h2 className="text-2xl lg:text-4xl text-center md:text-left font-semibold text-black pb-4 pt-6 mb-0">
                  Our Mission
                </h2>
                <p className="text-sm lg:text-base pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-6xl mx-auto py-4 lg:py-8 px-0">
          <div className="flex-none md:flex justify-between">
            <div
              className="w-full md:w-6/12"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="benefit_section_cont">
                <h2 className="text-2xl lg:text-4xl text-center md:text-left font-semibold text-black pb-4 pt-6 mb-0">
                  Our Vision
                </h2>
                <p className="text-sm lg:text-base pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-5/12 mt-8 md:mt-0 flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="">
                <img src={ourVision} width="" height="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
