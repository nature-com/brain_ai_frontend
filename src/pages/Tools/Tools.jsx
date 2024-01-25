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
  toolsImg,
} from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { toolsList } from "../../reducers/ToolsSlice";

const Tools = () => {
  const dispatch = useDispatch();
  const [tools, setTools] = useState();
  const toolList = useSelector((state) => state.tools.toolsList);

  useEffect(() => {
    dispatch(toolsList());
  }, []);

  useEffect(() => {
    if (Object.keys(toolList).length) {
      setTools(toolList);
    }
  }, [toolList]);
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
              <div className="mb-6">
                <h2 className="text-center text-2xl pb-3 font-bold text-black lg:text-3xl">
                  AzzyWrites Tools
                </h2>
                <p className="pb-3 text-black font-bold text-base text-center">
                  Work Smarter Not Harder with Azzywrites 45 + AI tools that
                  will save you time, stress and late nights.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools?.details?.popular_tools?.map((tool) => (
                  <div className="bg-white rounded-md p-4 text-center review_box">
                    <img
                      src={tool?.avatar}
                      width="70"
                      height="70"
                      className="rounded-full inline-block mb-2"
                    />
                    <p className="text-[#b08d57] text-base font-medium mb-3">
                      {tool?.tools_name}
                    </p>
                    <p className="text-black text-[14px] font-medium">
                      {tool?.description.length > 35
                        ? tool?.description.substring(0, 35) + "..."
                        : tool?.description}
                    </p>
                  </div>
                ))}
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {tools?.details?.regular_tools?.map((tool) => (
                  <div className="bg-white rounded-md p-4 text-center review_box">
                    <img
                      src={tool?.avatar}
                      width="70"
                      height="70"
                      className="rounded-full inline-block mb-2"
                    />
                    <p className="text-[#b08d57] text-base font-medium mb-3">
                      {tool?.tools_name}
                    </p>
                    <p className="text-black text-[14px] font-medium">
                      {tool?.description.length > 35
                        ? tool?.description.substring(0, 35) + "..."
                        : tool?.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex mt-10">
                <div className="w-8/12">
                  <p className="text-black text-base text-justify">
                    Welcome to Azzywrites, the ultimate AI assistant designed to
                    revolutionise the way you learn and work! AzzyWrites is not
                    just another run-of-the-mill AI tool; it is a powerful and
                    intuitive platform that aims to enhance your productivity
                    and fuel your creativity. As an AI assistant, AzzyWrites is
                    here to support and guide you in various areas, including
                    writing, coding, and learning in general. With its
                    state-of-the-art algorithms and advanced natural language
                    processing capabilities, AzzyWrites can help you craft
                    compelling essays, brainstorm ideas for your next project,
                    or even provide coding assistance to tackle complex
                    programming challenges. Whether you're a student looking for
                    academic support, a professional seeking to optimise your
                    workflow or an aspiring writer in need of inspiration,
                    AzzyWrites has got you covered. With AzzyWrites by your
                    side, you can unlock your full potential and accomplish your
                    goals with confidence. So, why wait? Embrace the future of
                    AI-powered assistance and embark on a transformative journey
                    with AzzyWrites today.
                  </p>
                </div>
                <div className="w-4/12 ml-4">
                  <img src={toolsImg} className="w-full" />
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

export default Tools;
