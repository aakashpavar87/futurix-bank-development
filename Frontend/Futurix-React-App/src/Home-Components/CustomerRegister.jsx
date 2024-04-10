import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerimg } from '../assets';
import { createUser, getAllUsers, getUserByEmail } from '../apis/UserApi';
import Spinner from '../components/Spinner';
import bcrypt from 'bcryptjs';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { RoleContext } from '../contexts/RoleContext';
import { useAuth } from '../hooks/useAuth';
import { UserDispatchContext } from '../contexts/userContext';
import { EmailContext } from '../contexts/emailContext';

const CustomerRegister = () => {
  // Form States
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {setEmail} = useContext(EmailContext)


  /**Old Code for registration
   * // try {
    //   setIsLoading(true)


    //   const foundUser = await getUserByEmail(Email);

    //   if (foundUser) {
    //     console.log(foundUser);
    //     setAccountExist("One account already exists with this email. Please use another email.");
    //   } else {
    //     const res = await createUser(user);
    //     console.log(res.data);
    //     setAccountExist("Registered Successfully...");
    //   }
    // } catch (error) {
    //   // setAccountExist("An error occurred while processing your request.");
    //   setAccountExist("");
    //   createUser(user)
    //       .then(res => console.log(res.data))
    //       .catch(err => console.log(err))
    // } finally {
    //   setTimeout(() => {
    //     setIsLoading(false);
    //     navigate("/profile")
    //   }, 1500);
    // }
   */

  //Context Functions
  const {role, setRole} = useContext(RoleContext)
  const {login} = useAuth()
  const setmyUser = useContext(UserDispatchContext)


  useEffect(() => {
    setRole('customer')
  }, [])

  // Toast Message Function
  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  const password = watch("password", "")
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const onSubmit = async ({ Email, dob, firstName, lastName, occupation, password, gender, phone }) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    let user = {
      name: `${firstName} ${lastName}`,
      email: Email,
      password: hashedPassword,
      phone: phone,
      dob: dob,
      occupation: occupation,
      gender: gender
    }
    try {
      setIsLoading(true);

      const encodedEmail = encodeURIComponent(Email)
      const foundCustomer = await getUserByEmail(encodedEmail);

      if (foundCustomer) {
        showToastMessage(
          "One account already exists with this email. Please login with that email",
          true
        );
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error.response.data.message);
      try {
        const res = await createUser(user)
        let userData = res.data
        setmyUser(userData)
        console.log(res.data);
        setEmail(Email)

        // Direct login and redirect on profile
        setTimeout(async ()=>{
          setIsLoading(false)
          navigate('/verify-account', {state: {level: "register", email: Email}})
        }, 1500)
      } catch (err) {
        showToastMessage(err.response.data.message, true)
      }
    }
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
    <>
      <div className="flex justify-center items-center min-h-screen " style={{ backgroundImage: 'linear-gradient(180deg, #050c1b, #2a4365)', padding: "25px" }}>

        <img src={registerimg} className='mr-2 w-2/4 hidden md:block place-self-flex shadow-lg shadow-white rounded-md backdrop-blur-md' />
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto rounded-3xl  shadow-md" style={{ backgroundColor: "#050c1b", padding: "25px", borderRadius: "20px" }}>
        <ArrowBackIcon className='text-white cursor-pointer text-2xl' onClick={()=>{navigate("/")}} />
          <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer ">Registration Form</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "firstName" ? 'animate-pulse' : ''}`}
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


            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`border rounded-md px-3 py-2 w-full  shadow-sm shadow-whitefocus:border-blue-500 focus:ring-blue-500 ${focusedInput === "lastName" ? 'animate-pulse' : ''}`}
                {...register("lastName", { required: { value: true, message: 'Please Enter Last Name' } })}
                autoComplete="family-name"
                placeholder="Enter Last Name"
                style={{
                  transition: 'background-color 0.3s',
                  background: borderColor
                }}
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
                type="phone"
                id="phone"
                name="phone"
                className={`border rounded-md px-3 py-2 w-full  shadow-sm shadow-whitefocus:border-blue-500 focus:ring-blue-500 ${focusedInput === "phone" ? 'animate-pulse' : ''}`}
                {...register("phone", { required: { value: true, message: 'Please Enter Phone Number' } })}
                autoComplete="family-name"
                placeholder="Enter your phone"
                style={{
                  transition: 'background-color 0.3s',
                  background: borderColor
                }}
                onFocus={() => handleFocus("phone")}
                onBlur={handleBlur}
              />
              {errors.phone && <p className="text-amber-400  text-xs mt-1">{errors.phone.message}</p>}
              <label
                htmlFor="phone"
                className={`absolute top-1 transition-all `}
              ></label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className={`border rounded-md px-3 py-2 w-full   shadow-sm shadow-whitefocus:border-blue-500 focus:ring-blue-500 ${focusedInput === "email" ? 'animate-pulse' : ''}`}
                {...register("Email", {
                  required: { value: true, message: 'Please Enter Your Email ' },
                  pattern: { value: /^\S+@\S+$/i, message: 'Enter valid  Email ' }
                })}
                autoComplete="email"
                placeholder="Email : Ex. abc@gmail.com"
                style={{ transition: 'background-color 0.3s', background: borderColor }}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
              />
              {errors.Email && <p className="text-amber-400  text-xs mt-1">{errors.Email.message}</p>}
              <label
                htmlFor="email"
                className={`absolute top-1 transition-all`}
              ></label>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "password" ? 'animate-pulse' : ''}focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "password" ? 'animate-pulse' : ''}`}
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
            </div>
            {errors.password && <p className="text-amber-400  text-xs mt-0">{errors.password.message}</p>}

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-whitefocus:border-blue-500 focus:ring-blue-500 ${focusedInput === "confirmPassword" ? 'animate-pulse' : ''}focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "confirmPassword" ? 'animate-pulse' : ''}`}
                {...register("confirmPassword", {
                  required: { value: true, message: 'Please confirm your password' },
                  validate: value => value === password || "Password must match"
                })}
                autoComplete="confirmPassword"
                placeholder="Confirm Password"
                style={{ transition: 'background-color 0.3s', background: borderColor }}
                onFocus={() => handleFocus("confirmPassword")}
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
            </div>
            {errors.confirmPassword && <p className="text-amber-400  text-xs ">{errors.confirmPassword.message}</p>}


            {/* Occupation */}
            <div className="relative">
              <input
                type="text"
                id="occupation"
                name="occupation"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-whitefocus:border-blue-500 focus:ring-blue-500 ${focusedInput === "occupation" ? 'animate-pulse' : ''}`}
                {...register("occupation", { required: { value: true, message: 'Please Enter Your Occupation ' } })}
                autoComplete="occupation"
                placeholder="Enter Occupation"
                style={{ transition: 'background-color 0.3s', background: borderColor }}
                onFocus={() => handleFocus("occupation")}
                onBlur={handleBlur}
              />
              <label
                htmlFor="occupation"
                className={`absolute top-1 transition-all `}
              ></label>
              {errors.occupation && <p className="text-amber-400  text-xs mt-1">{errors.occupation.message}</p>}
            </div>

            {/* {dob}*/}
            <div className="relative">
              <input
                type="date"
                id="dob"
                name="dob"
                className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white`}
                {...register("dob", { required: { value: true, message: 'Please Enter Your D.O.B ' } })}
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                placeholder="Date of Birth"
                style={{ transition: 'background-color 0.3s' }}
              />
              <label
                htmlFor="dob"
                className={`absolute top-1 transition-all `}
              ></label>
              {errors.dob && <p className="text-amber-400  text-xs mt-1">{errors.dob.message}</p>}
            </div>

            <div className="flex text-white items-center mb-2">
              <label className="mr-4">Gender</label>
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
                  <span className="ml-2">Male</span>
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
                  <span className="ml-2">Female</span>
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
                  <span className="ml-2">Others</span>
                </label>
              </div>
            </div>
            {errors.gender && <p className="text-amber-400  text-xs">{errors.gender.message}</p>}
          </div>
          {/* <Spinner /> */}

          <div className="col-span-2 flex justify-center mt-2">
            {
              isLoading ? <Spinner color={"#9155fd"} />
                :
                <button
                  type="submit"
                  className="bg-[#9155FD] text-white py-2 px-4 rounded-md w-full"
                  style={{ transition: 'background-color 0.3s' }}
                >
                  Register
                </button>
            }
          </div>



          <div className='flex justify-center flex-col items-center mt-1'>
            <div className='py-3 text-white flex items-center'>

              <p>If you already have an account?</p>
              <a href="/login" className='ml-2 bg-blue-500 text-white py-2 px-4 rounded-md'>Log in</a>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default CustomerRegister;
