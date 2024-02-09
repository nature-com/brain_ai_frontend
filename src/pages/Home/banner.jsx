import React, { useRef, useEffect, useState } from "react";
import { bannerImage, benefitImg } from "../../assets/images/images";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Login from "../Auth/login";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleOpenModal = () => {
    setOpenLoginModal(true);
  };

  const [openLoginModal, setOpenLoginModal] = useState(false);
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
                <h1 className="text-3xl lg:text-[55px] font-bold text-black pb-2 lg:pb-24">
                  A STUDY TOOL FOR STUDENTS AND FOR YOUR WORK PLACE
                </h1>
                {/* <span className="text-base lg:text-lg font-bold text-black pb-8 lg:pb-12">
                  Let artificial do the intelligent work for you
                </span> */}
                <p className="text-base lg:text-lg font-medium text-black pb-8 lg:pb-12">
                  Experience the power of artificial intelligence as it
                  effortlessly handles your most demanding tasks. Introducing
                  AzzyWrites, the ground-breaking software designed to
                  revolutionise your daily routine.
                </p>
                <div>
                  <Link
                    className="bg-[#ba9e63] text-sm lg:text-lg font-medium text-white rounded-full px-4 lg:px-8 py-3 lg:py-4 hover:bg-[#c9b575]"
                    onClick={handleOpenModal}
                  >
                    Join AzzyWrites
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 ml-0 md:ml-8">
              <div
                className="home_banner_img"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <img
                  src={benefitImg}
                  width="702"
                  height="559"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner section ends here */}
      {openLoginModal && (
        <Login
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
    </div>
  );
};

export default Banner;
