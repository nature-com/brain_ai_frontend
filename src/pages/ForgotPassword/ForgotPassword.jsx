import { Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../reducers/AuthSlice";

const ForgotPassword = ({ openForgotPasswordModal, setOpenForgotPasswordModal }) => {
    const dispatch = useDispatch();
    const { loading, message } = useSelector((state) => state.auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (email) => {
        dispatch(forgotPassword(email));
    }

    return (
        <>
            <Modal
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
                                                {...register("email", {
                                                    required: "Email is required",
                                                })}
                                            />
                                            {errors?.email?.message && (
                                                <h6 className="text-danger text-red-500">
                                                    {errors.email.message}
                                                </h6>
                                            )}

                                        </div>
                                        <button
                                            type="submit"
                                            className="rounded-full text-sm mb-0 uppercase h-11 bg-[#b3975f] w-full text-white hover:bg-[#c9b575]"
                                            disabled={loading}
                                        >
                                            {loading ? "Wait..." : "Send"}
                                        </button>

                                        <div className="text-center text-green-500 font-bold mt-2">{message}</div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ForgotPassword;