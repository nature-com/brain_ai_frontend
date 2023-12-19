import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Button, Modal } from "flowbite-react";
import { logo, formImage } from "../../assets/images/images";
import { AiFillCloseCircle, BsFacebook, BsGoogle } from "../../assets/icons";
const Header = () => {
  const formButtonRef = useRef(null);

  const handleLinkClick = () => {
    if (formButtonRef.current) {
      formButtonRef.current.click();
    }
  };

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <>
      <div className="header_section max-w-6xl mx-auto px-4 lg:px-0 py-3 lg:py-5">
        <Navbar fluid rounded>
          <Link to="/" className="w-32 lg:w-auto">
            <img alt="Logo" src={logo} />
          </Link>
          <div className="flex md:order-2">
            <Link
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="text-sm font-medium text-gray-400 mr-4 my-2 hover:text-black"
            >
              Login
            </Link>
            <Link
              className="text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-[#ba9e63] rounded-lg hover:bg-black"
              to="/dashboard"
            >
              Sign Up
            </Link>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="lg:bg-transparent">
            <li>
              <NavLink
                className={
                  activeMenuItem === "item1" ? "active" : "text-gray-400"
                }
                onClick={() => handleMenuItemClick("item1")}
                active
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  activeMenuItem === "item2" ? "active" : "text-gray-400"
                }
                onClick={() => handleMenuItemClick("item2")}
                to="/about"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  activeMenuItem === "item3" ? "active" : "text-gray-400"
                }
                onClick={() => handleMenuItemClick("item3")}
                to="/product"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  activeMenuItem === "item4" ? "active" : "text-gray-400"
                }
                onClick={() => handleMenuItemClick("item4")}
                to="/faq"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  activeMenuItem === "item5" ? "active" : "text-gray-400"
                }
                onClick={() => handleMenuItemClick("item5")}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  activeMenuItem === "item6" ? "active" : "text-gray-400"
                }
                onClick={() => handleMenuItemClick("item6")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </Navbar.Collapse>
        </Navbar>
        <dialog
          id="my_modal_4"
          className="modal w-11/12 md:w-3/5 lg:w-full max-w-3xl rounded-2xl overflow-hidden"
        >
          <div className="modal-box relative">
            <div className="flex w-full max-w-7xl">
              <div className="hidden lg:block w-1/2">
                <div className="form_image">
                  <img src={formImage} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4 bg-[#fff1d2] rounded-r-2xl">
                <div className="px-3 py-4 lg:py-8">
                  <h2 className="text-3xl text-center mb-4 text-[#ba9e63] font-bold">
                    Login
                  </h2>
                  <p className="text-center text-sm text-neutral-600 pb-4">
                    For a new user,
                    <Link
                      className="pl-2 text-[#ba9e63] hover:text-neutral-600"
                      to="/registration"
                      onClick={handleLinkClick}
                    >
                      Sign Up
                    </Link>
                  </p>
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-3"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-full text-sm mb-0 uppercase h-11 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                    >
                      Login
                    </button>
                  </form>
                  <p className="text-center text-sm my-4">OR</p>
                  <div className="mb-3">
                    <Link
                      className="flex justify-center items-center bg-red-500 hover:bg-red-800 rounded-full text-base h-11 border border-red-800 border-solid w-full"
                      to="/"
                    >
                      <span className="pe-3 text-sm text-white">
                        Sign in with Google
                      </span>
                      <BsGoogle className="text-white" size={25} />
                    </Link>
                  </div>
                  <div className="mb-3">
                    <Link
                      className="flex justify-center items-center bg-blue-800 hover:bg-blue-700 rounded-full text-base h-11 border border-blue-800 border-solid w-full"
                      to="/"
                    >
                      <span className="pe-3 text-sm text-blue-300">
                        Sign in with Facebook
                      </span>
                      <BsFacebook className="text-blue-300" size={25} />
                    </Link>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center p-0 m-0">
                  By joining, you agree to the Fiverr
                  <Link className="pl-1 text-[#ba9e63] hover:text-gray-600">
                    Terms of Service
                  </Link>
                  and to occasionally receive emails from us. Please read our
                  <Link className="pl-1 text-[#ba9e63] hover:text-gray-600">
                    Privacy
                  </Link>
                </p>
              </div>
            </div>
            <div className="modal-action absolute right-4 top-4">
              <form method="dialog">
                <button ref={formButtonRef}>
                  <AiFillCloseCircle
                    className="text-[#ba9e63] hover:text-[#ba913a]"
                    size={25}
                  />
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Header;
