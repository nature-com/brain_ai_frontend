import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";

const YourAccount = () => {
  const dispatch = useDispatch();
  const [tools, setTools] = useState();
  const toolList = useSelector((state) => state.tools.toolsList);
  const token = localStorage.getItem("userToken");
  const email = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");
  console.log(userName, "token dddd");

  useEffect(() => {
    dispatch(toolsList());
  }, []);

  useEffect(() => {
    if (Object.keys(toolList).length) {
      setTools(toolList);
    }
  }, [toolList]);

  // Show Hide Tools Section start here
  const [isShownTools, setIsShownTools] = useState(false);
  const handleShowTools = (event) => {
    setIsShownTools((current) => !current);
  };
  // Show Hide Tools Section start here
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
                          src={userIcon}
                          className="rounded-full overflow-hidden w-11 border-2 border-[#c9af71] mr-2"
                        />
                      </div>

                      <div className="text-[#ba9e63] font-medium text-base">
                        {userName}
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
                        <h2 class="text-2xl pb-2 font-bold text-black">
                          Personal
                        </h2>
                        <div className="mb-4">
                          <div class="grid grid-cols-2 gap-4 mb-2">
                            <div>
                              <div className="mb-2 block">
                                <Label value="Avatar" />
                              </div>
                              <div className="w-20 h-20 bottom-1 border-gray-800 rounded-full bg-[#f1f1f1] flex justify-center items-center">
                                <p className="text-center text-sm">
                                  Upload Avatar
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="grid grid-cols-2 gap-4 mb-2">
                            <div>
                              <div className="mb-2 block">
                                <Label value="Your Name" />
                              </div>
                              <TextInput
                                type="text"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                            <div>
                              <div className="mb-2 block">
                                <Label value="Your Preferred Tools" />
                              </div>
                              <Select required>
                                <option>Select Tools</option>
                                <option>Tools</option>
                                <option>Tools</option>
                                <option>Tools</option>
                              </Select>
                            </div>
                          </div>
                          <div class="grid grid-cols-2 gap-4">
                            <div>
                              <div className="mb-2 block">
                                <Label value="Language Preference" />
                              </div>
                              <Select required>
                                <option>Select Language</option>
                                <option>English</option>
                                <option>English</option>
                                <option>English</option>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h2 class="text-2xl pb-2 font-bold text-black">
                            Email
                          </h2>
                          <form>
                            <div className="mb-4">
                              <div class="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="Current Email" />
                                  </div>
                                  <TextInput
                                    type="email"
                                    placeholder="name@gmail.com"
                                    required
                                  />
                                </div>
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="New Email" />
                                  </div>
                                  <TextInput
                                    type="email"
                                    placeholder="Enter New Email Here"
                                    required
                                  />
                                </div>
                              </div>
                              <div class="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="Current Password" />
                                  </div>
                                  <TextInput
                                    type="password"
                                    placeholder="Enter your password to update email"
                                    required
                                  />
                                </div>
                                <div>
                                  <button
                                    type="submit"
                                    className="w-full text-base font-medium text-white px-5 p-2 mt-8 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black"
                                  >
                                    Update Email
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="mb-4">
                          <h2 class="text-2xl pb-2 font-bold text-black">
                            Password
                          </h2>
                          <form>
                            <div className="mb-4">
                              <div class="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="Old Password" />
                                  </div>
                                  <TextInput
                                    type="password"
                                    placeholder="Enter your old password here"
                                    required
                                  />
                                </div>
                                <div>
                                  <div className="mb-2 block">
                                    <Label value="Old Password" />
                                  </div>
                                  <TextInput
                                    type="password"
                                    placeholder="Enter your new password here"
                                    required
                                  />
                                </div>
                              </div>
                              <div class="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                  <button
                                    type="submit"
                                    className="w-full text-base font-medium text-white px-5 p-2 mt-8 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black"
                                  >
                                    Update Password
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </TabPanel>
                    </section>

                    <section>
                      <TabPanel>
                        <p class="text-base pb-0 font-bold text-black">
                          Current plan
                        </p>
                        <h2 class="text-2xl pb-0 font-bold text-black">
                          Monthly 9 Grandfathered
                        </h2>
                        <p class="text-[15px] pb-0 font-normal text-black">
                          Current period ends on: Jan 7,2024 3:17pm
                        </p>
                        <div className="flex my-4">
                          <button
                            type="submit"
                            className="text-[14px] font-medium text-white px-5 p-2 mt-0 mr-2 lg:mr-2 bg-[#b3975f] rounded-lg hover:bg-black"
                          >
                            Upgrade Plan
                          </button>
                          <button
                            type="submit"
                            className="text-[14px] font-medium text-black px-5 p-2 mt-0 mr-2 lg:mr-0 bg-[#edecec] rounded-lg hover:bg-black hover:text-white"
                          >
                            Pause Plan
                          </button>
                        </div>

                        <div className="my-4">
                          <h3 class="text-xl pb-2 font-bold text-black pt-4">
                            Manage Subscription
                          </h3>
                          <p class="text-[15px] pb-0 font-normal text-black">
                            After you unsubscribe, your current plan will still
                            be valid until Jan 7,2024 3:17pm
                          </p>
                          <div className="flex my-4">
                            <button
                              type="submit"
                              className="text-[14px] font-medium text-white px-5 p-2 mt-0 mr-2 lg:mr-2 bg-[#b3975f] rounded-lg hover:bg-black"
                            >
                              Update Payment Method
                            </button>
                            <button
                              type="submit"
                              className="text-[14px] font-medium text-[#ff0000] px-5 p-2 mt-0 mr-2 lg:mr-0 bg-[#edecec] rounded-lg hover:bg-black hover:text-white"
                            >
                              Cancel Plan
                            </button>
                          </div>
                        </div>
                        <div className="my-4">
                          <h3 class="text-xl pb-2 font-bold text-black pt-4">
                            Invoices
                          </h3>
                          <div className="flex my-4">
                            <div className="w-6/12 mr-2">
                              <Select id="countries" required>
                                <option>December 7, 2023</option>
                                <option>Jan 7, 2024</option>
                              </Select>
                            </div>
                            <button
                              type="submit"
                              className="text-[14px] font-medium text-white px-5 p-2 mt-0 mr-2 lg:mr-2 bg-[#b3975f] rounded-lg hover:bg-black"
                            >
                              Download Invoices
                            </button>
                          </div>
                        </div>
                      </TabPanel>
                    </section>
                  </div>
                </div>
              </Tabs>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourAccount;
