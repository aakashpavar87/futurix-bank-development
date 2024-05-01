/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createLoan, createPersonalLoan } from "../apis/LoanApi";
import { UserContext } from "../contexts/userContext";

const LoanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loanstatus, setloanstatus] = useState("");
  const [loanstatusselected, setloanstatusselected] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const myUser = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    let creditScore = "";
    if (data.incomeRange === "100000") {
      creditScore = 500;
    } else if (data.incomeRange === "300000") {
      creditScore = 600;
    } else if (data.incomeRange === "500000") {
      creditScore = 700;
    } else {
      creditScore = 800;
    }
    data["loanType"] = selectedOption;
    const loanRes = await createLoan(
      myUser?.userData?.id,
      data.amountNeeded,
      "personal",
      data.durationInYears
    );
    const personalLoan = await createPersonalLoan(
      loanRes?.data?.Loan_id,
      creditScore,
      data.reasonForLoan,
      data.employmentType,
      data.incomeRange
    );
    console.log(data);
    navigate("/profile/loandashboard", {
      state: "Congrats your loan has approved Please re-login to view changes",
    });
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };
  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleLoanStatusChange = (e) => {
    setloanstatus(e.target.value);
    setloanstatusselected(true);
    setSelectedOption(e.target.value);
  };

  const borderColor = focusedInput
    ? "bg-gradient-to-r from-blue-500 to-blue-700"
    : "";

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: "linear-gradient(180deg, #050c1b, #2a4365)",
        padding: "25px",
        borderRadius: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-white max-w-md mx-auto rounded-3xl shadow-md"
        style={{
          backgroundColor: "#050c1b",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          Loan Application Form
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <>
            <div className="flex">
              <label className="text-white">Upload Asset Documents</label>
              <input
                type="file"
                id="assetDocuments"
                name="assetDocuments"
                {...register("assetDocuments", { required: true })}
                className="border rounded-md px-3 py-2 w-full shadow-sm
                    shadow-white focus:border-blue-100 focus:ring-blue-100"
              />
              {errors.assetDocuments && (
                <p className="text-amber-400 text-xs mt-1">
                  {" "}
                  Documents Are Required
                </p>
              )}
            </div>
            <div className="flex">
              <label className="text-white">Upload Your Identity Proof</label>
              <input
                type="file"
                id="identityProof"
                name="identityProof"
                {...register("identityProof", { required: true })}
                className="border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-100 focus:ring-blue-100"
              />
              {errors.identityProof && (
                <p className="text-amber-400 text-xs mt-1">
                  Identity Proof Required
                </p>
              )}
            </div>
            <div className="relative">
              <select
                {...register("employmentType", { required: true })}
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                  focusedInput === "employmentType" ? "animate-pulse" : ""
                }`}
                style={{
                  transition: "background-color 0.3s",
                  background: borderColor,
                }}
                onFocus={() => handleFocus("employmentType")}
                onBlur={handleBlur}
              >
                <option value="">Select Employment Type</option>
                <option value="employe">Employe</option>
                <option value="businessmen">Businessmen</option>
              </select>
              {errors.employmentType && (
                <p className="text-amber-400 text-xs">
                  Please select an employment type
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                id="amountNeeded"
                name="amountNeeded"
                {...register("amountNeeded", { required: true })}
                placeholder="Amount Needed"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                  focusedInput === "amountNeeded" ? "animate-pulse" : ""
                }`}
                style={{
                  transition: "background-color 0.3s",
                  background: borderColor,
                }}
                onFocus={() => handleFocus("amountNeeded")}
                onBlur={handleBlur}
              />
              {errors.amountNeeded && (
                <p className="text-amber-400 text-xs mt-1">
                  Please Enter Amount
                </p>
              )}
            </div>

            <div className="relative">
              <select
                id="incomeRange"
                name="incomeRange"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                                     focus:border-blue-500 focus:ring-blue-500 ${
                                       focusedInput === "incomeRange"
                                         ? "animate-pulse"
                                         : ""
                                     }`}
                {...register("incomeRange", { required: true })}
                onFocus={() => handleFocus("incomeRange")}
                onBlur={handleBlur}
              >
                <option value="">Choose Income Range</option>
                <option value="100000">0 - 200000</option>
                <option value="300000">200001 - 400000</option>
                <option value="500000">400001 - 600000</option>
                <option value="700000">6000001 - 800000</option>
                {/* Add more income ranges here */}
              </select>
              {errors.incomeRange && (
                <p className="text-amber-400 text-xs mt-1">
                  Please Select Your Income
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                id="durationInYears"
                name="durationInYears"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                  focusedInput === "durationInYears" ? "animate-pulse" : ""
                }`}
                {...register("durationInYears", { required: true })}
                autoComplete="off"
                placeholder="Enter Duration"
                style={{
                  transition: "background-color 0.3s",
                  background: borderColor,
                }}
                onFocus={() => handleFocus("durationInYears")}
                onBlur={handleBlur}
              />
              {errors.durationInYears && (
                <p className="text-amber-400 text-xs mt-1">
                  Duration is required
                </p>
              )}
            </div>

            <div className="relative">
              <textarea
                {...register("reasonForLoan", { required: true })}
                placeholder="Reason for Personal Loan"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                  focusedInput === "reasonForLoan" ? "animate-pulse" : ""
                }`}
                style={{
                  transition: "background-color 0.3s",
                  background: borderColor,
                }}
                onFocus={() => handleFocus("reasonForLoan")}
                onBlur={handleBlur}
              />
              {errors.reasonForLoan && (
                <p className="text-amber-400 text-xs mt-1">
                  Enter Your Reason for Loan
                </p>
              )}
            </div>
          </>

          {/* Render additional fields based on selected loan and business type */}
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Apply for Loan
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanForm;
