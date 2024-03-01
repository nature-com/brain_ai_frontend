import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink, useNavigate, Navigate } from "react-router-dom";

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
import { clearAnswer, toolsListTwo } from "../../reducers/ToolsSlice";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Select,
  Tooltip,
} from "flowbite-react";

import Modals from "../Modal/Modals";
import { editProfile } from "../../reducers/ProfileSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tools, setTools] = useState();
  const toolList = useSelector((state) => state.tools.toolsList);
  const token = localStorage.getItem("userToken");
  const email = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");
  const isSubscribed = JSON.parse(localStorage.getItem("isSubscribed"));
  const subscribed = isSubscribed.isSubscribed;

  useEffect(() => {
    dispatch(toolsListTwo());
    dispatch(clearAnswer());
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

  const { profile } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(editProfile(profile));
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const pastPaperGenerator = () => {
    if (profile[0]?.user_subscriptions[0]?.plan?.name === "Platinum") {
      navigate("/tooldetails/44");
    } else {
      setOpenModal(true);
    }
  };
  const aiDetector = () => {
    if (profile[0]?.user_subscriptions[0]?.plan?.name === "Platinum") {
      navigate("/tooldetails/40");
    } else {
      setOpenModal(true);
    }
  };
  const speechToText = () => {
    if (profile[0]?.user_subscriptions[0]?.plan?.name === "Platinum") {
      navigate("/tooldetails/42");
    } else {
      setOpenModal(true);
    }
  };

  const mathsAndScience = () => {
    try {
      if (profile[0]?.user_subscriptions[0]?.plan?.name === "Gold" || profile[0]?.user_subscriptions[0]?.plan?.name === "Platinum") {
        navigate('/tooldetails/12');
        // <Navigate to="/tooldetails/12" replace={true} />
        // navigate("/tooldetails/12", { replace: true });
      } else {
        setOpenModal(true);
      }
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  const plagarismCheck = () => {
    if (profile[0]?.user_subscriptions[0]?.plan?.name === "Gold" || profile[0]?.user_subscriptions[0]?.plan?.name === "Platinum") {
      navigate("/tooldetails/43");
    } else {
      setOpenModal(true);
    }
  };

  const textWriter = () => {
    if (profile[0]?.user_subscriptions[0]?.plan?.name === "Gold" || profile[0]?.user_subscriptions[0]?.plan?.name === "Platinum") {
      navigate("/tooldetails/45");
    } else {
      setOpenModal(true);
    }
  };

  return (
    <div>
      <div className="pt-2.5 pb-12">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div className="my_account_section">
            <article className="tabbed-content bg-white p-7 rounded-2xl tabs-side flex">
              {subscribed === null ? (
                <div className="text-[#ba9e63] font-medium text-base">
                  Please subscribe for using our AI Tools
                </div>
              ) : (
                <Tabs className="w-full">
                  <div className="flex-none lg:flex">
                    <div className="w-full lg:w-2/12">
                      <div className="flex items-center mb-6">
                        <div>
                          <img
                            src={profile[0]?.avatar}
                            className="rounded-full overflow-hidden w-11 h-11 border border-[#c9af71] mr-2"
                          />
                        </div>

                        <div className="text-[#ba9e63] font-medium text-base">
                          {profile[0]?.first_name}
                        </div>
                      </div>
                      <div className="sidebar_tab">
                        <TabList>
                          <Tab>Dashboard</Tab>
                          <Tab>All Tools</Tab>
                          <Tab>
                            <Link to="/tooldetails/1">Essay writer</Link>
                          </Tab>
                          <Tab>
                            <Link to="/tooldetails/2">Paragraph Generator</Link>
                          </Tab>
                          <Tab className="gold_plan">Gold Plan Features</Tab>
                          <Tab>
                            <button onClick={mathsAndScience}>
                              Maths and Science
                            </button>
                          </Tab>
                          <Tab>
                            <button onClick={plagarismCheck}>
                              Plagiarism Checker
                            </button>
                          </Tab>
                          <Tab>
                            <button onClick={textWriter}>
                              Sentence rewriter
                            </button>
                          </Tab>
                          <Tab className="platinum_plan">
                            Platinum Plan Features
                          </Tab>
                          <Tab>
                            <button onClick={pastPaperGenerator}>
                              Past Paper Generator
                            </button>
                          </Tab>
                          <Tab>
                            <button onClick={aiDetector}>AI Detector</button>
                          </Tab>
                          <Tab>
                            <button onClick={speechToText}>
                              Speech To Text
                            </button>
                          </Tab>
                        </TabList>
                      </div>
                    </div>

                    <div className="w-full lg:w-10/12">
                      <section>
                        <TabPanel>
                          <div className="flex justify-between items-center px-2 mb-4">
                            <div className="">
                              <h2 className="text-blacks font-bold text-3xl uppercase">
                                WORK SMARTER WITH AZZYWRITES
                              </h2>
                            </div>
                            <div className="flex items-center">
                              <Link
                                to="/your-account"
                                className="text-[14px] font-semibold text-black mr-8 hover:text-[#ba9e63] underline"
                              >
                                Your Profile
                              </Link>
                              <div className="text-center">
                                <h3 className="text-[#ba9e63] font-bold text-xl uppercase">
                                  25,502
                                </h3>
                                <p>Joined AzzyWrites</p>
                              </div>
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
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
                                              </NavLink>
                                            </div>
                                          )
                                        )}
                                      </div>

                                      {/* <div className="flex justify-center items-center my-8">
                                        <button
                                          onClick={handleShowTools}
                                          className="bg-[#ba9e63] text-white px-5 py-2 rounded-full text-[14px] font-medium hover:bg-black"
                                        >
                                          See More
                                        </button>
                                      </div> */}

                                      {/* <div className="flex justify-center items-center my-8">
                                        <button
                                          onClick={handleShowTools}
                                          className="bg-[#ba9e63] text-white px-5 py-2 rounded-full text-[14px] font-medium hover:bg-black"
                                        >
                                          {isShownTools == true
                                            ? "See Less"
                                            : "See More"}
                                        </button>
                                      </div> */}

                                      {/* {isShownTools && (
                                        <div className="flex flex-wrap">
                                          {tools?.details?.regular_tools?.map(
                                            (tool) => (
                                              <div
                                                key={tool?.id}
                                                className="w-full md:w-4/12"
                                              >
                                                <NavLink
                                                  activeClassName="active"
                                                  to={`/tooldetails/${tool.id}`}
                                                >
                                                  <Tooltip
                                                    content={tool?.description}
                                                  >
                                                    <div className="category_list_item mx-2">
                                                      <div className="category_list_item_desc">
                                                        <h3>
                                                          {tool?.tools_name}
                                                        </h3>
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
                                                  </Tooltip>
                                                </NavLink>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      )} */}
                                    </div>
                                  </TabPanel>
                                  <TabPanel>
                                    <div className="category_list_area">
                                      <h2 className="text-blacks font-bold text-2xl ml-2 mb-1">
                                        Writing
                                      </h2>
                                      <div className="flex flex-wrap">
                                        {tools?.details?.writing?.map(
                                          (tool) => (
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
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
                                        Coding
                                      </h2>
                                      <div className="flex flex-wrap">
                                        {tools?.details?.coding?.map((tool) => (
                                          <div
                                            key={tool?.id}
                                            className="w-full md:w-4/12"
                                          >
                                            <NavLink
                                              activeClassName="active"
                                              to={`/tooldetails/${tool.id}`}
                                            >
                                              <Tooltip
                                                content={tool?.description}
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
                                              </Tooltip>
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
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
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
                                        {tools?.details?.language?.map(
                                          (tool) => (
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
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
                                        Creative
                                      </h2>
                                      <div className="flex flex-wrap">
                                        {tools?.details?.creative?.map(
                                          (tool) => (
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
                                              </NavLink>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </TabPanel>
                                </Tabs>
                              </div>
                            </div>
                            <div className="w-full lg:w-2/12 bg-[#eeeeee] h-full p-2 rounded-md py-4 hidden lg:block">
                              {/* <p className="mb-4 flex text-black hover:text-[#ba9e63] text-[12px] font-bold items-center justify-center cursor-pointer">
                                <AiOutlineUserAdd className="text-base mr-[0]" />
                                Refer a friend
                              </p> */}

                              <h2 className="text-center text-3xl text-black font-bold px-4">
                                When we think outside the box!
                              </h2>
                              <div className="text-center my-3">
                                <img src={thinkBox} className="inline-block" />
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
                      <section>
                        <TabPanel>
                          <div className="flex justify-between items-center px-2 mb-4">
                            <div className="">
                              <h2 className="text-blacks font-bold text-3xl uppercase">
                                WORK SMARTER WITH AZZYWRITES
                              </h2>
                            </div>
                            <div className="flex items-center">
                              <Link
                                to="/your-account"
                                className="text-[14px] font-semibold text-black mr-8 hover:text-[#ba9e63] underline"
                              >
                                Your Profile
                              </Link>
                              <div className="text-center">
                                <h3 className="text-[#ba9e63] font-bold text-xl uppercase">
                                  25,502
                                </h3>
                                <p>Joined AzzyWrites</p>
                              </div>
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
                                        All Tools
                                      </h2>

                                      <div className="flex flex-wrap">
                                        {tools?.details?.regular_tools?.map(
                                          (tool) => (
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
                                              </NavLink>
                                            </div>
                                          )
                                        )}
                                        {tools?.details?.popular_tools?.map(
                                          (tool) => (
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
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
                                        Writing
                                      </h2>
                                      <div className="flex flex-wrap">
                                        {tools?.details?.writing?.map(
                                          (tool) => (
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
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
                                        Coding
                                      </h2>
                                      <div className="flex flex-wrap">
                                        {tools?.details?.coding?.map((tool) => (
                                          <div
                                            key={tool?.id}
                                            className="w-full md:w-4/12"
                                          >
                                            <NavLink
                                              activeClassName="active"
                                              to={`/tooldetails/${tool.id}`}
                                            >
                                              <Tooltip
                                                content={tool?.description}
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
                                              </Tooltip>
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
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
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
                                        {tools?.details?.language?.map(
                                          (tool) => (
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
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
                                        Creative
                                      </h2>
                                      <div className="flex flex-wrap">
                                        {tools?.details?.creative?.map(
                                          (tool) => (
                                            <div
                                              key={tool?.id}
                                              className="w-full md:w-4/12"
                                            >
                                              <NavLink
                                                activeClassName="active"
                                                to={`/tooldetails/${tool.id}`}
                                              >
                                                <Tooltip
                                                  content={tool?.description}
                                                >
                                                  <div className="category_list_item mx-2">
                                                    <div className="category_list_item_desc">
                                                      <h3>
                                                        {tool?.tools_name}
                                                      </h3>
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
                                                </Tooltip>
                                              </NavLink>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </TabPanel>
                                </Tabs>
                              </div>
                            </div>
                            <div className="w-full lg:w-2/12 bg-[#eeeeee] h-full p-2 rounded-md py-4 hidden lg:block">
                              {/* <p className="mb-4 flex text-black hover:text-[#ba9e63] text-[12px] font-bold items-center justify-center cursor-pointer">
                                <AiOutlineUserAdd className="text-base mr-[0]" />
                                Refer a friend
                              </p> */}

                              <h2 className="text-center text-3xl text-black font-bold px-4">
                                When we think outside the box!
                              </h2>
                              <div className="text-center my-3">
                                <img src={thinkBox} className="inline-block" />
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
                    </div>
                  </div>
                </Tabs>
              )}
            </article>
          </div>
          {openModal && (
            <Modals openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
