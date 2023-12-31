import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Slider from "react-slick";
import { testiIcon, brainImg, footerLogo } from "../../assets/images/images";
import { HiChevronUp } from "react-icons/hi";
const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  var settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    fade: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="footer_container">
      <div className="footer_wrap px-4">
        <div className="container max-w-6xl mx-auto pt-12 lg:pt-24 pb-4 px-0">
          <div className="footer_top_area pb-8">
            <div className="flex-none lg:flex justify-between">
              <div className="w-full lg:w-5/12">
                <div className="footer_top_area_left text-center lg:text-left">
                  <h2 className="text-2xl lg:text-4xl font-bold text-[#c0a35b] mb-3 lg:mb-6">
                    People are Saying About DoWhith
                  </h2>
                  <p className="text-sm lg:text-base font-medium text-white mb-6">
                    Everything you need to accept to payment and grow your money
                    of manage anywhere on planet
                  </p>
                  <img
                    src={testiIcon}
                    className="inline-block mb-6"
                    width="45"
                    height="38"
                  />
                  <div className="testimonials_area">
                    <Slider {...settings}>
                      <div>
                        <div className="testi_slider_box">
                          <p className="text-sm lg:text-base font-medium text-white mb-6">
                            Easy to use
                          </p>
                          <p className="text-sm lg:text-base font-medium text-white mb-6">
                            Azzy writes is incredibly easy to use, providing an
                            intuitive and user-friendly platform that simplifies
                            tasks and enhances productivity. With its sleek
                            interface, seamless navigation, and comprehensive
                            features, AzzyWrites empowers users to effortlessly
                            accomplish Members goals.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="testi_slider_box">
                          <p className="text-sm lg:text-base font-medium text-white mb-6">
                            Gets me A*
                          </p>
                          <p className="text-sm lg:text-base font-medium text-white mb-6">
                            AzzyWrites has proven time and again its ability to
                            assist students in achieving top-notch performance
                            and securing A stars. With its vast knowledge and
                            expertise, AzzyWrites provides invaluable support in
                            various academic endeavors. Whether it's writing an
                            essay, solving complex mathematical equations, or
                            understanding intricate scientific concepts,
                            AzzyWrites is there to guide students towards
                            excellence.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="testi_slider_box">
                          <p className="text-sm lg:text-base font-medium text-white mb-6">
                            Work done in a click
                          </p>
                          <p className="text-sm lg:text-base font-medium text-white mb-6">
                            AzzyWrites is the ultimate solution for getting work
                            done efficiently and effortlessly with just a simple
                            click. With its powerful features and user-friendly
                            interface, AzzyWrites streamlines the entire
                            workflow, saving valuable time and energy.
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-5/12">
                <div className="get_started">
                  <div className="text-center mb-8">
                    <img
                      src={brainImg}
                      className="inline-block mb-2"
                      width="134"
                      height="87"
                    />
                    <h3 className="text-2xl lg:text-3xl text-white font-medium">
                      Get Started
                    </h3>
                  </div>
                  <div>
                    <form>
                      <label className="text-base font-medium text-white pb-2 block">
                        Email
                      </label>
                      <div className="field_area">
                        <input
                          className="text-sm font-medium w-full rounded-xl h-12 mb-4"
                          type="text"
                          placeholder="Enter your email"
                        />
                      </div>
                      <label className="text-base font-medium text-white pb-2 block">
                        Message
                      </label>
                      <div className="field_area">
                        <textarea
                          className="text-sm font-medium w-full rounded-xl h-20 mb-4"
                          placeholder="What are you say ?"
                        />
                      </div>
                      <button className="text-base font-medium text-white bg-[#b3975f] rounded-lg h-12 w-full hover:bg-[#c9b575]">
                        Request Demo
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom_area my-8">
            <div className="flex-none md:flex">
              <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
                <div className="footer_bottom_area_left text-center lg:text-left">
                  <img
                    className="mb-4 inline-block"
                    src={footerLogo}
                    width="203"
                    height="73"
                  />
                  <p className="text-sm font-medium text-gray-400 pb-4">
                    Get started noew try our product
                  </p>
                  <div className="newslatter_box">
                    <form>
                      <input type="text" placeholder="Enter your email here" />
                      <button>&nbsp;</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-7/12">
                <div className="footer_bottom_area_right">
                  <div className="flex-none lg:flex">
                    <div className="w-full lg:w-4/12 mb-4 lg:mb-0 text-center lg:text-left">
                      <div className="bottom_quick_link_box">
                        <h3 className="text-lg text-white pb-4">Support</h3>
                        <ul>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              Help centre
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              Account information
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/about"
                            >
                              About
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/contact"
                            >
                              Contact us
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 mb-4 lg:mb-0 text-center lg:text-left">
                      <div className="bottom_quick_link_box">
                        <h3 className="text-lg text-white pb-4">
                          Help and Solution
                        </h3>
                        <ul>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              Talk to support
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              Support docs
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              System status
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              Covid responde
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 text-center lg:text-left">
                      <div className="bottom_quick_link_box">
                        <h3 className="text-lg text-white pb-4">Product</h3>
                        <ul>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              Update
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              Security
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              Beta test
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              className="text-sm text-gray-400 hover:text-[#c9b575]"
                              to="/"
                            >
                              Pricing product
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none lg:flex justify-between mt-16">
              <p className="text-center lg:text-left mb-4 lg:mb-0 text-sm text-white font-medium">
                © 2023 mybrain.guru copyright and rights reserved
              </p>
              <ul className="flex justify-center items-center">
                <li>
                  <Link
                    className="text-sm text-white font-medium hover:text-[#c9b575]"
                    to="/"
                  >
                    Terms and Condtions
                  </Link>
                </li>
                <li className="ml-4">
                  <Link
                    className="text-sm text-white font-medium hover:text-[#c9b575]"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        //className="animate-bounce"
        style={{
          display: visible ? "inline" : "none",
          position: "fixed",
          bottom: "40px",
          right: "20px",
          border: "none",
          background: "none",
          zIndex: 5,
        }}
      >
        <HiChevronUp
          className="text-[#c9b575] hover:text-[#b3975f]"
          size={52}
        />
      </button>
    </div>
  );
};

export default Footer;
