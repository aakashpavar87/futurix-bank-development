import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';
import { addInvestor } from '../apis/InvestorApi';

const Investor_Reg = () => {
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
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    let investor = {
      investorName: `${data.firstName} ${data.lastName}`,
      investorGender: data.gender,
      investorAddress: `${data.street} , ${data.city}, ${data.state}, ${data.country}.`,
      investorPhoneNumber: data.phoneNumber,
      investorEmail: data.Email,
      investorDob: data.dateOfBirth,
      investorPassword: hashedPassword,
      panCard: data.panCard,
      aadharCard: data.aadharCard
    }
    addInvestor(investor)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
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
        <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer ">Become an Investor</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "firstName" ? 'animate-pulse' : ''} text-sm md:text-base`}
              {...register("firstName", { required: { value: true, message: 'Please Enter First Name' } })}
              autoComplete="given-name"
              placeholder="Enter First Name"
              style={{ transition: 'background-color 0.3s', className: "shadow-white rounded-md ", background: borderColor }}
              onFocus={() => handleFocus("firstName")}
              onBlur={handleBlur}
            />
            {errors.firstName && <p className="text-amber-400 text-xs mt-1">{errors.firstName.message}</p>}
            <label
              htmlFor="firstName"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "lastName" ? 'animate-pulse' : ''} text-lg md:text-base`}
              {...register("lastName", { required: { value: true, message: 'Please Enter Last Name' } })}
              autoComplete="family-name"
              placeholder="Enter Last Name"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("lastName")}
              onBlur={handleBlur}
            />
            {errors.lastName && <p className="text-amber-400  text-xs mt-1">{errors.lastName.message}</p>}
            <label
              htmlFor="lastName"
              className={`absolute top-1 transition-all `}
            ></label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="email"
              name="email"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "email" ? 'animate-pulse' : ''}`}
              {...register("Email", {
                required: { value: true, message: 'Please Enter Your Email ' },
                pattern: { value: /^\S+@\S+$/i, message: 'Enter valid  Email ' }
              })}
              autoComplete="email"
              placeholder="Email: Ex. abc@gmail.com"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
            />
            {errors.Email && <p className="text-amber-400 text-xs mt-1">{errors.Email.message}</p>}
            <label
              htmlFor="email"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "phoneNumber" ? 'animate-pulse' : ''}`}
              {...register("phoneNumber", {
                required: { value: true, message: 'Please Enter Your phoneNumber ' },
                pattern: { value: /\d{10}/g, message: 'Enter valid Phone Number ' }
              })}
              autoComplete="phoneNumber"
              placeholder="Phone Number: Ex. 1234567890"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("phoneNumber")}
              onBlur={handleBlur}
            />
            {errors.phoneNumber && <p className="text-amber-400 text-xs mt-1">{errors.phoneNumber.message}</p>}
            <label
              htmlFor="phoneNumber"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
          <div className="relative mt-4 md:mt-0">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "password" ? 'animate-pulse' : ''}`}
              {...register("password", {
                required: { value: true, message: 'Please Enter Your Password' },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                  message: 'Password must be at least 8 characters long, containing at least one uppercase letter, and one special character.'
                }
              })}
              autoComplete="new-password"
              placeholder="Password: Ex. Abcd@1234"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("password")}
              onBlur={handleBlur}
            />
            {showPassword ? (
              <svg
                style={eyeIconStyle}
                viewBox="0 0 37.519 37.519"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handlePasswordToggle}
              >
                <g>
                  <path d="M37.087,17.705c-0.334-0.338-8.284-8.276-18.327-8.276S0.766,17.367,0.433,17.705c-0.577,0.584-0.577,1.523,0,2.107 c0.333,0.34,8.284,8.277,18.327,8.277s17.993-7.938,18.327-8.275C37.662,19.23,37.662,18.29,37.087,17.705z M18.76,25.089 c-6.721,0-12.604-4.291-15.022-6.332c2.411-2.04,8.281-6.328,15.022-6.328c6.72,0,12.604,4.292,15.021,6.332 C31.369,20.802,25.501,25.089,18.76,25.089z M18.76,13.009c3.176,0,5.75,2.574,5.75,5.75c0,3.175-2.574,5.75-5.75,5.75 c-3.177,0-5.75-2.574-5.75-5.75C13.01,15.584,15.583,13.009,18.76,13.009z" />
                </g>
              </svg>
            ) : (
              <svg
                style={eyeIconStyle}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handlePasswordToggle}
              >
                <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {errors.password && <p className="text-amber-400 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <div className="relative mt-4 md:mt-0">
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "confirmPassword" ? 'animate-pulse' : ''}`}
              {...register("confirmPassword", {
                required: { value: true, message: 'Please confirm your password' },
                validate: value => value === watch("password") || 'The passwords do not match'
              })}
              autoComplete="confirmPassword"
              placeholder="Confirm Password"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("confirmPassword")}
              onBlur={handleBlur}
            />{showPassword ? (
              <svg
                style={eyeIconStyle}
                viewBox="0 0 37.519 37.519"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handlePasswordToggle}
              >
                <g>
                  <path d="M37.087,17.705c-0.334-0.338-8.284-8.276-18.327-8.276S0.766,17.367,0.433,17.705c-0.577,0.584-0.577,1.523,0,2.107 c0.333,0.34,8.284,8.277,18.327,8.277s17.993-7.938,18.327-8.275C37.662,19.23,37.662,18.29,37.087,17.705z M18.76,25.089 c-6.721,0-12.604-4.291-15.022-6.332c2.411-2.04,8.281-6.328,15.022-6.328c6.72,0,12.604,4.292,15.021,6.332 C31.369,20.802,25.501,25.089,18.76,25.089z M18.76,13.009c3.176,0,5.75,2.574,5.75,5.75c0,3.175-2.574,5.75-5.75,5.75 c-3.177,0-5.75-2.574-5.75-5.75C13.01,15.584,15.583,13.009,18.76,13.009z" />
                </g>
              </svg>
            ) : (
              <svg
                style={eyeIconStyle}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handlePasswordToggle}
              >
                <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {errors.confirmPassword && <p className="text-amber-400 text-xs  mt-1">{errors.confirmPassword.message}</p>}
            <label
              htmlFor="confirmPassword"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
          <div className="relative mt-4 md:mt-0">
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "dateOfBirth" ? 'animate-pulse' : ''}`}
              {...register("dateOfBirth", { required: { value: true, message: 'Please Enter Your Date of Birth' } })}
              autoComplete="off"
              placeholder="Date of Birth"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("dateOfBirth")}
              onBlur={handleBlur}
            />
            {errors.dateOfBirth && <p className="text-amber-400 text-xs mt-1">{errors.dateOfBirth.message}</p>}
            <label
              htmlFor="dateOfBirth"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
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
          <div className="relative mt-4 md:mt-0">
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
          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              id="country"
              name="country"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "country" ? 'animate-pulse' : ''}`}
              {...register("country", { required: { value: true, message: 'Please Enter Your country' } })}
              autoComplete="country"
              placeholder="Enter country"
              style={{ transition: 'background-color 0.3s', background: borderColor }}
              onFocus={() => handleFocus("address")}
              onBlur={handleBlur}
            />
            {errors.country && <p className="text-amber-400 text-xs mt-1">{errors.country.message}</p>}
            <label
              htmlFor="country"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
          <div className="relative mt-4 md:mt-0">
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

          <div className="relative mt-4 md:mt-0">
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
        <div className="flex items-center justify-center mb-2 mt-2">
          <label className="mr-4 text-center text-white">Gender</label>
          <div className="flex items-center flex-col md:flex-row">
            <label className="inline-flex items-center mr-8 shadow-sm shadow-white`">
              <input
                type="radio"
                name="gender"
                value="male"
                {...register("gender", { required: "Please select your gender" })}
                className="form-radio h-4 w-4 text-purple-600"
                style={{ transition: 'background-color 0.3s' }}
              />
              <span className="ml-2 text-white">Male</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="female"
                {...register("gender", { required: "Please select your gender" })}
                className="form-radio h-4 w-4 text-purple-600"
                style={{ transition: 'background-color 0.3s' }}
              />
              <span className="ml-2 text-white">Female</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="others"
                {...register("gender", { required: "Please select your gender" })}
                className="form-radio h-4 w-4 text-purple-600"
                style={{ transition: 'background-color 0.3s' }}
              />
              <span className="ml-2 text-white" >Others</span>
            </label>
          </div>
        </div>

        <div className="col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            className="bg-[#9155FD] text-white py-2 px-4 rounded-md w-full md:w-1/2" // Adjusted width for responsiveness
            style={{ transition: 'background-color 0.3s' }}
          >
            Register
          </button>
        </div>
        {errors.gender && <p className="text-amber-400  text-xs">{errors.gender.message}</p>}
        <div className='flex justify-center flex-col items-center mt-1'>
          <div className='py-3 flex items-center text-white'>
            <p>If you already have an account?</p>
            <a href="/login" className='ml-2 bg-blue-500 text-white py-2 px-4 rounded-md'>Log in</a>
          </div>
        </div>
      </form>
    </div>);
}

export default Investor_Reg;