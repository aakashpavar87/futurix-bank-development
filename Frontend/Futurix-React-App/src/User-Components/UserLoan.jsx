/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const onSubmit = (data) => {
    data["loanType"] = selectedOption;
    console.log(data);
    navigate("/profile/loan");
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
        className="text-black max-w-md mx-auto rounded-3xl shadow-md"
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
          <div className="relative">
            <select
              value={selectedOption}
              id="loanstatus"
              name="loanstatus"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "loanstatus" ? "animate-pulse" : ""
              }`}
              onChange={handleLoanStatusChange}
              onFocus={() => handleFocus("loanstatus")}
              onBlur={handleBlur}
            >
              <option value="">Select Loan Type</option>
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
          </div>

          {loanstatus === "personal" && (
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
                <input
                  type="text"
                  id="creditScore"
                  name="creditScore"
                  {...register("creditScore", { required: true })}
                  placeholder="Enter Your Credit Score"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                    focusedInput === "creditScore" ? "animate-pulse" : ""
                  }`}
                  style={{
                    transition: "background-color 0.3s",
                    background: borderColor,
                  }}
                  onFocus={() => handleFocus("creditScore")}
                  onBlur={handleBlur}
                />
                {errors.creditScore && (
                  <p className="text-amber-400 text-xs mt-1">
                    Enter Your Credit Score
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
          )}

          {/* Render additional fields based on selected loan and business type */}

          {loanstatus === "business" && (
            <>
              {/* Fields for startup */}
              <div className="relative">
                <input
                  type="text"
                  id="GSTNumber"
                  name="GSTNumber"
                  {...register("GSTNumber", { required: true })}
                  placeholder="Enter GST Number"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                    focusedInput === "GSTNumber" ? "animate-pulse" : ""
                  }`}
                  style={{
                    transition: "background-color 0.3s",
                    background: borderColor,
                  }}
                  onFocus={() => handleFocus("GSTNumber")}
                  onBlur={handleBlur}
                />
                {errors.GSTNumber && (
                  <p className="text-amber-400 text-xs mt-1">
                    Enter GST Number
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  {...register("businessName", { required: true })}
                  placeholder="Business Name"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                    focusedInput === "businessName" ? "animate-pulse" : ""
                  }`}
                  style={{
                    transition: "background-color 0.3s",
                    background: borderColor,
                  }}
                  onFocus={() => handleFocus("businessName")}
                  onBlur={handleBlur}
                />
                {errors.businessName && (
                  <p className="text-amber-400 text-xs mt-1">
                    Enter Your Business Name
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Business Email"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                    focusedInput === "email" ? "animate-pulse" : ""
                  }`}
                  style={{
                    transition: "background-color 0.3s",
                    background: borderColor,
                  }}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                />
                {errors.email && (
                  <p className="text-amber-400 text-xs mt-1">
                    Enter valid Email
                  </p>
                )}
              </div>

              {/* <div className="relative">
                <input
                  type="text"
                  id="GSTNumber"
                  name="GSTNumber"
                  {...register("GSTNumber", { required: true })}
                  placeholder="Enter GST Number"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                    focusedInput === "GSTNumber" ? "animate-pulse" : ""
                  }`}
                  style={{
                    transition: "background-color 0.3s",
                    background: borderColor,
                  }}
                  onFocus={() => handleFocus("GSTNumber")}
                  onBlur={handleBlur}
                />
              </div> */}

              <div className="relative">
                <input
                  type="text"
                  id="businessDomain"
                  name="businessDomain"
                  {...register("businessDomain", { required: true })}
                  placeholder="Business Domain"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                    focusedInput === "businessDomain" ? "animate-pulse" : ""
                  }`}
                  style={{
                    transition: "background-color 0.3s",
                    background: borderColor,
                  }}
                  onFocus={() => handleFocus("businessDomain")}
                  onBlur={handleBlur}
                />
                {errors.businessDomain && (
                  <p className="text-amber-400 text-xs mt-1">
                    Please enter Your Business Domain
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="revenuePerMonth"
                  name="revenuePerMonth"
                  {...register("revenuePerYear", { required: true })}
                  placeholder="Revenue Per Year"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                    focusedInput === "revenuePerYear" ? "animate-pulse" : ""
                  }`}
                  style={{
                    transition: "background-color 0.3s",
                    background: borderColor,
                  }}
                  onFocus={() => handleFocus("revenuePerYear")}
                  onBlur={handleBlur}
                />
                {errors.revenuePerMonth && (
                  <p className="text-amber-400 text-xs mt-1">
                    Enter Your Revenue (per Month)
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="yearsInBusiness"
                  name="yearsInBusiness"
                  {...register("yearsInBusiness", { required: true })}
                  placeholder="Years in Business"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                    focusedInput === "yearsInBusiness" ? "animate-pulse" : ""
                  }`}
                  style={{
                    transition: "background-color 0.3s",
                    background: borderColor,
                  }}
                  onFocus={() => handleFocus("yearsInBusiness")}
                  onBlur={handleBlur}
                />
                {errors.yearsInBusiness && (
                  <p className="text-amber-400 text-xs mt-1">
                    Enter Years in Business
                  </p>
                )}
              </div>

              <div className="flex">
                <label className="text-white">
                  Upload Business Registration Document
                </label>
                <input
                  type="file"
                  {...register("businessRegistrationDocument", {
                    required: true,
                  })}
                  className="border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-100 focus:ring-blue-100"
                />
                {errors.businessRegistrationDocument && (
                  <p className="text-amber-400 text-xs mt-1">Upload Document</p>
                )}
              </div>
              {/* Other fields for startup */}
            </>
          )}
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
