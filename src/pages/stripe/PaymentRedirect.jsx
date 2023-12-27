import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stripePayment } from "../../reducers/PlansSlice";

const PaymentRedirect = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  
    const token =
      JSON.parse(localStorage.getItem('userToken')) ||
      JSON.parse(localStorage.getItem('regToken'));
  
    const custId = localStorage.getItem('custId');
    const userId = JSON.parse(localStorage.getItem('userId'));
    const planId = localStorage.getItem('planId');
    const subscriptionId = localStorage.getItem('subscriptionId');
  
    const urlString = window.location.href;
    const urlParams = new URLSearchParams(urlString);
  
    // Access individual parameters
    const redirectStatus = urlParams.get('redirect_status');
    // console.log('redirectStatus', redirectStatus);
    if (!redirectStatus) {
      window.location.href = `${import.meta.env.VITE_FRONT_BASE_URL}/dashboard`;
    }
  
  
    useEffect(() => {
      // Retrieve the payment token from wherever you have stored it
      const paymentToken = localStorage.getItem('subscription_complete');
      console.log(paymentToken);
      // console.log('user id in payment redirect', userId.user_id);
      // console.log('plan id in payment redirect', planId);
      dispatch(
        stripePayment({
          token: token?.token,
          user_id: userId.user_id,
          plan_id: planId,
          customer_id: custId,
          subscription_id: subscriptionId,
          entity: 'subscription_complete',
        })
      ).then(() => {
        const userToken = localStorage.getItem('userToken');
        console.log('userToken :>> ', userToken);
        if (userToken !== null) {
          // localStorage.removeItem('subscriptionId');
          // localStorage.removeItem('custId');
          setTimeout(function () {
            // window.location.href = `${
            //   import.meta.env.VITE_FRONT_BASE_URL
            // }/dashboard`;
            navigate('/dashboard');
          }, 10000);
        } else {
          localStorage.setItem(
            'userToken',
            JSON.stringify(token)
          );
          localStorage.removeItem('regToken');
          
          setTimeout(function () {
            navigate('/dashboard');
          }, 10000);
        }
      });
    }, [dispatch, stripePayment, planId, userId]);
  
    return (
      <div className='h-96 flex justify-center items-center'>
        <div className='container mx-auto mt-3'>
          {/* Alert with success style */}
          <div
            className='bg-green-100 border-l-4 border-green-500 text-green-700 p-4'
            role='alert'
          >
            <p className='font-bold'>Success!</p>
            <p>You have been subscribed successfully</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PaymentRedirect;
  