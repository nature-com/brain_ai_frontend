import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, resetAfterLoggedIn } from "../../reducers/AuthSlice";
import { formImage } from "../../assets/images/images";
import { AiFillCloseCircle, BsFacebook, BsGoogle } from "../../assets/icons";
import { Button, Modal } from "flowbite-react";
import { useGoogleLogin } from "@react-oauth/google";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const Login = ({ openLoginModal, setOpenLoginModal }) => {
  const formButtonRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, isLoggedIn, error, loading } = useSelector(
    (state) => state.auth
  );
  // const subscription = localStorage.getItem("isSubscribed");
  const [errorMessage, setErrorMessage] = useState(null);
  const isSubscribed = JSON.parse(localStorage.getItem("isSubscribed"));
  const subscribed = isSubscribed.isSubscribed;
  console.log("isSubscribed", isSubscribed);
  console.log("subscribed", subscribed);

  const handleLinkClick = () => {
    if (formButtonRef.current) {
      formButtonRef.current.click();
    }
    setOpenLoginModal(false);
  };

  const handleLinkClick2 = () => {
    if (formButtonRef.current) {
      formButtonRef.current.click();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    if (event.target.id === "loginForm") {
      event.preventDefault();
      dispatch(login(data));
      // setOpenLoginModal(false);
    }
  };

  useEffect(() => {
    if (error && message) {
      setErrorMessage(message);
      const timeoutId = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    } else if (isLoggedIn) {
      dispatch(resetAfterLoggedIn());
      // navigate("/dashboard");
      if (subscribed === null) {
        <div>Please subscribe to access the tools</div>
      } else {
        navigate("/dashboard");
      }
    }
  }, [message, error, isLoggedIn]);

  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);

  const handleForgotPassword = () => {
    // setOpenLoginModal(false);
    setOpenForgotPasswordModal(true);
  };

  // google login button
  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      localStorage.setItem('googleAccessToken', codeResponse.access_token);
      navigate('/google-redirect');
    },
    onError: (error) => console.log('Login Failed:', error),
  });

  return (
    <>
      <Modal
        className="relative"
        show={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        size="3xl"
      >
        <Modal.Header className="border-0 p-0 m-0 absolute z-10 right-1 top-1">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="p-0 m-0">
          <div className="modal-box relative">
            <div className="flex w-full max-w-7xl">
              <div className="hidden lg:block w-1/2">
                <div className="form_image rounded-2xl overflow-hidden">
                  <img src={formImage} />
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-4 bg-[#fff1d2] rounded-r-2xl">
                <div className="px-3 py-4 lg:py-8">
                  <h2 className="text-3xl text-center mb-4 text-[#ba9e63] font-bold">
                    Login
                  </h2>
                  {errorMessage && (
                    <div
                      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      <span className="font-medium">Failed! </span>{" "}
                      {errorMessage}
                    </div>
                  )}
                  <p className="text-center text-sm text-neutral-600 pb-4">
                    For a new user,
                    <Link
                      className="pl-2 text-[#ba9e63] hover:text-neutral-600"
                      to="/registration"
                      onClick={handleLinkClick}
                    >
                      Sign Up
                    </Link>
                  </p>
                  <form
                    id="loginForm"
                    onSubmit={(event) => handleSubmit(onSubmit)(event)}
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        autoComplete="off"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message:
                              "Entered value does not match email format",
                          },
                        })}
                      />
                      {errors?.email?.message && (
                        <h6 className="text-danger text-red-500">
                          {errors.email.message}
                        </h6>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-2"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        autoComplete="off"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      {errors?.password?.message && (
                        <h6 className="text-danger text-red-500">
                          {errors.password.message}
                        </h6>
                      )}
                    </div>
                    <div className="text-[12px] text-black hover:text-[#ba9e63] mb-3 ml-2">
                      <button type="button" onClick={handleForgotPassword}>
                        Forgot Password?
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="rounded-full text-sm mb-0 uppercase h-11 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                      disabled={loading}
                    >
                      {loading ? "Wait..." : "Login"}
                    </button>
                  </form>
                  <p className="text-center text-sm my-4">OR</p>
                  <div className="mb-3">
                    <Button
                      className="flex justify-center items-center bg-red-500 hover:bg-red-800 rounded-full text-base h-11 border border-red-800 border-solid w-full"
                      onClick={() => googleLogin()}
                    >
                      <span className="pe-3 text-sm text-white">
                        Sign in with Google
                      </span>
                      <BsGoogle className="text-white" size={25} />
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center p-0 m-0">
                  By Signing up, you agree to our{" "}
                  <Link
                    to="/terms-and-condtions"
                    className="pl-1 text-[#ba9e63] hover:text-gray-600"
                  >
                    Terms and conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    className="pl-1 text-[#ba9e63] hover:text-gray-600"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and occasionally receive emails from us.
                </p>
              </div>
            </div>
            {/* <div className="modal-action absolute right-4 top-4">
              <form method="dialog">
                <button ref={formButtonRef}>
                  <AiFillCloseCircle
                    className="text-[#ba9e63] hover:text-[#ba913a]"
                    size={25}
                  />
                </button>
              </form>
            </div> */}
          </div>
        </Modal.Body>
      </Modal>
      {/*  */}
      {openForgotPasswordModal && <ForgotPassword
        openForgotPasswordModal={openForgotPasswordModal}
        setOpenForgotPasswordModal={setOpenForgotPasswordModal}
      />}
      {/* <Modal
        show={openForgotPasswordModal}
        onClose={() => setOpenForgotPasswordModal(false)}
      >
        <Modal.Header className="border-0 p-0 m-0 absolute z-10 right-1 top-1">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="p-0 m-0">
          <div className="modal-box relative">
            <div className="flex w-full max-w-7xl">
              <div className="w-full p-4 bg-[#fff1d2] rounded-2xl">
                <div className="px-3 py-4 lg:py-8">
                  <h2 className="text-3xl text-center mb-4 text-[#ba9e63] font-bold">
                    Forgot Password
                  </h2>
                  <p className="text-center text-sm text-neutral-600 pb-4">
                    Please enter your mail id below
                  </p>
                  <form
                    id="forgotPasswordForm"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        autoComplete="off"
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-full text-sm mb-0 uppercase h-11 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                      disabled={loading}
                    >
                      {loading ? "Wait..." : "Send"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
      {/*  */}
    </>
  );
};

export default Login;
