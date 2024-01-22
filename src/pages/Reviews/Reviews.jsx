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
import {
  featherFull,
  featherHalf,
  review01,
  review02,
  review03,
  review04,
  review05,
  review06,
  review07,
  review08,
  review09,
  review10,
  review11,
  review12,
  review13,
  review14,
} from "../../assets/images/images";

const Reviews = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* Contact section start here */}
      <div className="inner_section bg-white py-8 lg:py-12">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div className="lg:flex px-8 lg:px-0">
            <div className="w-full" data-aos="fade-up" data-aos-duration="1500">
              <div>
                <h2 className="text-2xl pb-6 font-bold text-black lg:text-3xl">
                  Our Members Reviews
                </h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review01}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Sarah M.
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;AzzyWrites has been an incredibly helpful tool for my
                    writing assignments. It provides thorough explanations and
                    suggestions that have greatly improved the quality of my
                    work.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review02}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Kim E
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;I love how AzzyWrites can assist with coding problems.
                    It offers step-by-step solutions and helps me understand the
                    logic behind the code.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review03}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Emily R
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;AzzyWrites is a lifesaver for studying. It breaks down
                    complex topics into easily digestible explanations, making
                    it easier for me to grasp difficult concepts.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review04}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Alex T
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;The writing suggestions provided by AzzyWrites are
                    spot-on. It catches grammar errors and suggests better word
                    choices, resulting in more polished and professional
                    writing.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review05}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Jeet W
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;I appreciate how AzzyWrites Tools are super helpful,
                    especially the Speech to text tool, as this allows me to
                    look back at the teachers explanations when I am at
                    home.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review06}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Suneeta S
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;AzzyWrites user interface is intuitive and easy to
                    navigate. It&#39;s a user-friendly tool that doesn&#39;t
                    overwhelm beginners.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review07}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Samantha H
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;I&#39;ve been able to save a lot of time using
                    AzzyWrites It quickly generates code snippets and provides
                    explanations, eliminating the need for extensive
                    research.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review08}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    David B
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;AzzyWrites customer support is outstanding. They
                    respond promptly and provide helpful solutions to any issues
                    or questions I have.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review09}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Maria K.F
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;As a non-native English speaker, AzzyWrites has been
                    invaluable in improving my language skills. Its grammar
                    suggestions and vocabulary recommendations have made a
                    significant difference in my writing.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review10}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Andrew T
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;AzzyWrites learning resources are comprehensive and
                    well-structured. It covers a wide range of topics and
                    provides in-depth explanations, making it a great tool for
                    self-study.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review11}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Aisha S
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;I&#39;ve tried several AI writing tools, but
                    AzzyWrites stands out with its accuracy and reliability. It
                    consistently provides accurate information and helps me
                    avoid common mistakes.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review12}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Ashley W
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;AzzyWrites is super cost efficient as using the
                    platinum Plan, I have access to all the tools, my favourite
                    tool is the content improver, this allows me to get A
                    stars.” - Michael C. - &quot;Using AzzyWrites has greatly
                    improved my confidence in writing. Its instant feedback and
                    suggestions have made me a better writer overall.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review13}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Aled T
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;AzzyWrites changed my life; I get to spend more time
                    with the kids than at work, as a Teacher, it helps me mark
                    my students work faster and more accurately. Not just that
                    but when creating exemplars for my students the essay and
                    paragraph generator makes the job as easy as a click, quite
                    literally.&quot;
                  </p>
                </div>

                <div className="bg-white rounded-md p-4 text-center review_box">
                  <img
                    src={review14}
                    className="inline-block rounded-full mb-4 shadow-md"
                  />
                  <p className="text-[#b08d57] text-base font-medium mb-3">
                    Zain F
                  </p>
                  <div className="flex justify-center items-center my-2">
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherFull} className="w-[25px]" />
                    <img src={featherHalf} className="w-[25px]" />
                  </div>
                  <p className="text-black text-[14px] font-medium">
                    &quot;The AI-powered simulations offered by AzzyWrites are
                    incredibly helpful for understanding complex scientific
                    concepts. They provide a visual representation that aids in
                    comprehension.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact section ends here */}
    </div>
  );
};

export default Reviews;
