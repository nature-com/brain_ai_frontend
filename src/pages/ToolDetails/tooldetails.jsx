import React, { useRef, useEffect, useState } from "react";
import {
  NavLink,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { audioIcon, toolBrain } from "../../assets/images/images";
import { BiArrowBack } from "../../assets/icons/index";
import Loader from "../Loader/Loader";
import axios from "axios";
import sanitizeHtml from "sanitize-html";
import { useDispatch, useSelector } from "react-redux";
import { fileUpload, generateAnswer, toolsById } from "../../reducers/ToolsSlice";
import { useForm } from "react-hook-form";

import { FileInput, Label } from "flowbite-react";

const Tooldetails = ({ setIsFileUploaded }) => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [tooldetails, setToolDetails] = useState();

  let { id } = useParams();

  const dispatch = useDispatch();
  const { message, error, isLoading, toolsDetails, answer, audioAnswer } = useSelector((state) => state.tools);
  // console.log(toolsDetails);


  useEffect(() => {
    dispatch(toolsById(id));
  }, []);

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

  /**
 * Validates an audio file to ensure it meets specified criteria.
 *
 * @param {FileList} audio_file - The FileList object representing the selected audio file.
 * @returns {string|null} - Returns a validation error message if any, or null if the file is valid.
 */
  const validateAudioFile = (audio_file) => {
    if (!audio_file) {
      return "File is required";
    }

    const allowedFormats = [
      "audio/mpeg",
      "audio/wav",
      "audio/mp3",
      // Add more allowed audio formats as needed
    ];

    const fileType = audio_file[0].type;

    if (!allowedFormats.includes(fileType)) {
      return "Invalid file format. Only MP3, WAV, and MPEG audio files are allowed.";
    }

    const fileExtension = audio_file[0].name.split(".").pop().toLowerCase();
    if (!["mp3", "wav"].includes(fileExtension)) {
      return "Invalid file extension. Only MP3 and WAV files are allowed.";
    }

    return null;
  };


  const onSubmit = (data) => {
    const newData = {
      ...data,
      description: tooldetails?.details?.description,
      tools_name: tooldetails?.details?.tools_name,
    };
    dispatch(generateAnswer(newData));
  };

  const onSubmit2 = (audio_file) => {
    dispatch(fileUpload({ audio_file: audio_file.audio_file[0] })).then(() =>
      setIsFileUploaded(true)
    );
  }

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    } else if (!error && message) {
      setSuccessMessage(message);
    }
  }, [message, error]);

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

  const location = useLocation();
  const isTool = (endPoint) => {
    return location.pathname === endPoint;
  };

  return (
    <div>
      <div className="pt-2.5 pb-6 md:pb-12 px-6 lg:px-0 min-h-[600px]">
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

                    {isTool("/tooldetails/42") ? (
                      <form onSubmit={handleSubmit(onSubmit2)}>
                        <div className="mt-6">
                          <div className="mb-1 flex items-center">
                            <img
                              src={audioIcon}
                              alt="audioIcon"
                              className="w-12 mr-1"
                            />
                            <Label
                              htmlFor="file-upload"
                              value="Upload audio file"
                            />
                          </div>
                          <FileInput
                            id="audio_file"
                            {...register("audio_file", {
                              required: "File is required",
                              validate: validateAudioFile,
                            })}
                          />
                          {errors?.audio_file?.message && (
                            <h6 className="text-red-500">{errors.audio_file.message}</h6>
                          )}
                        </div>
                        <button
                          type="submit"
                          className="w-full text-sm font-medium text-white px-5 py-2 mt-8 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black"
                        >
                          Generate
                        </button>
                      </form>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="text-sm font-normal pb-2 text-black block">
                          Prompt
                        </label>
                        <textarea
                          placeholder="Write your query here"
                          className="h-24 text-sm text-gray-400 w-full border border-solid border-gray-400 rounded-lg"
                          rows="3"
                          {...register("subject")}
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
                    )}
                  </div>
                </div>
                {isTool("/tooldetails/43") && (
                  <>
                    <div className="flex justify-center">
                      <button
                        onClick={() => navigate("/tooldetails/45")}
                        type="submit"
                        className=" text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black mt-10"
                      >
                        Paraphrase
                      </button>
                    </div>
                    <p className="text-center pt-2">
                      If your test comes back plagiarised, Click paraphrase to
                      access the Text Rewriter tool as it rewrite your texts,
                      making it undetectable from the internet.
                    </p>
                  </>
                )}
                {isTool("/tooldetails/45") && (
                  <>
                    <div className="flex justify-center">
                      <button
                        onClick={() => navigate("/tooldetails/43")}
                        type="submit"
                        className=" text-sm font-medium text-white px-5 py-2 mr-2 lg:mr-0 bg-[#b3975f] rounded-lg hover:bg-black mt-10"
                      >
                        Ckeck Plagiarism
                      </button>
                    </div>
                    <p className="text-center pt-2">
                      Check to see if your text is plagiarised. Copy your text
                      and paste it into the plagiarism checker.
                    </p>
                  </>
                )}
              </div>

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
                        src={import.meta.env.VITE_API_BASE_URL}
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
                        // src={import.meta.env.VITE_API_BASE_URL}
                        src={tooldetails?.details?.avatar}
                        width="100"
                        height="100"
                      />

                      {isTool("/tooldetails/42") ? (
                        <>
                          {audioAnswer ? (
                            <>
                              <p className="text-base font-normal pb-3 text-black text-justify whitespace-pre-wrap">
                                {audioAnswer}
                              </p>
                            </>
                          ) : (
                            <h2 className="text-2xl font-semibold pb-3 text-black">
                              Your text will appear here
                            </h2>
                          )}
                        </>
                      ) : (
                        <>
                          {answer ? (
                            <>
                              <p className="text-base font-normal pb-3 text-black text-justify whitespace-pre-wrap">
                                {answer}
                              </p>
                            </>
                          ) : (
                            <h2 className="text-2xl font-semibold pb-3 text-black">
                              Your text will appear here
                            </h2>
                          )}
                        </>
                      )}

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
