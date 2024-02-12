import React, { useRef, useEffect, useState, Suspense } from "react";
import { bannerImage, benefitImg } from "../../assets/images/images";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Faq from "react-faq-component";
const data = {
  // title: "FAQ",
  rows: [
    {
      title: "Enhanced Writing Skills",
      content: `AzzyWrites helps users improve their writing skills by providing real-time suggestions and feedback. Whether it's grammar, punctuation, or sentence structure, AzzyWrites advance algorithms analyse text and offer insightful recommendations to enhance the overall quality of the writing.`,
    },
    {
      title: "Efficient Coding Assistance",
      content:
        "AzzyWrites, users can receive coding assistance and guidance. Whether they are stuck on a specific problem or need help with debugging, AzzyWrites provides accurate suggestions and solutions to help users overcome coding challenges and improve their programming skills.",
    },
    {
      title: "Time-saving and Productivity Boost",
      content: `AzzyWrites saves users time by providing quick and accurate responses. Instead of spending hours searching for solutions or struggling with complex concepts, users can rely on AzzyWrites to provide immediate assistance, allowing them to focus on other important tasks and increase productivity.`,
    },
    {
      title: "Personalised Learning Experience",
      content: `AzzyWrites offers a personalised learning experience tailored to each user's needs. By analysing user interactions and preferences, AzzyWrites adapts its responses and recommendations to provide relevant and targeted assistance, helping users learn more effectively and efficiently.`,
    },
    {
      title: "Versatile and Comprehensive Assistance",
      content: `AzzyWrites is a versatile tool that can assist users in various areas of study. Whether it's writing essays, solving math problems, understanding scientific concepts, or learning new programming languages, AzzyWrites provides comprehensive assistance, making it a valuable resource across different subjects and disciplines.`,
    },
  ],
};

const Benefit = () => {
  const styles = {
    // bgColor: "#dff3eb",
    titleTextColor: "#000000",
    rowTitleColor: "#c0a35b",
    // rowContentColor: "grey",
    // arrowColor: "red",
    rowContentPaddingBottom: "10px",
  };
  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  return (
    <div>
      {/* Benefit section ends here */}
      <div className="benefit_section my-8 lg:my-16">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div className="flex-none md:flex">
            <div className="w-full md:w-6/12">
              <div
                className="benefit_section_cont"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h2 className="text-2xl lg:text-4xl text-center md:text-left font-semibold text-black pb-2 pt-6 mb-4">
                  What we offer…
                </h2>
                <div
                  className="faq_section max-w-6xl mx-auto py-5 px-6 lg:px-0"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <Faq data={data} styles={styles} config={config} />
                </div>
                {/* <ul>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Free Consulting With Experet Saving Money
                  </li>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Online Banking
                  </li>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Investment Report Every Month
                  </li>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Saving Money For The Future
                  </li>
                  <li className="flex text-black text-base lg:text-lg font-medium mb-6">
                    <BsFillCheckCircleFill
                      className="text-[#d0bd7b] mr-3"
                      size={30}
                    />
                    Online Transection
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="w-full md:w-6/12 ml-0 md:ml-8">
              <div
                className="benefit_section_img ml-4"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <img
                  src={bannerImage}
                  width=""
                  height=""
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefit section ends here */}
    </div>
  );
};

export default Benefit;
