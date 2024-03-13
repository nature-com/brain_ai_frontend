import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  bannerImage,
  termsLogos,
  rating01,
  rating02,
  activityIcon,
  pieChartIcon,
  commandIcon,
  featured01,
  featured02,
  featured03,
  toolBrain,
  benefitImg,
} from "../../assets/images/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Banner from "../Home/banner";
const Terms = React.lazy(() => import("./terms"));
const Support = React.lazy(() => import("./support"));
const Featured = React.lazy(() => import("./featured"));
const Benefit = React.lazy(() => import("./benefit"));
const Ourstudy = React.lazy(() => import("./ourstudy"));
import Plan from "./plan";
import { useDispatch, useSelector } from "react-redux";
import { clearGoogleSignInDetails } from "../../reducers/AuthSlice";
import { Toast } from "flowbite-react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ToastToggle } from "flowbite-react/lib/esm/components/Toast/ToastToggle";

const Home = () => {
  const dispatch = useDispatch();
  const [toastShow, setToastShow] = useState(true);
  const { isGoogleLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isGoogleLoggedIn !== null && isGoogleLoggedIn !== undefined) {
      setToastShow(isGoogleLoggedIn);
      dispatch(clearGoogleSignInDetails());
      const interval = setInterval(() => {
        setToastShow(true);
      }, 5000);
    }
  }, [isGoogleLoggedIn]);

  return (
    <div className="px-4 md:px-8 lg:px-0">
      {/* banner section start here */}
      {!toastShow && (
        <Toast className='max-w-xl mx-auto'>
          <div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-[#ffffff]'>
            <AiOutlineInfoCircle className='h-5 w-5 text-black' />
          </div>
          <div className='ml-3 text-sm font-normal'>
            Email already registered. Please use email and password to log in.
          </div>
          <ToastToggle />
        </Toast>
      )}
      <Banner />
      {/* banner section ends here */}
      {/* terms section start here */}
      <Suspense fallback={<div>Loading...</div>}>
        <Terms />
        <Support />
        <Featured />
        <Ourstudy />
        <Benefit />
        <Plan />
      </Suspense>
      {/* terms section ends here */}
    </div>
  );
};

export default Home;
