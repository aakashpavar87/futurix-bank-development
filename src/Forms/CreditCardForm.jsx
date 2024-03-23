import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreditCardForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);
    const [employmentStatus, setEmploymentStatus] = useState('');
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleBlur = () => {
        setFocusedInput(null);
    };

    const handleEmploymentStatusChange = (e) => {
        setEmploymentStatus(e.target.value);
    };

    const onSubmit = (data) => {
        console.log(data); // You can handle the form submission here
    };

    const handlePasswordToggle = () => setShowPassword(!showPassword);
    const borderColor = focusedInput ? 'bg-gradient-to-r from-blue-500 to-blue-700' : '';

    return (
        <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: 'linear-gradient(180deg, #050c1b, #2a4365)', padding: "25px", borderRadius: "20px" }}>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto rounded-3xl shadow-md" style={{ backgroundColor: "#050c1b", padding: "25px", borderRadius: "20px" }}>

                <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">Form For Credit Card</h1>
                <div className="grid grid-cols-1 gap-4">
                    <div className="relative">
                        <select
                            id="employmentStatus"
                            name="employmentStatus"
                            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                            focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "employmentStatus" ? 'animate-pulse' : ''}`}
                            {...register("employmentStatus", { required: true })}
                            onChange={(e) => {
                                setEmploymentStatus(e.target.value);
                            }}
                            onFocus={() => handleFocus("employmentStatus")}
                            onBlur={handleBlur}
                        >
                            <option value="">Choose Your Employment Status</option>
                            <option value="employee">Employee</option>
                            <option value="business">Businessman</option>
                            <option value="student">Student</option>
                        </select>
                    </div>
                    {/* {errors.employmentStatus && <p className="text-amber-400 text-xs ">Please select your employment status</p>} */}
                    {/* Conditionally render fields based on employment status */}
                    {employmentStatus === "employee" && (
    <>
        {/* Render employee-related fields */}
        {/* For example: */}
        <div className="relative">
            <input
                type="text"
                id="EmployeeId"
                name="EmployeeId"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "EmployeeId" ? 'animate-pulse' : ''}`}
                {...register("EmployeeId", { required: true })}
                autoComplete="off"
                placeholder="Employee ID"
                style={{ transition: 'background-color 0.3s', background: borderColor }}
                onFocus={() => handleFocus("EmployeeId")}
                onBlur={handleBlur}
            />
        </div>
        {errors.EmployeeId && <p className="text-amber-400 text-xs ">{errors.EmployeeId.message}</p>}

        <div className="relative">
            <input
                type="text"
                id="companyName"
                name="companyName"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "companyName" ? 'animate-pulse' : ''}`}
                {...register("companyName", { required: true })}
                autoComplete="off"
                placeholder="Company Name"
                style={{ transition: 'background-color 0.3s', background: borderColor }}
                onFocus={() => handleFocus("companyName")}
                onBlur={handleBlur}
            />
        {errors.companyName && <p className="text-amber-400 text-xs mt-1 ">{errors.companyName.message}</p>}
        </div>

        <div className="relative">
                                <select
                                    id="incomeRange"
                                    name="incomeRange"
                                    className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                                    focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "incomeRange" ? 'animate-pulse' : ''}`}
                                    {...register("incomeRange", { required: true })}
                                    onFocus={() => handleFocus("incomeRange")}
                                    onBlur={handleBlur}
                                >
                                    <option value="">Choose Income Range</option>
                                    <option value="0-500000">0 - 200000</option>
                                    <option value="500001-1000000">200001 - 400000</option>
                                    <option value="1000001 - 1500000">1000001 - 1500000</option>
                                    <option value="15000001 - 2000000">15000001 - 2000000</option>
                                    {/* Add more income ranges here */}
                                </select>
                            {errors.incomeRange && <p className="text-amber-400 text-xs ">{errors.incomeRange.message}</p>}
                            </div>

        {/* Add more employee-related fields here */}
    </>
)}

                    {employmentStatus === "business" && (
                        <>
                            {/* Render business-related fields */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="firmName"
                                    name="firmName"
                                    className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "firmName" ? 'animate-pulse' : ''}`}
                                    {...register("firmName", { required: true })}
                                    autoComplete="off"
                                    placeholder="Enter Firm Name"
                                    style={{ transition: 'background-color 0.3s', background: borderColor }}
                                    onFocus={() => handleFocus("firmName")}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.firmName && <p className="text-amber-400 text-xs ">{errors.firmName.message}</p>}

                            <div className="relative">
                                <select
                                    id="incomeRange"
                                    name="incomeRange"
                                    className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                                    focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "incomeRange" ? 'animate-pulse' : ''}`}
                                    {...register("incomeRange", { required: true })}
                                    onFocus={() => handleFocus("incomeRange")}
                                    onBlur={handleBlur}
                                >
                                    <option value="">Choose Income Range</option>
                                    <option value="0-500000">0 - 200000</option>
                                    <option value="500001-1000000">200001 - 400000</option>
                                    <option value="1000001 - 1500000">1000001 - 1500000</option>
                                    <option value="15000001 - 2000000">15000001 - 2000000</option>
                                    {/* Add more income ranges here */}
                                </select>
                            {errors.incomeRange && <p className="text-amber-400 text-xs ">{errors.incomeRange.message}</p>}
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    id="gstNumber"
                                    name="gstNumber"
                                    className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "gstNumber" ? 'animate-pulse' : ''}`}
                                    {...register("gstNumber", { required: true, pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/ })}
                                    autoComplete="off"
                                    placeholder="GST Number"
                                    onFocus={() => handleFocus("gstNumber")}
                                    onBlur={handleBlur}
                                />
                                {errors.gstNumber && <p className="text-amber-400 text-xs mt-1">{errors.gstNumber.type === 'pattern' ? 'Invalid GST Number' : 'GST Number is required'}</p>}
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="businessAddress"
                                    name="businessAddress"
                                    className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "businessAddress" ? 'animate-pulse' : ''}`}
                                    {...register("businessAddress", { required: true })}
                                    autoComplete="off"
                                    placeholder="Business Address"
                                    style={{ transition: 'background-color 0.3s', background: borderColor }}
                                    onFocus={() => handleFocus("businessAddress")}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.businessAddress && <p className="text-amber-400 text-xs ">{errors.businessAddress.message}</p>}

                            <div className="relative">
                                <select
                                    id="businessType"
                                    name="businessType"
                                    className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "businessType" ? 'animate-pulse' : ''}`}
                                    {...register("businessType", { required: true })}
                                    onFocus={() => handleFocus("businessType")}
                                    onBlur={handleBlur}
                                >
                                    <option value="">Choose Business Type</option>
                                    <option value="wholesaler">Wholesaler</option>
                                    <option value="semi-wholesaler">Semi-Wholesaler</option>
                                    <option value="retailer">Retailer</option>
                                    {/* Add more business types here */}
                                </select>
                            </div>
                            {errors.businessType && <p className="text-amber-400 text-xs ">{errors.businessType.message}</p>}
                        </>
                    )}


                    {/* Add more conditions for other employment statuses */}
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CreditCardForm;
