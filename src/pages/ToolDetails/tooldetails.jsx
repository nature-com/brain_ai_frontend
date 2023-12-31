import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLoaderData, useLocation, useParams } from "react-router-dom";
import { toolBrain } from "../../assets/images/images";
import { BiArrowBack } from "../../assets/icons/index";
import Loader from "../Loader/Loader";
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import { useDispatch, useSelector } from "react-redux";
import { generateAnswer, toolsById} from "../../reducers/ToolsSlice";
import { useForm } from "react-hook-form";

const Tooldetails = () => {
  const [prompt, setPrompt] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [loading, setLoading] = useState(false);
  const [tooldetails,setToolDetails] = useState();
  const {isLoading} = useSelector((state)=>state.tools);

  let { id } = useParams();

  const dispatch = useDispatch();
  const {toolsDetails, answer} = useSelector((state) => state.tools);

  useEffect(() => {
    dispatch(toolsById(id));
  },[]);

  useEffect(() => {
    if (Object.keys(toolsDetails).length) {
      setToolDetails(toolsDetails);
    }
  }, [toolsDetails]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = {
      ...data,
      description: tooldetails?.details?.tools_name,
    }
    dispatch(generateAnswer(newData))
  };


  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  function renderContentWithLineBreaks(content) {
    content = content.replace(/\n/g, "<br>");

    const contentWithoutFirstTwoBreaks = content.replace(
      /<br\s*\/?>/g,
      (match, offset) => {
        if (offset < 10) {
          return "";
        } else {
          return match;
        }
      }
    );

    return contentWithoutFirstTwoBreaks;
  }

  return (
    <div>
      <div className="pt-2.5 pb-6 md:pb-12 px-6 lg:px-0">
        <div>
          <div className="container max-w-6xl mx-auto py-4 px-0">
            <div className="top_bar">
              <h2>
                <NavLink activeClassName="active" to="/dashboard">
                  <BiArrowBack size={25} color="#b3975f" />
                </NavLink>
              </h2>
            </div>
          </div>
        </div>

        <div>
          <div className="container max-w-6xl mx-auto py-4 px-0">
            <div className="flex-none md:flex justify-between">
              <div className="w-full md:w-5/12 mb-6 md:mb-0">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold pb-1 md:pb-3 text-black">
                    {tooldetails?.details?.tools_name}
                  </h2>
                  <p className="text-base font-normal pb-3 text-black">
                    {tooldetails?.details?.description}
                  </p>

                  <div className="prompt_input_section">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-sm font-normal pb-2 text-black block">
                      Prompt
                    </label>
                    <textarea
                      placeholder="Write your query here"
                      className="h-24 text-sm text-gray-400 w-full border border-solid border-gray-400 rounded-lg"
                      rows="3"
                      {...register('subject')} 
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                      ></textarea>
                    <button
                      type="submit"
                      className="w-full text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black"
                    >
                      Generate
                    </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* <div className="w-full md:w-6/12">
                <div className="text-center">
                  <img
                    className="inline-block mb-2"
                    src={toolBrain}
                    width="100"
                    height="100"
                  />
                  <h2 className="text-2xl font-semibold pb-3 text-black">
                    Your text will appear here
                  </h2>
                  <p className="text-base font-normal pb-3 text-black">
                    After you hit "Generate", the Ai output will be shown here
                  </p>
                </div>
              </div> */}

              {isLoading ? (
                <div className="w-full md:w-1/2">
                  <div className="text-center">
                    <div className="prompt_answer_section">
                      <Loader />
                    </div>
                  </div>
                </div>
              ) : paragraph ? (
                <div className="md:w-1/2">
                  <div className="text-center">
                    <div className="prompt_answer_section">
                      <img
                        className="inline-block mb-2"
                        src={import.meta.env.VITE_API_BASE_URL }
                        width="100"
                        height="100"
                      />
                      <div
                        className="paragraph_answer_section text-left"
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHtml(
                            renderContentWithLineBreaks(paragraph)
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="md:w-1/2">
                  <div className="text-center">
                    <div className="prompt_answer_section">
                      <img
                        className="inline-block mb-2"
                        src={import.meta.env.VITE_API_BASE_URL }
                        width="100"
                        height="100"
                      />
                      <h2 className="text-2xl font-semibold pb-3 text-black">
                        Your text will appear here
                      </h2>
                      <p className="text-base font-normal pb-3 text-black text-justify">
                      {answer}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooldetails;
