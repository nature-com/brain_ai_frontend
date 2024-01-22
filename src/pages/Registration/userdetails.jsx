import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/registration.css";
import { NavLink, Link } from "react-router-dom";
import {
  BsFacebook,
  BsGoogle,
  BsArrowRight,
  BsCheckLg,
  BsFillCheckCircleFill,
} from "../../assets/icons";
import { paymentIcon, registrationImg } from "../../assets/images/images";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, verifyOtp } from "../../reducers/AuthSlice";
import { useForm } from "react-hook-form";

const UserDetails = (props) => {
  const dispatch = useDispatch();

  const {
    error: validationErrors,
    currentUser,
    loading,
  } = useSelector((state) => state?.auth);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    if (currentUser && Object.keys(currentUser).length) {
      dispatch(verifyOtp(data));
    } else {
      dispatch(registerUser(data));
    }
  }

  useEffect(() => {
    if (validationErrors != null && Object.keys(validationErrors).length) {
      Object.keys(validationErrors).forEach((fieldname) => {
        setError(fieldname, {
          type: "manual",
          message: validationErrors[fieldname][0],
        });
      });
    }
  }, [validationErrors, setError]);

  useEffect(() => {
    if (
      currentUser &&
      Object.keys(currentUser).length &&
      currentUser.otp_verified
    ) {
      props.stepsHandler("selectPlan");
    }
  }, [currentUser, props]);

  return (
    // <div className="bg-[#fff1d2] rounded-2xl p-6 lg:p-10 shadow-xl w-full max-w-4xl mx-auto my-0">
    <div
      className="container mx-auto my-0"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="flex justify-center items-center">
        <div className="hidden lg:block w-2/5 flex justify-center items-center">
          <div>
            <img src={registrationImg} />
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <div>
            <h2 className="text-center text-2xl lg:text-3xl text-[#ba9e63] font-bold mb-5">
              Create a new account
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                  placeholder="First Name"
                  autoComplete="off"
                  {...register("first_name", {
                    required: "First name is required",
                    maxLength: 30,
                  })}
                />
                {errors?.first_name?.message && (
                  <small className="text-red-600">
                    {errors.first_name.message}
                  </small>
                )}
              </div>
              <div>
                <input
                  type="text"
                  className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                  placeholder="Last Name"
                  {...register("last_name", {
                    required: "Last name is required",
                    maxLength: 30,
                  })}
                />
                {errors?.last_name?.message && (
                  <small className="text-red-600">
                    {errors.last_name.message}
                  </small>
                )}
              </div>
              <div>
                <input
                  type="email"
                  className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                  placeholder="Email"
                  autoComplete="off"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                {errors?.email?.message && (
                  <small className="text-red-600">{errors.email.message}</small>
                )}
              </div>
              <div>
                <input
                  type="password"
                  className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                  placeholder="Password"
                  autoComplete="off"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors?.password?.message && (
                  <small className="text-red-600">
                    {errors.password.message}
                  </small>
                )}
              </div>
              {/* <div className="flex items-center justify-center bg-white rounded-full h-12 border border-slate-400 border-solid w-full mb-3"> */}
              {/* <span className="text-base p-3.5 h-12">+91</span> */}
              {/* <select
                  id="code"
                  className="text-base p-3.5 h-12 border-0 bg-transparent"
                >
                  <option selected>+91</option>
                  <option value="+44">+44</option>
                  <option value="+93">+93,</option>
                  <option value="+82">+82</option>
                </select> */}
              {/* <input
                    type="tel"
                    className="bg-transparent text-base pr-5 h-12 border-0 w-full"
                    placeholder="Phone"
                  /> */}
              {/* <input
                  type="text"
                  className="bg-transparent text-base pr-5 h-12 border-0 w-full"
                  placeholder="Mobile"
                  {...register("mobile", {
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                      message: "Only numbers are allowed",
                    },
                  })}
                />
              </div>
              <div className="flex justify-center">
                {errors?.country_code?.message && (
                  <small className="text-red-600">
                    {errors.country_code.message}
                  </small>
                )}
                {errors?.mobile?.message && (
                  <small className="text-red-600">
                    {errors.mobile.message}
                  </small>
                )}
              </div> */}
              {currentUser && Object.keys(currentUser).length ? (
                <>
                  <p className="text-sm text-red-600 mb-3">
                    You will receive your OTP code in your email.
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      name="otp"
                      {...register("otp", {
                        required: "Otp is required",
                      })}
                      className="rounded-full text-base px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                      placeholder="Enter Your OTP"
                    />
                    {errors?.otp?.message && (
                      <small className="text-red-600">
                        {errors.otp.message}
                      </small>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="rounded-full text-sm mb-0 uppercase h-12 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                    disabled={loading}
                  >
                    {loading ? "Wait ..." : "Join"}
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  className="rounded-full text-sm mb-0 uppercase h-12 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                  disabled={loading}
                >
                  {loading ? "Wait ..." : "Join"}
                </button>
              )}
              {/* <button
                  type="submit"
                  className="rounded-full text-sm mb-0 uppercase h-12 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                  onClick={() => stepsHandler("selectplan")}
                >
                  Submit
                </button> */}
            </form>
            <p className="text-[12px] text-center font-medium mt-1">
              “By joining, you agree to our Terms of Service and Privacy Policy
              and occasionally receive emails from us.”
            </p>
            <p className="text-center my-4">OR</p>
            <div className="mb-3">
              <Link
                className="flex justify-center items-center bg-red-500 hover:bg-red-800 rounded-full text-base h-12 border border-red-800 border-solid w-full"
                to="/"
              >
                <span className="pe-3 text-white">Sign in with Google</span>
                <BsGoogle className="text-white" size={22} />
              </Link>
            </div>
            {/* <div className="mb-3">
                <Link
                  className="flex justify-center items-center bg-blue-800 hover:bg-blue-700 rounded-full text-base h-12 border border-blue-800 border-solid w-full"
                  to="/"
                >
                  <span className="pe-3 text-blue-300">
                    Sign in with Facebook
                  </span>
                  <BsFacebook className="text-blue-300" size={25} />
                </Link>
              </div> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default UserDetails;
