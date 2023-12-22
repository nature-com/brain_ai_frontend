import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
  paragraphGeneratorIcon,
  emailWrittingIcon,
  textSummariserIcon,
  PythonWriterIcon,
  loveLetterIcon,
  cSharpIcon,
  goLanguageIcon,
  ClassAbsentExcuseIcon,
  GrammerFixerIcon,
  PoetrySummariserIcon,
  mathsScienceIcons,
  JavaWriterIcon,
  JavaScriptWriterIcon,
  BlogIdeaIcon,
  FrenchTutorIcon,
  ArabicTutorIcon,
  JavascriptPythonIcon,
  RussianTutorIcon,
  JapaneseTutorIcon,
  MandarinTutorIcon,
  QuestionSolverIcon,
  CaptionWriterIcon,
  EmailResponderIcon,
  SpanishTutorIcon,
  textNoteIcon,
  conclusionWriterIcon,
  SentenceExpanderIcon,
  PersonalBioIcon,
  SongWriterIcon,
  ScriptWriterIcon,
  BookSummarizerIcon,
  HookGeneratorIcon,
  CreativeStoryIcon,
  PersonalStatementIcon,
  MovieSceneAnalysisIcon,
  ContentImproverIcon,
  ResumeBulletPointsIcon,
  HumanizeIcon,
  CitationIcon,
} from "../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import { toolsList } from "../../reducers/ToolsSlice";

const Dashboard = () => {
 const dispatch = useDispatch();
 const [tools,setTools] = useState();
 const toolList = useSelector((state) => state.tools.toolsList);

 useEffect(() => {
  dispatch(toolsList());
 },[]);

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
                  <div className="w-full lg:w-3/12">
                    <div className="sidebar_tab">
                      <TabList>
                        <Tab>Past paper</Tab>
                        <Tab>Paragraph generator</Tab>
                        <Tab>Text to image</Tab>
                        <Tab>Essay writer</Tab>
                        <Tab>Email writer</Tab>
                        <Tab>Documents</Tab>
                      </TabList>
                    </div>
                  </div>

                  <div className="w-full lg:w-9/12">
                    <section>
                      <TabPanel>
                        <div className="admin_banner">
                          <h1>Work smart not harder with My Brain</h1>
                          <img src={adminBanner2} width="" height="" />
                        </div>

                        <div className="share_setting_box">
                          <ul>
                            <li>
                              <img src={shareIcon} width="20" height="20" />
                            </li>
                            <li>
                              <img src={settingIcon} width="20" height="20" />
                            </li>
                          </ul>
                        </div>

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
                                  
                                  {tools?.details?.map((tool)=>(
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
                                            ? tool?.description.substring(0, 35) + '...'
                                            : tool?.description}
                                          </p>
                                        </div>
                                        <img
                                          src={essayWriterIcon}
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
