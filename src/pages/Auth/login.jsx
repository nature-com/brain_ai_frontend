import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, resetAfterLoggedIn } from "../../reducers/AuthSlice";
import { formImage } from "../../assets/images/images";
import { AiFillCloseCircle, BsFacebook, BsGoogle } from "../../assets/icons";

const Login = () => {
  const formButtonRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, isLoggedIn, error, loading } = useSelector(
    (state) => state.auth
  );
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLinkClick = () => {
    if (formButtonRef.current) {
      formButtonRef.current.click();
    }
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

  const onSubmit = (data) => {
    dispatch(login(data));
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
      navigate("/dashboard");
    }
  }, [message, error, isLoggedIn]);

  return (
    <>
      <dialog
        id="my_modal_4"
        className="modal w-11/12 md:w-3/5 lg:w-full max-w-3xl rounded-2xl overflow-hidden"
      >
        <div className="modal-box relative">
          <div className="flex w-full max-w-7xl">
            <div className="hidden lg:block w-1/2">
              <div className="form_image">
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
                    <span className="font-medium">Failed! </span> {errorMessage}
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
                <form onSubmit={handleSubmit(onSubmit)}>
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
                          message: "Entered value does not match email format",
                        },
                      })}
                    />
                    {errors?.email?.message && (
                      <h6 className="text-danger">{errors.email.message}</h6>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="rounded-full text-sm h-11 border border-slate-400 border-solid w-full mb-3"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      autoComplete="off"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors?.password?.message && (
                      <h6 className="text-danger">{errors.password.message}</h6>
                    )}
                  </div>
                  <div className="text-sm text-blue-600 mb-2">
                    <Link to="/forgot-password" onClick={handleLinkClick2}>
                      Forgot Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="rounded-full text-sm mb-0 uppercase h-11 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                    disabled={loading}
                  >
                    {loading ? "Wait..." : "Login"}
                  </button>
                  {/* <button
                      type="submit"
                      className="rounded-full text-sm mb-0 uppercase h-11 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                    >
                      Login
                    </button> */}
                </form>
                <p className="text-center text-sm my-4">OR</p>
                <div className="mb-3">
                  <Link
                    className="flex justify-center items-center bg-red-500 hover:bg-red-800 rounded-full text-base h-11 border border-red-800 border-solid w-full"
                    to="/"
                  >
                    <span className="pe-3 text-sm text-white">
                      Sign in with Google
                    </span>
                    <BsGoogle className="text-white" size={25} />
                  </Link>
                </div>
                {/* <div className="mb-3">
                    <Link
                      className="flex justify-center items-center bg-blue-800 hover:bg-blue-700 rounded-full text-base h-11 border border-blue-800 border-solid w-full"
                      to="/"
                    >
                      <span className="pe-3 text-sm text-blue-300">
                        Sign in with Facebook
                      </span>
                      <BsFacebook className="text-blue-300" size={25} />
                    </Link>
                  </div> */}
              </div>
              {/* <p className="text-xs text-gray-600 text-center p-0 m-0">
                By joining, you agree to the Fiverr
                <Link className="pl-1 text-[#ba9e63] hover:text-gray-600">
                  Terms of Service
                </Link>
                and to occasionally receive emails from us. Please read our
                <Link className="pl-1 text-[#ba9e63] hover:text-gray-600">
                  Privacy
                </Link>
              </p> */}
              <p className="text-xs text-gray-600 text-center p-0 m-0">
                By Signing up, you agree to our{" "}
                <Link className="pl-1 text-[#ba9e63] hover:text-gray-600">
                  Terms of Service
                </Link>{" "}
                and Privacy Policy and occasionally receive emails from us.
              </p>
            </div>
          </div>
          <div className="modal-action absolute right-4 top-4">
            <form method="dialog">
              <button ref={formButtonRef}>
                <AiFillCloseCircle
                  className="text-[#ba9e63] hover:text-[#ba913a]"
                  size={25}
                />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Login;
