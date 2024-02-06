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

const Dashboard = () => {
  const dispatch = useDispatch();
  const [tools, setTools] = useState();
  const toolList = useSelector((state) => state.tools.toolsList);
  const token = localStorage.getItem("userToken");
  const email = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");

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
                        {userName == "true" ? userName : "User"}
                      </div>
                    </div>
                    <div className="sidebar_tab">
                      <TabList>
                        <Tab>Dashboard</Tab>
                        <Tab>
                          <Link to="/tooldetails/44">Past Paper Generator</Link>
                        </Tab>
                        <Tab>
                          <Link to="/tooldetails/1">Essay writer</Link>
                        </Tab>
                        <Tab>
                          <Link to="/tooldetails/41">Image Description</Link>
                        </Tab>
                        <Tab>
                          <Link to="/tooldetails/42">Speech To Text</Link>
                        </Tab>
                        <Tab>
                          <Link to="/tooldetails/40">AI Detector</Link>
                        </Tab>
                        <Tab>
                          <Link to="/tooldetails/43">Plagiarism Checker</Link>
                        </Tab>
                      </TabList>
                    </div>
                  </div>

                  <div className="w-full lg:w-10/12">
                    <section>
                      <TabPanel>
                        {/* <div className="admin_banner">
                          <h1>Work smart not harder with My Brain</h1>
                          <img src={adminBanner2} width="" height="" />
                        </div> */}
                        <div className="flex justify-between px-2 mb-4">
                          <div>
                            <h2 className="text-blacks font-bold text-3xl uppercase">
                              Work Smarter Not Harder
                            </h2>
                          </div>
                          <div className="text-center">
                            <h3 className="text-[#ba9e63] font-bold text-xl uppercase">
                              25,502
                            </h3>
                            <p>Joined AzzyWrites</p>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="w-full lg:w-10/12">
                            <div className="category_list">
                              <Tabs>
                                <TabList>
                                  <Tab>All</Tab>
                                  <Tab>Writing</Tab>
                                  <Tab>Coding</Tab>
                                  <Tab>Studying/Work</Tab>
                                  <Tab>Language</Tab>
                                  <Tab>Creative</Tab>
                                </TabList>

                                <TabPanel>
                                  <div className="category_list_area">
                                    <h2 className="text-blacks font-bold text-2xl ml-2 mb-1">
                                      Popular
                                    </h2>

                                    <div className="flex flex-wrap">
                                      {tools?.details?.popular_tools?.map(
                                        (tool) => (
                                          <div className="w-full md:w-4/12">
                                            <NavLink
                                              key={tool?.id}
                                              activeClassName="active"
                                              to={`/tooldetails/${tool.id}`}
                                            >
                                              <div className="category_list_item mx-2">
                                                <div className="category_list_item_desc">
                                                  <h3>{tool?.tools_name}</h3>
                                                  <p>
                                                    {tool?.description.length >
                                                    35
                                                      ? tool?.description.substring(
                                                          0,
                                                          35
                                                        ) + "..."
                                                      : tool?.description}
                                                  </p>
                                                </div>
                                                <img
                                                  src={tool?.avatar}
                                                  width="70"
                                                  height="70"
                                                  className="rounded-full"
                                                />
                                              </div>
                                            </NavLink>
                                          </div>
                                        )
                                      )}
                                    </div>

                                    <div className="flex justify-center items-center my-8">
                                      <button
                                        onClick={handleShowTools}
                                        className="bg-[#ba9e63] text-white px-5 py-2 rounded-full text-[14px] font-medium hover:bg-black"
                                      >
                                        {isShownTools == true
                                          ? "See Less"
                                          : "See More"}
                                      </button>
                                    </div>

                                    {isShownTools && (
                                      <div className="flex flex-wrap">
                                        {tools?.details?.regular_tools?.map(
                                          (tool) => (
                                            <div className="w-full md:w-4/12">
                                              <NavLink
                                                key={tool?.id}
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <div className="category_list_item mx-2">
                                                  <div className="category_list_item_desc">
                                                    <h3>{tool?.tools_name}</h3>
                                                    <p>
                                                      {tool?.description
                                                        .length > 35
                                                        ? tool?.description.substring(
                                                            0,
                                                            35
                                                          ) + "..."
                                                        : tool?.description}
                                                    </p>
                                                  </div>
                                                  <img
                                                    src={tool?.avatar}
                                                    width="70"
                                                    height="70"
                                                    className="rounded-full"
                                                  />
                                                </div>
                                              </NavLink>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </TabPanel>
                                <TabPanel>
                                  <div className="category_list_area">
                                    <h2 className="text-blacks font-bold text-2xl ml-2 mb-1">
                                      Writing
                                    </h2>
                                    <div className="flex flex-wrap">
                                      {tools?.details?.writing?.map((tool) => (
                                        <div className="w-full md:w-4/12">
                                          <NavLink
                                            key={tool?.id}
                                            activeClassName="active"
                                            to={`/tooldetails/${tool.id}`}
                                          >
                                            <div className="category_list_item mx-2">
                                              <div className="category_list_item_desc">
                                                <h3>{tool?.tools_name}</h3>
                                                <p>
                                                  {tool?.description.length > 35
                                                    ? tool?.description.substring(
                                                        0,
                                                        35
                                                      ) + "..."
                                                    : tool?.description}
                                                </p>
                                              </div>
                                              <img
                                                src={tool?.avatar}
                                                width="70"
                                                height="70"
                                                className="rounded-full"
                                              />
                                            </div>
                                          </NavLink>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </TabPanel>
                                <TabPanel>
                                  <div className="category_list_area">
                                    <h2 className="text-blacks font-bold text-2xl ml-2 mb-1">
                                      Coding
                                    </h2>
                                    <div className="flex flex-wrap">
                                      {tools?.details?.coding?.map((tool) => (
                                        <div className="w-full md:w-4/12">
                                          <NavLink
                                            key={tool?.id}
                                            activeClassName="active"
                                            to={`/tooldetails/${tool.id}`}
                                          >
                                            <div className="category_list_item mx-2">
                                              <div className="category_list_item_desc">
                                                <h3>{tool?.tools_name}</h3>
                                                <p>
                                                  {tool?.description.length > 35
                                                    ? tool?.description.substring(
                                                        0,
                                                        35
                                                      ) + "..."
                                                    : tool?.description}
                                                </p>
                                              </div>
                                              <img
                                                src={tool?.avatar}
                                                width="70"
                                                height="70"
                                                className="rounded-full"
                                              />
                                            </div>
                                          </NavLink>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </TabPanel>
                                <TabPanel>
                                  <div className="category_list_area">
                                    <h2 className="text-blacks font-bold text-2xl ml-2 mb-1">
                                      Studying/Work
                                    </h2>
                                    <div className="flex flex-wrap">
                                      {tools?.details?.studying_work?.map(
                                        (tool) => (
                                          <div className="w-full md:w-4/12">
                                            <NavLink
                                              key={tool?.id}
                                              activeClassName="active"
                                              to={`/tooldetails/${tool.id}`}
                                            >
                                              <div className="category_list_item mx-2">
                                                <div className="category_list_item_desc">
                                                  <h3>{tool?.tools_name}</h3>
                                                  <p>
                                                    {tool?.description.length >
                                                    35
                                                      ? tool?.description.substring(
                                                          0,
                                                          35
                                                        ) + "..."
                                                      : tool?.description}
                                                  </p>
                                                </div>
                                                <img
                                                  src={tool?.avatar}
                                                  width="70"
                                                  height="70"
                                                  className="rounded-full"
                                                />
                                              </div>
                                            </NavLink>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </TabPanel>
                                <TabPanel>
                                  <div className="category_list_area">
                                    <h2 className="text-blacks font-bold text-2xl ml-2 mb-1">
                                      Language
                                    </h2>
                                    <div className="flex flex-wrap">
                                      {tools?.details?.language?.map((tool) => (
                                        <div className="w-full md:w-4/12">
                                          <NavLink
                                            key={tool?.id}
                                            activeClassName="active"
                                            to={`/tooldetails/${tool.id}`}
                                          >
                                            <div className="category_list_item mx-2">
                                              <div className="category_list_item_desc">
                                                <h3>{tool?.tools_name}</h3>
                                                <p>
                                                  {tool?.description.length > 35
                                                    ? tool?.description.substring(
                                                        0,
                                                        35
                                                      ) + "..."
                                                    : tool?.description}
                                                </p>
                                              </div>
                                              <img
                                                src={tool?.avatar}
                                                width="70"
                                                height="70"
                                                className="rounded-full"
                                              />
                                            </div>
                                          </NavLink>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </TabPanel>
                                <TabPanel>
                                  <div className="category_list_area">
                                    <h2 className="text-blacks font-bold text-2xl ml-2 mb-1">
                                      Creative
                                    </h2>
                                    <div className="flex flex-wrap">
                                      {tools?.details?.creative?.map((tool) => (
                                        <div className="w-full md:w-4/12">
                                          <NavLink
                                            key={tool?.id}
                                            activeClassName="active"
                                            to={`/tooldetails/${tool.id}`}
                                          >
                                            <div className="category_list_item mx-2">
                                              <div className="category_list_item_desc">
                                                <h3>{tool?.tools_name}</h3>
                                                <p>
                                                  {tool?.description.length > 35
                                                    ? tool?.description.substring(
                                                        0,
                                                        35
                                                      ) + "..."
                                                    : tool?.description}
                                                </p>
                                              </div>
                                              <img
                                                src={tool?.avatar}
                                                width="70"
                                                height="70"
                                                className="rounded-full"
                                              />
                                            </div>
                                          </NavLink>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </TabPanel>
                              </Tabs>
                            </div>
                          </div>
                          <div className="w-full lg:w-2/12 bg-[#eeeeee] h-full p-2 rounded-md py-4 hidden lg:block">
                            <p className="mb-4 flex text-black hover:text-[#ba9e63] text-[12px] font-bold items-center justify-center cursor-pointer">
                              <AiOutlineUserAdd className="text-base mr-[0]" />
                              Refer a friend
                            </p>
                            <h2 className="text-center text-3xl text-black font-bold px-4">
                              When we think outside the box!
                            </h2>
                            <div className="text-center my-3">
                              <img src={thinkBox} className="inline-block" />
                            </div>
                            <div className="flex items-center justify-center my-4">
                              <Link
                                to="/your-account"
                                className="text-3xl text-black hover:text-[#ba9e63]"
                              >
                                <IoSettingsOutline />
                              </Link>
                            </div>
                            <p className="text-center lg:text-left mb-4 lg:mb-0 text-sm text-white font-medium">
                              <ul className="flex justify-center">
                                <li className="mr-1">
                                  <Link
                                    to="http://tinyurl.com/ycycuk23"
                                    target="_blank"
                                    className="text-2xl text-[#0866ff] opacity-100 hover:opacity-50"
                                  >
                                    <BsFacebook />
                                  </Link>
                                </li>
                                <li className="mr-1">
                                  <Link
                                    to="https://rb.gy/oo46bi"
                                    target="_blank"
                                    className="text-2xl text-[#d82e7c] opacity-100 hover:opacity-50"
                                  >
                                    <FaInstagramSquare />
                                  </Link>
                                </li>
                                <li className="mr-1">
                                  <Link
                                    to="https://rb.gy/arphgy"
                                    target="_blank"
                                    className="text-2xl text-[#1fa3f4] opacity-100 hover:opacity-50"
                                  >
                                    <BsTwitter />
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="https://rb.gy/p55o30"
                                    target="_blank"
                                    className="opacity-100 hover:opacity-50"
                                  >
                                    <img
                                      src={tiktokIcon}
                                      className="w-[25px]"
                                    />
                                  </Link>
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </TabPanel>
                    </section>

                    {/* <section>
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
                    </section> */}

                    {/* <section>
                      <TabPanel>4</TabPanel>
                    </section>

                    <section>
                      <TabPanel>5</TabPanel>
                    </section>

                    <section>
                      <TabPanel>6</TabPanel>
                    </section> */}
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

export default Dashboard;
