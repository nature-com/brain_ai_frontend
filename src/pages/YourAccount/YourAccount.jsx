import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../assets/css/dashboard.css";
import {
  adminBanner2,
  shareIcon,
  settingIcon,
  paragraphIcon3,
  emailIcon3,
  essayWriterIcon,
  thinkBox,
  tiktokIcon,
  userIcon,
} from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { toolsList } from "../../reducers/ToolsSlice";
import { AiFillPlusCircle, AiOutlineUserAdd } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Select,
  FileInput,
  Modal,
} from "flowbite-react";
import {
  editProfile,
  updateAvatar,
  updateProfile,
} from "../../reducers/ProfileSlice";
import { useForm } from "react-hook-form";
import { cancelSubscription } from "../../reducers/PlansSlice";
import { LuPencil } from "react-icons/lu";
import { resetPassword } from "../../reducers/AuthSlice";

const YourAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tools, setTools] = useState();
  const toolList = useSelector((state) => state.tools.toolsList);
  const userName = localStorage.getItem("userName");

  const { loadingPass, messagePass, errorPass } = useSelector((state) => state.auth);
  const { loading, message, error, profile: data, userPlan, } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(editProfile(data));
  }, []);

  const { profile } = useSelector((state) => state.profile);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    register: register1,
    handleSubmit: handleSubmit1,
    reset: reset1,
    formState: { errors: errors1 },
  } = useForm();

  const submitUpdatePassword = (data) => {
    dispatch(resetPassword(data));
  }

  const onSubmit = (submit) => {
    let postData = {
      first_name: submit.first_name,
      last_name: submit.last_name,
      email: submit.email,
      mobile: submit.mobile,
    };
    const update_profile = dispatch(updateProfile(postData));
    update_profile.then((response) => {
      if (response?.payload?.status && response?.payload?.status_code === 200) {
        dispatch(editProfile());
      }
    });
  };

  useEffect(() => {
    if (data) {
      let defaultValue = {
        first_name: data[0]?.first_name,
        last_name: data[0]?.last_name,
        email: data[0]?.email,
        mobile: data[0]?.mobile,
      };
      // console.log("data", data);
      // console.log("defaultValue", defaultValue);

      reset({ ...defaultValue });
    }
  }, [data, reset]);

  // useEffect(() => {
  //   dispatch(toolsList());
  // }, []);

  // useEffect(() => {
  //   if (Object.keys(toolList).length) {
  //     setTools(toolList);
  //   }
  // }, [toolList]);

  // Show Hide Tools Section start here
  const [isShownTools, setIsShownTools] = useState(false);
  const handleShowTools = (event) => {
    setIsShownTools((current) => !current);
  };


  // Date formatting function
  const dateFormatting = (date) => {
    const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    // Construct the formatted date string in "dd-mm-yyyy" format
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  };

  const [cancellationStatus, setCancellationStatus] = useState("active");
  const userId = JSON.parse(localStorage.getItem("userId"));
  const user_id = userId.user_id;

  const CancelSubscription = () => {
    const cancelUserSubscription = {
      user_id: user_id,
      stripe_subscription_id: userPlan?.details?.stripe_subscription_id,
      entity: "cancel_subscription",
    };

    dispatch(cancelSubscription(cancelUserSubscription))
      .then((result) => {
        if (result?.payload?.status && result?.payload?.status_code === 200) {
          console.log("Subscription canceled successfully");
          setCancellationStatus("cancelled");
          localStorage.setItem("cancellationStatus", "cancelled");
        }
      })
      .catch((error) => {
        console.error("Failed to cancel subscription", error);
        setCancellationStatus("active");
        localStorage.setItem("cancellationStatus", "active");
      });

    setOpenModal(false);
  };

  // Show Hide Tools Section start here

  const [openModal, setOpenModal] = useState(false);

  const handleProfilePicture = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    const update_image = dispatch(updateAvatar(formData));
    update_image.then((response) => {
      if (response?.payload?.status && response?.payload?.status_code === 200) {
        dispatch(editProfile());
      }
    });
  };

  const handleUpdate = () => {
    navigate("/payment-plan-inside");
  }

  return (
    <div>
      <div className="pt-2.5 pb-12">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div className="my_account_section">
            <article className="tabbed-content bg-white p-7 rounded-2xl tabs-side flex">
              <Tabs className="w-full">
                <div className="flex-none lg:flex">
                  <div className="w-full lg:w-2/12">
                    <div className="flex items-center mb-3">
                      <div>
                        <img
                          src={profile[0]?.avatar}
                          className="rounded-full overflow-hidden w-11 border border-[#c9af71] mr-2 h-11"
                        />
                      </div>

                      <div className="text-[#ba9e63] font-medium text-base">
                        {profile[0]?.first_name}
                      </div>
                    </div>
                    <div className="sidebar_tab">
                      <TabList>
                        <Tab>Your Account</Tab>
                        <Tab>Billing</Tab>
                      </TabList>
                    </div>
                  </div>

                  <div className="w-full lg:w-10/12">
                    <section>
                      <TabPanel>
                        <div className="flex justify-between items-center">
                          <h2 className="text-2xl pb-2 font-bold text-black">
                            Personal
                          </h2>
                          <Link
                            className="text-[14px] font-semibold text-black mr-8 hover:text-[#ba9e63] underline"
                            to="/dashboard"
                          >
                            Back to Dashboard
                          </Link>
                        </div>
                        {data && (
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                              <div className="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="Avatar" />
                                  </div>
                                  <div className="flex items-center">
                                    <div className="w-20 h-20 bottom-1 border-gray-800 rounded-full bg-[#f1f1f1] flex justify-center items-center">
                                      <img
                                        src={profile[0]?.avatar}
                                        className="rounded-full overflow-hidden border border-[#c9af71] w-full mr-0 h-full"
                                      />
                                    </div>
                                    <div className="w-[18px] h-[18px] relative ml-2">
                                      <LuPencil className="text-xl text-black cursor-pointer hover:text-[#ba9e63]" />
                                      <FileInput
                                        onInput={handleProfilePicture}
                                        className="absolute left-0 top-0 opacity-0"
                                        sizing="sm"
                                        id="file"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="First Name" />
                                  </div>
                                  <TextInput
                                    type="text"
                                    name="first_name"
                                    autoComplete="off"
                                    {...register("first_name", {
                                      required: "Name is required",
                                      maxLength: 30,
                                    })}
                                  />
                                </div>
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="Last Name" />
                                  </div>
                                  <TextInput
                                    type="text"
                                    name="last_name"
                                    autoComplete="off"
                                    {...register("last_name", {
                                      required: "Name is required",
                                      maxLength: 30,
                                    })}
                                  />
                                </div>
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="Your Email" />
                                  </div>
                                  <TextInput
                                    type="text"
                                    autoComplete="off"
                                    name="email"
                                    {...register("email", {
                                      required: "Email is required",
                                      pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message:
                                          "Entered value does not match email format",
                                      },
                                    })}
                                  />
                                </div>
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="Your Mobile" />
                                  </div>
                                  <TextInput
                                    type="text"
                                    autoComplete="off"
                                    name="mobile"
                                    {...register("mobile", {
                                      pattern: {
                                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                        message: "Only numbers are allowed",
                                      },
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                  <button
                                    type="submit"
                                    className="w-full text-base font-medium text-white px-5 p-2 mt-4 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black"
                                  >
                                    Update Profile
                                  </button>
                                </div>
                              </div>
                            </div>
                            {message &&
                              <div className="text-center text-green-400 font-bold mt-2"> {message}  </div>
                            }
                            {error &&
                              <div className="text-center text-red-500 font-bold mt-2"> {error}  </div>
                            }
                          </form>
                        )}

                        <div className="mt-8">
                          <h1 className="text-2xl pb-2 font-bold text-black pb-4">
                            Password
                          </h1>
                        </div>

                        <form onSubmit={handleSubmit1(submitUpdatePassword)}>
                          <div className="grid grid-cols-1 gap-4 mb-2 max-w-2xl">
                            <div>
                              <div className="mb-2 block">
                                <Label value="Old Password" />
                              </div>
                              <TextInput
                                type="text"
                                name="old_password"
                                autoComplete="off"
                                {...register1("old_password", {
                                  required: "Password is required",
                                  maxLength: 30,
                                })}
                              />
                            </div>
                            <div>
                              <div className="mb-2 block">
                                <Label value="New Password" />
                              </div>
                              <TextInput
                                type="text"
                                name="password"
                                autoComplete="off"
                                {...register1("password", {
                                  required: "New password is required",
                                  maxLength: 30,
                                })}
                              />
                            </div>
                            <div>
                              <div className="mb-2 block">
                                <Label value="Confirm New Password" />
                              </div>
                              <TextInput
                                type="text"
                                name="confirm_password"
                                autoComplete="off"
                                {...register1("confirm_password", {
                                  required: "Confirm new password is required",
                                  maxLength: 30,
                                })}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-2">
                            <div>
                              <button
                                type="submit"
                                className="w-full text-base font-medium text-white px-5 p-2 mt-4 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black"
                                disabled={loadingPass}
                              >
                                {loadingPass ? "Wait..." : "Update Password"}

                              </button>
                            </div>
                          </div>
                          {messagePass && !errorPass &&
                            <div className="text-center text-green-400 font-bold mt-2"> {messagePass}  </div>
                          }
                          {errorPass && !messagePass &&
                            <div className="text-center text-red-500 font-bold mt-2"> {errorPass}  </div>
                          }

                        </form>
                      </TabPanel>
                    </section>

                    <section>
                      {userPlan && (
                        <TabPanel>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-base pb-0 font-bold text-black">
                                Current plan
                              </p>
                              <h2 className="text-2xl pb-0 font-bold text-black">
                                {userPlan?.details?.plan?.name}
                              </h2>
                            </div>
                            <Link
                              className="text-[14px] font-semibold text-black mr-8 hover:text-[#ba9e63] underline"
                              to="/dashboard"
                            >
                              Back to Dashboard
                            </Link>
                          </div>

                          {/* <p className="text-[15px] pb-0 font-normal text-black">
                            Current period ends on:{" "}
                            {userPlan?.details?.plan_period_end}
                          </p> */}
                          <div className="my-4">
                            <h3 className="text-xl pb-2 font-bold text-black pt-4">
                              Manage Subscription
                            </h3>
                            <p className="text-[15px] pb-0 font-normal text-black">
                              After you unsubscribe, your current plan will
                              still be valid until{" "}
                              {/* {userPlan?.details?.plan_period_end} */}
                              {dateFormatting(new Date(userPlan?.details?.plan_period_end))}
                            </p>
                            <div className="flex my-4">
                              {profile[0]?.user_subscriptions[0]
                                ?.subscription === "active" ? (
                                <button
                                  type="button"
                                  className="text-[14px] font-medium text-[#ff0000] px-5 p-2 mt-0 mr-2 lg:mr-0 bg-[#edecec] rounded-lg hover:bg-black hover:text-white"
                                  onClick={() => setOpenModal(true)}
                                >
                                  Cancel Plan
                                </button>
                              ) : (
                                <p style={{ color: "red" }}>
                                  Subscription has been cancelled.
                                </p>
                              )}
                              <button
                                type="button"
                                className="ml-2 text-[14px] font-medium text-white px-5 p-2 mt-0 mr-2 lg:mr-0 bg-black rounded-lg hover:bg-[#edecec] hover:text-black"
                                onClick={handleUpdate}
                              >
                                Update Plan
                              </button>
                            </div>
                          </div>
                        </TabPanel>
                      )}
                    </section>
                  </div>
                </div>
              </Tabs>
            </article>
          </div>
        </div>
      </div>
      {/* Confirm cancel plan popup start here */}
      <Modal
        size="md"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="border-0 p-0 pt-4 pr-4">&nbsp;</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base text-black text-center">
              Are you sure to cancel your current plan
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 flex justify-center">
          <botton
            className="text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-[#ba9e63] rounded-lg hover:bg-black cursor-pointer"
            onClick={() => CancelSubscription()}
          >
            Confirm Cancel Plan
          </botton>
          <botton
            className="text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-black rounded-lg hover:bg-[#ba9e63] cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </botton>
        </Modal.Footer>
      </Modal>
      {/* Confirm cancel plan popup start here */}
    </div>
  );
};

export default YourAccount;
