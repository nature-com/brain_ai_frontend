import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/registration.css";
import { NavLink, Link } from "react-router-dom";
import {
  BsFacebook,
  BsGoogle,
  BsArrowRight,
  BsCheckLg,
  BsFillCheckCircleFill,
} from "../../assets/icons";
import { paymentIcon, registrationImg } from "../../assets/images/images";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Payment = (props) => {
    return (
        <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-4xl mx-auto my-0">
            <div
              className="container mx-auto my-0"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="flex">
                <div className="hidden lg:block w-2/5 flex justify-center items-center">
                  <div>
                    {/* <img className="" src={paymentIcon} /> */}
                    <img src={paymentIcon} />
                  </div>
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="register_cont">
                    <h2 className="text-center text-3xl text-[#ba9e63] font-bold mb-5">
                      Please Payment
                    </h2>
                    <form>
                      <div>
                        <input
                          type="text"
                          className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                          placeholder="Card Holder Name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                          placeholder="Card Number"
                        />
                      </div>
                      <div className="flex">
                        <div className="me-4">
                          <input
                            type="text"
                            className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                            placeholder="Expire Date"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="rounded-full text-sm mb-0 uppercase h-12 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                      >
                        Submit Payment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Payment;