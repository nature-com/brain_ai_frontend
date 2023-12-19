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

const Home = () => {
  return (
    <div className="px-4 md:px-8 lg:px-0">
      {/* banner section start here */}
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
