import { Link } from "react-router-dom";

const PaymentFailed = () => {
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <h2 className="mb-2 text-2xl font-semibold text-black">
          Payment Not Received
        </h2>
        <p className="text-gray-600">
          We are unable to recieved your payment. <br />
          Please tray again later. :(
        </p><br />
        <Link to={'/'}><button className="bg-black rounded-md text-white px-5 py-2">Home</button></Link>
      </div>
    </div>
  );
};

export default PaymentFailed;
