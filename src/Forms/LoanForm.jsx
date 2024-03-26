import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoanForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedLoanType, setSelectedLoanType] = useState('');
  const [selectedBusinessType, setSelectedBusinessType] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const [businessFieldsVisible, setBusinessFieldsVisible] = useState(false);
  const [startupFieldsVisible, setStartupFieldsVisible] = useState(false);

  const employmentTypes = [
    { value: 'employee', label: 'Employee' },
    { value: 'businessman', label: 'Businessman' },
  ];
  const loanTypes = [
    { value: 'Personal Loan', label: 'Personal Loan' },
    { value: 'Business Loan', label: 'Business Loan' },
  ];

  const businessTypes = [
    { value: 'startup', label: 'Startup' },
    { value: 'existing', label: 'Existing' },
  ];

  const onSubmit = (data) => {
    console.log('Loan data:', data);
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleLoanTypeChange = (event) => {
    setSelectedLoanType(event.target.value);
    if (event.target.value === 'Business Loan') {
      setBusinessFieldsVisible(true);
      setStartupFieldsVisible(false);
    } else {
      setBusinessFieldsVisible(false);
      setStartupFieldsVisible(false);
    }
  };

  const handleBusinessTypeChange = (event) => {
    setSelectedBusinessType(event.target.value);
    if (event.target.value === 'startup') {
      setStartupFieldsVisible(true);
      setBusinessFieldsVisible(false);
    } else if (event.target.value === 'existing') {
      setStartupFieldsVisible(false);
      setBusinessFieldsVisible(true);
    }
  };

  const borderColor = focusedInput ? 'bg-gradient-to-r from-blue-500 to-blue-700' : '';

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: 'linear-gradient(180deg, #050c1b, #2a4365)', padding: "25px", borderRadius: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto rounded-3xl shadow-md" style={{ backgroundColor: "#050c1b", padding: "25px", borderRadius: "20px" }}>
        <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">Loan Application Form</h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <select
              {...register('loanType', { required: true })}
              value={selectedLoanType}
              onChange={handleLoanTypeChange}
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "loanType" ? 'animate-pulse' : ''}`}
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("loanType")}
              onBlur={handleBlur}
            >
              <option value="">Select Loan Type</option>
              {loanTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.loanType && <p className="text-amber-400 text-xs">Please select a loan type</p>}
          </div>
          {selectedLoanType === 'Business Loan' && (
            <div className="relative">
              <select
                {...register('businessType', { required: true })}
                onChange={handleBusinessTypeChange}
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "businessType" ? 'animate-pulse' : ''}`}
                style={{ transition: 'background-color 0.3s', background: borderColor }}
                onFocus={() => handleFocus("businessType")}
                onBlur={handleBlur}
              >
                <option value="">Select Business Type</option>
                {businessTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.businessType && <p className="text-amber-400 text-xs">Please select a business type</p>}
            </div>
          )}
          {selectedLoanType === 'Personal Loan' && (
            <>
              <div className="flex">
                <label className="text-white">Upload Asset Documents</label>
                <input
                  type="file"
                  {...register('assetDocuments', { required: true })}
                  className="border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-100 focus:ring-blue-100"
                />
              </div>
              <div className="flex">
                <label className="text-white">Upload Your Identity Proof</label>
                <input
                  type="file"
                  {...register('identityProof', { required: true })}
                  className="border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-100 focus:ring-blue-100"
                />
              </div>
              <div className="relative">
                <select
                  {...register('employmentType', { required: true })}
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "employmentType" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("employmentType")}
                  onBlur={handleBlur}
                >
                  <option value="">Select Employment Type</option>
                  {employmentTypes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))} 
                </select>
                {errors.employmentType && <p className="text-amber-400 text-xs">Please select an employment type</p>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  {...register('amountNeeded', { required: true })}
                  placeholder="Amount Needed"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "amountNeeded" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("amountNeeded")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  {...register('creditScore', { required: true })}
                  placeholder="Enter Your Credit Score"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "creditScore" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("creditScore")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="relative">
                <textarea
                  {...register('reasonForLoan', { required: true })}
                  placeholder="Reason for Personal Loan"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "reasonForLoan" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("reasonForLoan")}
                  onBlur={handleBlur}
                />
              </div>
             
            </>
          )}

          {/* Render additional fields based on selected loan and business type */}



          {startupFieldsVisible && (
            <>
              {/* Fields for startup */}
              <div className="relative">
                <input
                  type="text"
                  id="GSTNumber"
                  name="GSTNumber"
                  {...register('GSTNumber', { required: true })}
                  placeholder="Enter GST Number"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "GSTNumber" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("GSTNumber")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  {...register('businessName', { required: true })}
                  placeholder="Business Name"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "businessName" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("businessName")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  {...register('email', { required: true })}
                  placeholder="Enter Business Email"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "email" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="GSTNumber"
                  name="GSTNumber"
                  {...register('GSTNumber', { required: true })}
                  placeholder="Enter GST Number"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "GSTNumber" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("GSTNumber")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="businessDomain"
                  name="businessDomain"
                  {...register('businessDomain', { required: true })}
                  placeholder="Business Domain"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "businessDomain" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("businessDomain")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="revenuePerMonth"
                  name="revenuePerMonth"
                  {...register('revenuePerYear', { required: true })}
                  placeholder="Revenue Per Year"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "revenuePerYear" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("revenuePerYear")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="yearsInBusiness"
                  name="yearsInBusiness"
                  {...register('yearsInBusiness', { required: true })}
                  placeholder="Years in Business"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "yearsInBusiness" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("yearsInBusiness")}
                  onBlur={handleBlur}
                />
              </div>

              <div className="flex">
                <label className='text-white'>Upload Your Business Registration Document</label>
                <input
                  type="file"
                  {...register('businessRegistrationDocument', { required: true })}
                  className="border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-100 focus:ring-blue-100"
                />
              </div>
              {/* Other fields for startup */}
            </>
          )}
          {selectedBusinessType === 'existing' && (
            <>
              {/* Fields for existing business */}
              <div className="relative">
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  {...register('businessName', { required: true })}
                  placeholder="Business Name"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "businessName" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("businessName")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="GSTNumber"
                  name="GSTNumber"
                  {...register('GSTNumber', { required: true })}
                  placeholder="Enter GST Number"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "GSTNumber" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("GSTNumber")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  {...register('email', { required: true })}
                  placeholder="Enter Business Email"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "email" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="businessDomain"
                  name="businessDomain"
                  {...register('businessDomain', { required: true })}
                  placeholder="Business Domain"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "businessDomain" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("businessDomain")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="revenuePerYear"
                  name="revenuePerYear"
                  {...register('revenuePerYear', { required: true })}
                  placeholder="Revenue Per Year"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "revenuePerYear" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("revenuePerYear")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="yearsInBusiness"
                  name="yearsInBusiness"
                  {...register('yearsInBusiness', { required: true })}
                  placeholder="Years in Business"
                  className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "yearsInBusiness" ? 'animate-pulse' : ''}`}
                  style={{ transition: 'background-color 0.3s', background: borderColor }}
                  onFocus={() => handleFocus("yearsInBusiness")}
                  onBlur={handleBlur}
                />
              </div>
              <div className="flex">
                <label className='text-white'>Upload Your Business Registration Document</label>
                <input
                  type="file"
                  {...register('businessRegistrationDocument', { required: true })}
                  className="border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-100 focus:ring-blue-100"
                />
              </div>

              {/* Other fields for existing business */}
            </>
          )}



        </div>
        <div className="flex justify-center mt-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply for Loan</button>
        </div>
      </form>
    </div>
  );
};

export default LoanForm;











