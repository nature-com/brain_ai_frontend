import React, { useRef, useEffect, useState } from "react";
import "../../assets/css/registration.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  BsGoogle,
  BsArrowRight,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillPinMapFill,
} from "../../assets/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactAdmin } from "../../reducers/ContactSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loading } = useSelector(
    (state) => state.contact
  );

  const form = useForm({
  });

  const onSubmit = (data) => {
    dispatch(contactAdmin(data));
    // console.log('fromsubmit', data);
    new Promise((resolve, reject) => {
      dispatch(contactAdmin(data))
        .then((response) => {
          if (response.payload.status && response.payload.status_code === 200) {
            toast.success(response.payload.message, {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              progress: undefined,
              theme: 'light',
            });
          } else {
            toast.error(
              response.payload.message
                ? response.payload.message
                : 'Something went wrong'
            );
          }

          resolve();
        })
        .catch((error) => {
          // console.log('reject', error);
          reject(error);
        });
    });
  }

  const { register, control, handleSubmit, formState, watch, getValues, setValue, reset, trigger } = form
  const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitSuccessful, isLoading, isSubmitted, submitCount } = formState;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="create_character_wrap px-3 md:px-0 ml-0 md:ml-4"
      >
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme='light'
        />
        {/* Contact section start here */}
        <div className="inner_section bg-white py-8 lg:py-12">
          <div className="container max-w-6xl mx-auto py-4 px-0">
            <div className="lg:flex px-8 lg:px-0">
              <div
                className="w-full lg:w-2/4 pr:0 lg:pr-16"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div>
                  <h2 className="text-2xl pb-6 font-bold text-black lg:text-3xl">
                    Contact Info
                  </h2>
                  <ul>
                    <li className="flex items-center mb-6">
                      <BsFillEnvelopeFill className="text-[#ba9e63]" size={22} />
                      <p className="text-base md:text-lg pl-2">
                        support@azzywrites.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="w-full lg:w-2/4"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h2 className="text-2xl pb-6 font-bold text-black lg:text-3xl">
                  Contact Us
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div>
                    <input
                      type="text"
                      className="rounded-xl text-base text-gray-900 px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                      placeholder="Full Name"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-red-400">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      className="rounded-xl text-base text-gray-900 px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                      placeholder="Email Address"
                      id="email"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-400">{errors.email.message}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      className="rounded-xl text-base text-gray-900 px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                      placeholder="Phone Number"
                      id="Phone"
                      {...register("Phone", {
                      })}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="rounded-xl text-base text-gray-900 px-5 h-12 border border-slate-400 border-solid w-full mb-3"
                      placeholder="Subject"
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                    />
                  </div>
                  {errors.subject && <p className="text-red-400">{errors.subject.message}</p>}
                  <div>
                    <textarea
                      id="message"
                      rows="4"
                      className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 mb-3 rounded-xl border border-slate-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Message"
                      {...register("message", { required: "Message is required" })}
                    ></textarea>
                    {errors.message && <p className="text-red-400">{errors.message.message}</p>}
                  </div>
                  <button
                    disabled={!isDirty && loading}
                    type="submit"
                    className="w-full text-base font-medium text-white px-5 py-3 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black"
                  >
                    {loading ? "Wait ..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Contact section ends here */}
      </div>
    </>
  );
};

export default Contact;
