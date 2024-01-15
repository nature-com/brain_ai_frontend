import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { tiktokIcon2 } from "../../assets/images/images";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto py-5 px-6 lg:px-0">
      <div className="text-center my-20">
        <h2 className="text-2xl lg:text-4xl font-semibold text-black pb-4 pt-6 mb-0 lg:mb-4">
          Connect with Us
        </h2>
        <p className="text-gray-400 text-base lg:text-lg font-medium pb-10">
          Follow us on social media to stay connected and receive updates:
        </p>
        <div className="text-center lg:text-left mb-4 lg:mb-0 text-sm text-white font-medium">
          <ul className="flex justify-center items-center mb-4">
            <li className="mr-3">
              <Link className="text-6xl text-[#0866ff]">
                <BsFacebook />
              </Link>
            </li>
            <li className="mr-3">
              <Link className="text-6xl text-[#d82e7c]">
                <FaInstagramSquare />
              </Link>
            </li>
            <li className="mr-3">
              <Link className="text-6xl text-[#1fa3f4]">
                <BsTwitter />
              </Link>
            </li>
            <li className="mr-3">
              <Link>
                <img className="w-[58px]" src={tiktokIcon2} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
