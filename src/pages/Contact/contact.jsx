import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/registration.css";
import { NavLink, Link } from "react-router-dom";
import {
  BsGoogle,
  BsArrowRight,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillPinMapFill,
} from "../../assets/icons";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Contact section start here */}
      <div className="inner_section bg-white py-8 lg:py-12">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div className="lg:flex px-8 lg:px-0">
            <div
              className="w-full lg:w-2/4 pr:0 lg:pr-16"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div>
                <h2 className="text-2xl pb-6 font-bold text-black lg:text-3xl">
                  Contact Info
                </h2>
                <ul>
                  <li className="flex items-center mb-6">
                    <BsFillTelephoneFill className="text-[#ba9e63]" size={20} />
                    <p className="text-base md:text-lg pl-2">1234567890</p>
                  </li>
                  <li className="flex items-center mb-6">
                    <BsFillEnvelopeFill className="text-[#ba9e63]" size={22} />
                    <p className="text-base md:text-lg pl-2">
                      info@azzywrites.com
                    </p>
                  </li>
                  <li className="flex items-start mb-4">
                    <BsFillPinMapFill className="text-[#ba9e63]" size={22} />
                    <p className="text-base md:text-lg pl-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="w-full lg:w-2/4"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h2 className="text-2xl pb-6 font-bold text-black lg:text-3xl">
                Contact Us
              </h2>
              <form>
                <div>
                  <input
                    type="text"
                    className="rounded-xl text-base text-gray-900 px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="rounded-xl text-base text-gray-900 px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="rounded-xl text-base text-gray-900 px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="rounded-xl text-base text-gray-900 px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 mb-3 rounded-xl border border-slate-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-base font-medium text-white px-5 py-3 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact section ends here */}
    </>
  );
};

export default Contact;
