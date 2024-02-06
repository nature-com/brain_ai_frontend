import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Navbar, Button, Modal } from "flowbite-react";
import { logo, formImage } from "../../assets/images/images";
import { AiFillCloseCircle, BsFacebook, BsGoogle } from "../../assets/icons";
import Login from "../../pages/Auth/login";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/AuthSlice";

const Header = () => {
  const dispatch = useDispatch();
  const token = !!localStorage.getItem("userToken");
  const userName = localStorage.getItem("userName");

  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleOpenModal = () => {
    setOpenLoginModal(true);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="header_section max-w-6xl mx-auto px-4 lg:px-0 py-3 lg:py-5">
        <Navbar fluid rounded>
          <Link to="/" className="w-32 lg:w-auto">
            <img alt="Logo" src={logo} />
          </Link>
          <div className="flex md:order-2">
            {!token ? (
              <>
                <Link
                  onClick={handleOpenModal}
                  className="text-sm font-medium text-gray-400 mr-4 my-2 hover:text-black"
                >
                  Login
                </Link>
                <Link
                  className="text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-[#ba9e63] rounded-lg hover:bg-black"
                  to="/registration"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <p className="mr-3">
                  Welcome,{" "}
                  <span className="font-bold text-red-800">
                    {userName == "true" ? userName : "User"}
                  </span>
                </p>
                <Link
                  // onClick={() => localStorage.removeItem("userToken")}
                  onClick={handleLogout}
                  className="text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-[#ba9e63] rounded-lg hover:bg-black"
                  // className="text-sm font-medium text-gray-400 mr-4 my-2 hover:text-black"
                  to="/"
                >
                  Logout
                </Link>
              </>
            )}
            {/* {!token && (
              <Link
                className="text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-[#ba9e63] rounded-lg hover:bg-black"
                to="/registration"
              >
                Sign Up
              </Link>
            )} */}
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="lg:bg-transparent">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {!token ? (
                <NavLink to="/tools">Tools</NavLink>
              ) : (
                <NavLink to="/dashboard">Tools</NavLink>
              )}
            </li>
            <li>
              <NavLink to="/payment-plan">Payment Plan</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {openLoginModal && (
        <Login
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
        />
      )}
    </>
  );
};

export default Header;
