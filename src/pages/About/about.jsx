import React, { useRef, useEffect, useState, Suspense } from "react";
import { aboutImg, ourMission, ourVision } from "../../assets/images/images";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-5 px-6 lg:px-0">
      <div className="benefit_section my-0 lg:my-8">
        <div className="container max-w-6xl mx-auto py-4 lg:py-8 px-0">
          <div className="flex-none md:flex justify-between">
            <div
              className="w-full md:w-6/12"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="benefit_section_cont">
                <h2 className="text-2xl lg:text-4xl text-center md:text-left font-semibold text-black pb-4 pt-6 mb-0">
                  About Us
                </h2>
                <p className="text-sm lg:text-base pb-4">
                  Welcome to my website! I am so pleased to introduce
                  AzzyWrites, that’s what my friends call me Azzy!
                </p>
                <p className="text-sm lg:text-base pb-4">
                  I am a student and have been interested in computers and
                  particularly AI in the last few years, I wanted to create a
                  platform that not only assists students with their work but
                  also businesses.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  This website is the manifestation of my dream, a dream that
                  revolves around creating a space where we can find the
                  necessary tools and resources to excel in our studies and in
                  our professional endeavours.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  As a student myself, I understand the challenges and pressures
                  that we often face, and that is why I have poured my heart and
                  soul into building this platform. Whether it's academic
                  writing assistance, coding help, or general academic advice,
                  AzzyWrites is here to ensure that you have the tools and
                  knowledge to succeed.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  I am thrilled to have you here, and I hope that my website
                  becomes a valuable resource for you.
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-5/12 mt-8 md:mt-0 flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="">
                <img src={aboutImg} width="" height="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-6xl mx-auto py-4 lg:py-8 px-0">
          <div className="flex-none md:flex justify-between">
            <div
              className="w-full md:w-5/12 mt-8 md:mt-0 flex justify-center items-center"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="">
                <img src={ourMission} width="" height="" />
              </div>
            </div>
            <div
              className="w-full md:w-6/12"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="benefit_section_cont">
                <h2 className="text-2xl lg:text-4xl text-center md:text-left font-semibold text-black pb-0 pt-6 mb-0">
                  Azzy!
                </h2>
                <h3 className="text-xl lg:text-2xl text-center md:text-left font-semibold text-black pb-4 pt-2 mb-0">
                  About the Software
                </h3>
                <p className="text-sm lg:text-base pb-4">
                  Welcome to AzzyWrites, the ultimate AI assistant designed to
                  revolutionize the way you learn and work! AzzyWrites is not
                  just another run-of-the-mill AI tool; it is a powerful and
                  intuitive platform that aims to enhance your productivity and
                  fuel your creativity. As an AI assistant, AzzyWrites is here
                  to support and guide you in various areas, including writing,
                  coding, and learning in general. With its state-of-the-art
                  algorithms and advanced natural language processing
                  capabilities, AzzyWrites can help you craft compelling essays,
                  brainstorm ideas for your next project, or even provide coding
                  assistance to tackle complex programming challenges. Whether
                  you're a student looking for academic support, a professional
                  seeking to optimize your workflow, or an aspiring writer in
                  need of inspiration, AzzyWrites has got you covered. With
                  AzzyWrites by your side, you can unlock your full potential
                  and accomplish your goals with confidence. So, why wait?
                  Embrace the future of AI-powered assistance and embark on a
                  transformative journey with AzzyWrites today.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-6xl mx-auto py-4 lg:py-8 px-0">
          <div className="flex-none md:flex justify-between">
            <div
              className="w-full md:w-6/12"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="benefit_section_cont">
                <p className="text-sm lg:text-base pb-4">
                  Azzy Writes is committed to upholding a set of core values
                  that guide its operations and interactions with users. First
                  and foremost, Azzy Writes values integrity. It believes in
                  conducting itself with honesty, transparency, and
                  accountability. This means ensuring that all information
                  provided is accurate and reliable, and maintaining a strong
                  ethical foundation in all its endeavors.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  Secondly, AzzyWrites emphasizes innovation. It is dedicated to
                  pushing the boundaries of what AI technology can achieve,
                  constantly seeking out new and creative solutions to meet the
                  needs of its users. This commitment to innovation is reflected
                  in the continuous improvement of its algorithms and the
                  development of cutting-edge features.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  Additionally, AzzyWrites values accessibility. It believes
                  that knowledge should be accessible to all, regardless of
                  background or circumstances. It strives to provide a
                  user-friendly interface and clear, concise explanations to
                  ensure that its services are easily understandable and usable
                  by everyone.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  Moreover, Azzy Writes prioritizes collaboration. It recognizes
                  the importance of working together with users to achieve the
                  best possible outcomes. It actively listens to user feedback,
                  engages in open dialogue, and embraces a collaborative
                  approach to problem-solving.
                </p>
                <p className="text-sm lg:text-base pb-4">
                  Lastly, AzzyWrites values learning. It understands that
                  knowledge is a lifelong journey, and is committed to fostering
                  a culture of continuous learning and growth. It seeks to
                  empower users with the tools and resources they need to expand
                  their knowledge and skills, and encourages curiosity and
                  exploration. These core values of integrity, innovation,
                  accessibility, collaboration, and learning form the foundation
                  of AzzyWrites mission to provide the best possible assistance
                  and support to its users.
                </p>
              </div>
            </div>
            <div
              className="w-full md:w-5/12 mt-8 md:mt-0 flex justify-center items-center"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="">
                <img src={ourVision} width="" height="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
