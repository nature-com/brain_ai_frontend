import {
    useStripe,
    useElements,
    PaymentElement,
  } from '@stripe/react-stripe-js';
  
const CheckoutForm = ({ setErrorMessage }) => {
    const stripe = useStripe();
    const elements = useElements();
    const returnUrl = `${import.meta.env.VITE_FRONT_BASE_URL}/payment-redirect`;
  
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
          redirect: 'always',
        })
        .then(function (result) {
          if (result.error) {
            setErrorMessage(result.error.message);
            console.log(result.error.message);
          } else if (result.paymentIntent.status == 'succeeded') {
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
  