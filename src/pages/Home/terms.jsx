import React, { useRef, useEffect, useState, Suspense } from "react";
import { termsLogos } from "../../assets/images/images";

const Terms = () => {
  return (
    <div>
      <div
        className="text-center py-0 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <h2 className="text-2xl lg:text-4xl font-semibold text-black pb-4 mb-0 lg:mb-6">
            More than 25,000 Members using AzzyWrites
          </h2>
          <div className="inline-block">
            <img src={termsLogos} width="" height="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
