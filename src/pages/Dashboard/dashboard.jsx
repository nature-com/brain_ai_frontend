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
} from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { toolsList } from "../../reducers/ToolsSlice";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [tools, setTools] = useState();
  const toolList = useSelector((state) => state.tools.toolsList);

  useEffect(() => {
    dispatch(toolsList());
  }, []);

  useEffect(() => {
    if (Object.keys(toolList).length) {
      setTools(toolList);
    }
  }, [toolList]);

  return (
    <div>
      <div className="pt-2.5 pb-12">
        <div className="container max-w-6xl mx-auto py-4 px-0">
          <div className="my_account_section">
            <article className="tabbed-content bg-white p-7 rounded-2xl tabs-side flex">
              <Tabs className="w-full">
                <div className="flex-none lg:flex">
                  <div className="w-full lg:w-2/12">
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
                                  <Tab>Education</Tab>
                                  <Tab>Images</Tab>
                                  <Tab>Web use</Tab>
                                  <Tab>See all</Tab>
                                </TabList>

                                <TabPanel>
                                  <div className="category_list_area">
                                    <div className="flex flex-wrap">
                                      {tools?.details?.map((tool) => (
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
                          <div className="w-full lg:w-2/12 bg-[#eeeeee] h-full p-2 rounded-md py-4">
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
                              <Link className="text-3xl text-black hover:text-[#ba9e63]">
                                <IoSettingsOutline />
                              </Link>
                            </div>
                            <p className="text-center lg:text-left mb-4 lg:mb-0 text-sm text-white font-medium">
                              <ul className="flex justify-center">
                                <li className="mr-1">
                                  <Link className="text-2xl text-[#0866ff] opacity-100 hover:opacity-50">
                                    <BsFacebook />
                                  </Link>
                                </li>
                                <li className="mr-1">
                                  <Link className="text-2xl text-[#d82e7c] opacity-100 hover:opacity-50">
                                    <FaInstagramSquare />
                                  </Link>
                                </li>
                                <li className="mr-1">
                                  <Link className="text-2xl text-[#1fa3f4] opacity-100 hover:opacity-50">
                                    <BsTwitter />
                                  </Link>
                                </li>
                                <li>
                                  <Link className="opacity-100 hover:opacity-50">
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
                      <TabPanel>2</TabPanel>
                    </section>

                    <section>
                      <TabPanel>3</TabPanel>
                    </section>

                    <section>
                      <TabPanel>4</TabPanel>
                    </section>

                    <section>
                      <TabPanel>5</TabPanel>
                    </section>

                    <section>
                      <TabPanel>6</TabPanel>
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

export default Dashboard;
