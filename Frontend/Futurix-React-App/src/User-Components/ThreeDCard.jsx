import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const ThreeDCard = () => {
  return (
    <div className="w-[80vw] mx-auto ">
      <div className="relative mx-auto max-w-md bg-blue-300 shadow-xl rounded-md p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-blue-400 rounded-md shadow-lg"></div>
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-2">
            Open an Account
          </h2>
          <p className="text-white mb-4">
            You don't have an account. Open one now and get your virtual debit
            card!
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
            <Link to={"/profile/account-apply"}>Open Account</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeDCard;
