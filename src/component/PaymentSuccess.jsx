import { Link, useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const {trans_id} = useParams();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-10 bg-white shadow-md rounded-md text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-black rounded-full">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h2 className="mb-2 text-2xl font-semibold text-black">Success</h2>
        <p className="text-gray-600">
          We received your purchase request; we&apos;ll be in touch shortly!
        </p><br />
        <p className="text-gray-600">
          Your Transection Id: <span className="text-black">{trans_id}</span>
        </p><br />
        <Link to={'https://focus-haven-1.onrender.com'}><button className="bg-black rounded-md text-white px-5 py-2">Home</button></Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
