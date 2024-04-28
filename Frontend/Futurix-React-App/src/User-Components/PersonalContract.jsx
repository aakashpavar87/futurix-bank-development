/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function PersonalContract() {
  return (
    <div
      className=" items-center min-h-screen "
      style={{
        backgroundImage: "linear-gradient(180deg, #050c1b, #2a4365)",
        padding: "25px",
      }}
    >
      <h1 className="text-5xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">
        E Contract For Personal Loan
      </h1>
      <div>
        <br />
        <h5 className=" text-2xl ml-10 text-white font-bold   hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          1. Parties:
        </h5>

        <p className="text-xl ml-20">
          This Personal Loan Agreement ("Agreement") is entered into between:
          <br />
          {/* - Lender: [Lender's Full Legal Name], a lending institution located at [Lender's Address], [City], [State], [Zip Code]<br /> */}
          - Borrower: [Borrower's Full Legal Name], located at [Borrower's
          Address], [City], [State], [Zip Code]
        </p>
        <br />
        <h5 className=" text-2xl ml-10 text-white font-bold   hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          2. Loan Details:
        </h5>
        <p className="text-xl ml-20">
          - Loan Amount: The lender agrees to lend the borrower the principal
          sum of [Loan Amount] (the "Loan").
          <br />
          - Interest Rate: The Loan shall accrue interest at an annual rate of
          [Interest Rate]%, compounded [Compounding Frequency].
          <br />
          - Repayment Term: The borrower shall repay the Loan in [Number of
          Installments] installments of [Installment Amount] each, due on [Due
          Date of Each Installment].
          <br />
          - Loan Purpose: The Loan shall be used for [Loan Purpose], as agreed
          upon by the parties.
          <br />
        </p>
        <br />

        <h5 className=" text-2xl ml-10 text-white font-bold   hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          3. Repayment Terms:
        </h5>
        <p className="text-xl ml-20">
          - Payment Schedule: The borrower shall make payments to the lender
          according to the following schedule:
          <br />
          - Installment 1: [Payment Amount], due on [Due Date]
          <br />
          - Installment 2: [Payment Amount], due on [Due Date]
          <br />
          ... - Late Fees: Late payments shall incur a late fee of [Late Fee
          Amount] per day after the due date.
        </p>
        <br />

        <h5 className=" text-2xl ml-10 text-white font-bold   hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          4. Security and Collateral:
        </h5>
        <p className="text-xl ml-20">
          {" "}
          - Collateral: The borrower agrees to provide [Description of
          Collateral] as security for the Loan.
          <br />{" "}
        </p>
        <br />

        <h5 className=" text-2xl ml-10 text-white font-bold   hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          5. Default and Remedies:
        </h5>
        <p className="text-xl ml-20">
          {" "}
          - Default: The borrower shall be considered in default if any payment
          is not made by the due date.
          <br />- Remedies: In the event of default, the lender may pursue
          remedies including but not limited to acceleration of the Loan,
          enforcement of security interests, and legal action.
        </p>
        <br />

        <h5 className=" text-2xl ml-10 text-white font-bold   hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          6. Electronic Signatures:
        </h5>
        <p className="text-xl ml-20">
          - Electronic Signature: The parties acknowledge and agree that
          electronic signatures shall be deemed valid and binding for the
          execution of this Agreement.
        </p>

        <br />
        <h5 className=" text-2xl ml-10 text-white font-bold   hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          7. Governing Law and Jurisdiction:
        </h5>
        <p className="text-xl ml-20">
          - Governing Law: This Agreement shall be governed by the laws of
          [State].
          <br />- Jurisdiction: Any legal actions arising under this Agreement
          shall be brought in the courts of [City], [State].
        </p>

        <br />
        <h5 className=" text-2xl ml-10 text-white font-bold   hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          8. Entire Agreement:
        </h5>
        <p className="text-xl ml-20">
          - Entire Agreement: This Agreement constitutes the entire agreement
          between the parties and supersedes any prior agreements or
          understandings.
        </p>
        <br />
        <br />
        <p className="ml-10 text-2xl text-amber-300 hover:text-red-400 duration-300 cursor-pointer">
          If You Agree For this Agreement
          <input type="checkbox" className="ml-4" />{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <Link to={"/profile/loanapply"}>
          <button className="text-xl text-black hover:text- bg-amber-200">
            {" "}
            Agree
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PersonalContract;
