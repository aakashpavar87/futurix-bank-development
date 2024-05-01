/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getOneLoan } from "../apis/LoanApi";
import { UserContext } from "../contexts/userContext";
function LoanDashboard() {
  const location = useLocation();

  const state = location.state;

  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  const myUser = useContext(UserContext);
  useEffect(() => {
    showToastMessage(state, false);
    getOneLoan(myUser?.userData?.id);
  }, []);
  // Sample loan data
  const [loanData, setLoanData] = useState({
    loanAmount: 10000,
    interestRate: 5,
    repaymentPeriod: 12,
    remainingBalance: 10000,
    installmentAmount: 0,
    nextDueDate: "",
    paymentHistory: [
      {
        date: "2024-04-01",
        amount: 800,
        principal: 700,
        interest: 100,
        remainingBalance: 9200,
      },
      {
        date: "2024-03-01",
        amount: 800,
        principal: 700,
        interest: 100,
        remainingBalance: 10000,
      },
      // Add more payment history data as needed
    ],
  });

  // Calculate installment amount
  const calculateInstallment = () => {
    const { loanAmount, interestRate, repaymentPeriod } = loanData;
    const monthlyInterestRate = interestRate / 100 / 12;
    const installment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -repaymentPeriod));
    return installment;
  };

  // Update installment amount and next due date
  const updateInstallmentAndDueDate = () => {
    const installment = calculateInstallment();
    const currentDate = new Date();
    const nextDueDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setLoanData((prevState) => ({
      ...prevState,
      installmentAmount: installment.toFixed(2),
      nextDueDate: nextDueDate.toDateString(),
    }));
  };

  // Function to format currency
  const formatCurrency = (amount) => {
    console.log(amount);
    return `amount`;
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleString("default", {
      month: "long",
    })} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const navigate = useNavigate();
  const onsubmit = () => {
    navigate("/profile/loanpayment");
  };

  // Call function to calculate installment amount and next due date on component mount
  useState(() => {
    updateInstallmentAndDueDate();
  }, []);

  return (
    <div className=" container mx-auto mt-8 max-w-md  rounded-3xl shadow-md text-black">
      <h1 className="text-white text-3xl font-bold mb-4">Loan Dashboard</h1>
      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Loan Details</h2>
        <p>
          <span className="font-bold">Loan Amount:</span>{" "}
          {formatCurrency(loanData.loanAmount)}
        </p>
        <p>
          <span className="font-bold">Interest Rate:</span>{" "}
          {loanData.interestRate}%
        </p>
        <p>
          <span className="font-bold">Repayment Period:</span>{" "}
          {loanData.repaymentPeriod} months
        </p>
        <p>
          <span className="font-bold">Next Installment Due Date:</span>{" "}
          {loanData.nextDueDate}
        </p>
        <p>
          <span className="font-bold">Remaining Balance:</span>{" "}
          {formatCurrency(loanData.remainingBalance)}
        </p>
        <p>
          <span className="font-bold">Monthly Installment Amount:</span>{" "}
          {formatCurrency(loanData.installmentAmount)}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-bold mb-2">Payment History</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th>Date</th>
              <th>Payment Amount</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Remaining Balance</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loanData.paymentHistory.map((payment, index) => (
              <tr key={index}>
                <td>{formatDate(payment.date)}</td>
                <td>{formatCurrency(payment.amount)}</td>
                <td>{formatCurrency(payment.principal)}</td>
                <td>{formatCurrency(payment.interest)}</td>
                <td>{formatCurrency(payment.remainingBalance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" container mx-auto mt-8 max-w-md  rounded-3xl shadow-md text-black">
        <div className="flex justify-center">
          <button
            onClick={onsubmit}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Pay Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoanDashboard;
