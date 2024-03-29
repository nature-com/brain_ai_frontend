import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';

const CheckoutForm = ({
  errorMessage,
  setErrorMessage,
  customer_id,
  subscription_id,
  plan_id,
  user_id,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const returnUrl = `${import.meta.env.VITE_FRONT_BASE_URL
    }/payment-redirect/?customer_id=${encodeURIComponent(
      customer_id
    )}&subscription_id=${encodeURIComponent(
      subscription_id
    )}&plan_id=${plan_id}&user_id=${user_id}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: returnUrl,
        },
      })
      .then(function (error) {
        if (error.error) {
          setErrorMessage(error.error.message);
        }
      });
  };


  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type='submit'
        className='w-full h-12 mt-2 mb-0 text-sm text-white uppercase bg-[#ba9e63] rounded-full hover:bg-black'
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
