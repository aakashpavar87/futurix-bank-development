/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

function LoanHome() {
  // Sample loan data

  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);

  const toggleContent1 = () => {
    setShowContent1(true);
    setShowContent2(false);
  };
  const toggleContent2 = () => {
    setShowContent1(false);
    setShowContent2(true);
  };

  return (
    <div className=" container mx-auto mt-8 min-w-md  rounded-3xl shadow-md text-black">
      <h2 className="text-cyan-400 text-2xl py-2 px-2 font-bold mb-4">
        There is Two type of loan available in our Banking Website.
      </h2>
      <button
        onClick={toggleContent1}
        className="mr-auto bg-transparent border-blue-700 hover:bg-blue-700 text-cyan-100 text-xl font-bold py-2 px-4 roundedo"
      >
        Personal Loan
      </button>
      {showContent1 && (
        <div className="mr-auto">
          <br />
          <h2 className="text-colors-violet8 text-xl py-2 px-2 font-bold ">
            What is a Personal Loan?
          </h2>
          <p className="text-colors-violet5 py-2 px-2">
            A personal loan is a type of loan that allows you to borrow a fixed
            amount of money from a lender, such as a bank, credit union, or
            online lender. Unlike other types of loans, like auto loans or
            mortgages, personal loans are typically unsecured, meaning they
            aren't backed by collateral like your car or home.
          </p>
          <h2 className="text-colors-violet8 text-xl py-2 px-2 font-bold ">
            How Do Personal Loans Work?
          </h2>
          <p className="text-colors-violet5 py-2 px-2">
            When you take out a personal loan, you'll receive a lump sum of
            money that you'll repay over a set period of time, usually in fixed
            monthly installments. The interest rate on a personal loan can be
            fixed (stays the same throughout the loan term) or variable
            (fluctuates based on market conditions). Your credit score, income,
            and debt-to-income ratio will typically determine the interest rate
            you qualify for.
          </p>
        </div>
      )}
      <br />
      <br />
      <button
        onClick={toggleContent2}
        className="mr-auto bg-transparent  hover:bg-blue-700 border-blue-700 text-cyan-100 text-xl font-bold py-2 px-4 roundedo"
      >
        Business Loan
      </button>
      {showContent2 && (
        <div className="mr-auto">
          <br />

          <h2 className="text-colors-violet8 text-xl py-2 px-2 font-bold ">
            What is a Business Loan?
          </h2>
          <p className="text-colors-violet5 py-2 px-2">
            A business loan is a type of financing designed specifically for
            businesses to cover expenses, expand operations, invest in
            equipment, manage cash flow, or pursue other opportunities. Business
            loans come in various forms and are offered by banks, credit unions,
            online lenders, and other financial institutions.
          </p>
          <h2 className="text-colors-violet8 text-xl py-2 px-2 font-bold ">
            Benefits:
          </h2>
          <p className="text-colors-violet5 py-2 px-2">
            Access to Capital: Provides businesses with the funds needed to grow
            and thrive.
            <br />
            Building Credit: Responsible repayment can help establish or improve
            business credit.
          </p>
        </div>
      )}
      <br />
      <br />
      <Link to={"/profile/loan-contract"}>
        <button className="mr-auto bg-transparent  hover:bg-blue-700 border-blue-700 text-red-600 text-xl font-bold py-2 px-4 roundedo">
          Apply Now
        </button>
      </Link>
    </div>
  );
}

export default LoanHome;
