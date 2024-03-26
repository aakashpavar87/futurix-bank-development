import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const InvestorRegistrationPage2 = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const validatePAN = (value) => {
    const panRegex = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
    if (!panRegex.test(value)) {
        return "Invalid PAN card number";
    }
    if (value.length > 10) {
        return "PAN card number should not exceed 10 characters";
    }
    return true;
};

  const onSubmit = (data) => {
    console.log(data); // You can handle the form submission here
  };

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  const eyeIconStyle = {
    width: '16px',
    height: '16px',
    position: 'absolute',
    right: '10px',
    top: '50%',
    marginTop: '-8px',
    cursor: 'pointer',
  };

  const borderColor = focusedInput ? 'bg-gradient-to-r from-blue-500 to-blue-700' : '';

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: 'linear-gradient(180deg, #050c1b, #2a4365)', padding: "25px", borderRadius: "20px" }}>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto rounded-3xl shadow-md" style={{ backgroundColor: "#050c1b", padding: "25px", borderRadius: "20px" }}>
        <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer ">Registration Form</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              id="street"
              name="street"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "street" ? 'animate-pulse' : ''}`}
              {...register("street", {
                required: { value: true, message: 'Please Enter Street Address' }
              })}
              autoComplete="off"
              placeholder="Enter Street"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("street")}
              onBlur={handleBlur}
            />
            {errors.street && <p className="text-amber-400 text-xs mt-1">{errors.street.message}</p>}
            <label
              htmlFor="street"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              id="city"
              name="city"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "city" ? 'animate-pulse' : ''}`}
              {...register("city", { required: { value: true, message: 'Please Enter Your City' } })}
              autoComplete="address-level2"
              placeholder="Enter City"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("city")}
              onBlur={handleBlur}
            />
            {errors.city && <p className="text-amber-400 text-xs mt-1">{errors.city.message}</p>}
            <label
              htmlFor="city"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
          <div className="relative mt-4 md:mt-2">
            <input
              type="text"
              id="state"
              name="state"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "state" ? 'animate-pulse' : ''}`}
              {...register("state", { required: { value: true, message: 'Please Enter Your State' } })}
              autoComplete="address-level1"
              placeholder="Enter State"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("state")}
              onBlur={handleBlur}
            />
            {errors.state && <p className="text-amber-400 text-xs mt-1">{errors.state.message}</p>}
            <label
              htmlFor="state"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
          <div className="relative mt-4 md:mt-2">
            <input
              type="text"
              id="country"
              name="country"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "country" ? 'animate-pulse' : ''}`}
              {...register("country", { required: { value: true, message: 'Please Enter Your country' } })}
              autoComplete="country"
              placeholder="Enter country"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("country")}
              onBlur={handleBlur}
            />
            {errors.country && <p className="text-amber-400 text-xs mt-1">{errors.country.message}</p>}
            <label
              htmlFor="country"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>

          <div className="relative">
                    <label htmlFor="PanCardFile" className="text-base text-gray-400 py-2 px-0">Upload Your  PanCard </label>
                        <input
                            type="file"
                            id="panFile"
                            name="panFile"
                            className={`border rounded-md px-3 py-3 w-full shadow-sm shadow-white 
                            focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "panFile" ? 'animate-pulse' : ''}`}
                            {...register("panFile")}
                            accept=".jpg, .jpeg, .png, .pdf"
                            style={{ transition: 'background-color 0.3s', background: borderColor }}
                            onFocus={() => handleFocus("panFile")}
                            onBlur={handleBlur}
                        />
                    </div>

          <div className="relative mt-4 md:mt-6">
                        <input
                            type="text"
                            id="panCard"
                            name="panCard"
                            className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "panCard" ? 'animate-pulse' : ''}`}
                            {...register("panCard", {
                                required: { value: true, message: 'Please Enter PAN Card Number' },
                                validate: validatePAN
                            })}
                            autoComplete="off"
                            placeholder="PAN Card: Ex. ABCDE1234F"
                            style={{ transition: 'background-color 0.3s', background: borderColor }}
                            onFocus={() => handleFocus("panCard")}
                            onBlur={handleBlur}
                        />
                        {errors.panCard && <p className="text-amber-400 text-xs mt-1">{errors.panCard.message}</p>}
                        <label
                            htmlFor="panCard"
                            className={`absolute top-1 transition-all`}
                        ></label>
                    </div>

                    <div className="relative"> {/* New class name */}
                    <label htmlFor="aadharFile" className="text-base text-gray-400 py-2 px-0">Upload Your  Aadhar Card </label>
                        <input
                            type="file"
                            id="aadharFile"
                            name="aadharFile"
                            className={`border rounded-md px-2 py-3 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "aadharFile" ? 'animate-pulse' : ''}`}
                            {...register("aadharFile", { required: { value: true, message: 'Please Upload your Aadhar card file' } })}
                            accept=".jpg, .jpeg, .png, .pdf"
                            style={{ transition: 'background-color 0.3s' }} // Remove background color from input
                            onFocus={() => handleFocus("aadharFile")}
                            onBlur={handleBlur}
                        />
                        {errors.aadharFile && <p className="text-amber-400 text-xs mt-1">{errors.aadharFile.message}</p>}
                    </div>

          <div className="relative mt-4 md:mt-6">
            <input
              type="text"
              id="aadharCard"
              name="aadharCard"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "aadharCard" ? 'animate-pulse' : ''}`}
              {...register("aadharCard", {
                required: { value: true, message: 'Please Enter Aadhar Card Number' },
                pattern: { value: /^[0-9]{12}$/, message: 'Aadhar Card Number must be 12 digits' }
              })}
              autoComplete="off"
              placeholder="Aadhar No:Ex. 123456789012"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("aadharCard")}
              onBlur={handleBlur}
            />
            {errors.aadharCard && <p className="text-amber-400 text-xs mt-1">{errors.aadharCard.message}</p>}
            <label
              htmlFor="aadharCard"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
        </div>
      
        <div className="col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            className="bg-[#9155FD] text-white py-2 px-4 rounded-md w-full md:w-1/2 mt-3" // Adjusted width for responsiveness
            style={{ transition: 'background-color 0.3s' }}
          >
            Register
          </button>
        </div>
        <div className='flex justify-center flex-col items-center mt-1'>
          <div className='py-3 flex items-center'>
            <p>If you already have an account?</p>
            <a href="/login" className='ml-2 bg-blue-500 text-white py-2 px-4 rounded-md'>Log in</a>
          </div>
        </div>
      </form>
    </div>);
}

export default InvestorRegistrationPage2;







