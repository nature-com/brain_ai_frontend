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
import { toolsList } from "../../slices/ToolsSlice";

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
                            {/* <TabPanel>
                              <div className="category_list_area">
                                <div className="flex flex-wrap">
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/essay-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Essay writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
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
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/paragraph-generator"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Paragraph generator</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={paragraphGeneratorIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/email-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Email writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={emailWrittingIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/text-summarizer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Text summarizer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={textSummariserIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/python-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Python writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={PythonWriterIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/love-letter"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Love letter</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={loveLetterIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/csharp-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>C# Writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={cSharpIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/go-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Go Writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={goLanguageIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/class-absent"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Class Absent Excuse</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={ClassAbsentExcuseIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/grammer-fixer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Grammer Fixer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={GrammerFixerIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/poetry-summarizer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Poetry summarizer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={PoetrySummariserIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/maths-science"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Maths And Science</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={mathsScienceIcons}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/java-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Java Writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={JavaWriterIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/js-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>JavaScript Writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={JavaScriptWriterIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/bpi-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Blog Post Idea</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={BlogIdeaIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/french-tutor"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>French Tutor</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={FrenchTutorIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/arabic-tutor"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Arabic Tutor</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={ArabicTutorIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/jstopython-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Js To Python</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={JavascriptPythonIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/mandarin-tutor"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Mandarin Tutor</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={MandarinTutorIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/russian-tutor"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Russian Tutor</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={RussianTutorIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/japanese-tutor"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Japanese Tutor</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={JapaneseTutorIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/spanish-tutor"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Spanish Tutor</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={SpanishTutorIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/email-responder"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Email Responder</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={EmailResponderIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/caption-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Caption writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={CaptionWriterIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/question-solver"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Question Solver</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={QuestionSolverIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/text-note"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Text To Note</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={textNoteIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/conclusion-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Conclusion writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={conclusionWriterIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/sentence-expander"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Sentence Expander</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={SentenceExpanderIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/personal-bio"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Personal Bio</h3>

                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={PersonalBioIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/song-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Song Writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={SongWriterIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/script-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Script Writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={ScriptWriterIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/book-summarizer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Book summarizer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={BookSummarizerIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/hook-generator"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Hook generator</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={HookGeneratorIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/story-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Creative Story</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={CreativeStoryIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/personalstatement-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Personal Statement Writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={PersonalStatementIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/moviescene-analysis"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Movie Scene Analysis</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={MovieSceneAnalysisIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/content-improver"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Content improver</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={ContentImproverIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/resume-bullet"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Resume Bullet Points</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={ResumeBulletPointsIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/humanize-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Humanizer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={HumanizeIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/citation-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Citation Writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={CitationIcon}
                                          width="70"
                                          height="70"
                                          className="rounded-full"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className="category_list_area">
                                <div className="flex flex-wrap">
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/csharp-writer"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>C# Writer</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={paragraphIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Email</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={emailIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className="category_list_area">
                                <div className="flex flex-wrap">
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Paragraph Generator</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={paragraphIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </TabPanel>
                            <TabPanel>
                              <div className="category_list_area">
                                <div className="flex flex-wrap">
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Paragraph Generator</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={paragraphIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Email</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={emailIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Paragraph Generator</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={paragraphIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Email</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={emailIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Paragraph Generator</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={paragraphIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Email</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={emailIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Paragraph Generator</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={paragraphIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                  <div className="w-full md:w-4/12">
                                    <NavLink
                                      activeClassName="active"
                                      to="/tooldetails"
                                    >
                                      <div className="category_list_item mx-2">
                                        <div className="category_list_item_desc">
                                          <h3>Email</h3>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                          </p>
                                        </div>
                                        <img
                                          src={emailIcon3}
                                          width="70"
                                          height="70"
                                        />
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </TabPanel> */}
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
