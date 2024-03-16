// // import React, { useEffect } from 'react'
// // import { useForm } from 'react-hook-form';


// // export const Customer_Reg = () => {
// //     const { register, handleSubmit, formState: { errors }, watch} = useForm();
// //     const password = watch("password", "");

// //     const onSubmit = (data) => {
// //       console.log(data);
// //       createUserApi(data).then(res =>  console.log(res.data)).catch(err => console.log(err))

// //     };

// //   return (

// //     <div className="registration-form-container">
// //     <h2>Banking Registration Form</h2>
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <div className="form-group">
// //         <label htmlFor="name">First Name:</label>
// //         <input
// //           type="text"
// //           id="name"
// //           name="name"
// //           {...register("name", { required: true })}
// //         />
// //         {errors.name && <span className="error-message">First name is required</span>}
// //       </div>

// //       <div className="form-group">
// //         <label htmlFor="email">Email:</label>
// //         <input
// //           type="email"
// //           id="email"
// //           name="email"
// //           {...register("email", { required: true })}
// //         />
// //         {errors.email && <span className="error-message">Email is required</span>}
// //       </div>
// //       {/* Password */}
// //       <div>
// //         <label htmlFor="password">Password</label>
// //         <input type="password" id="password" name="password" {...register("password", { required: true, minLength: 8 })} />
// //         {errors.password && <span>Password must be at least 8 characters long</span>}
// //       </div>

// //       {/* Date of Birth */}
// //       <div className="form-group">
// //         <label htmlFor="dob">Date of Birth:</label>
// //         <input
// //           type="date"
// //           id="dob"
// //           name="dob"
// //           {...register("dob", { required: true })}
// //         />
// //         {errors.dob && <span className="error-message">Date of birth is required</span>}
// //       </div>
// //       <div className="form-group">
// //         <label htmlFor="creditScore">Phone number :</label>
// //         <input
// //           type="number"
// //           id="phone"
// //           name="phone"
// //           {...register("phone", { required: true })}
// //         />
// //         {errors.phone && <span>This field is required</span>}
// //       </div>
// //       {/* Gender */}
// //       <div className="form-group">
// //         <label>Gender:</label>
// //         <div>
// //           <input
// //             type="radio"
// //             id="gender"
// //             name="gender"
// //             value="Men"
// //             {...register("gender", { required: true })}
// //           />
// //           <label htmlFor="Men">Men</label>
// //         </div>
// //         <div>
// //           <input
// //             type="radio"
// //             id="gender"
// //             name="gender"
// //             value="Women"
// //             {...register("gender", { required: true })}
// //           />
// //           <label htmlFor="Women">Women</label>
// //         </div>
// //         <div>
// //           <input
// //             type="radio"
// //             id="gender"
// //             name="gender"
// //             value="Others"
// //             {...register("gender", { required: true })}
// //           />
// //           <label htmlFor="Others">Others</label>
// //         </div>
// //         {errors.gender && <span className="error-message">Please select a Gender</span>}
// //       </div>


// //       <div>
// //         <label htmlFor="confirmPassword">Confirm Password</label>
// //         <input type="password" id="confirmPassword" {...register("confirmPassword", { validate: value => value === password })} />
// //         {errors.confirmPassword && <span>Passwords must match</span>}
// //       </div>

// //       <div className="form-group">
// //         <label htmlFor="Occupation">Occupation:</label>
// //         <select
// //           id="occupation"
// //           name="occupation"
// //           {...register("occupation", { required: true })}
// //         >
// //           <option value="Select Occupation"></option>
// //           <option value="Student">Student</option>
// //           <option value="Bussinesmen">Bussinesmen</option>
// //           <option value="job-professional">Job/Professional</option>
// //           <option value="Others">Others</option>
// //         </select>
// //         {errors.occupation && <span className="error-message">Please select an Occupaion</span>}
// //       </div>
// //       {/* Button */}
// //       <div className="form-group">
// //         <button className="btn" type="submit">Next</button>
// //       </div>
// //     </form>
// //   </div>
// // );

// // }



// // export default Customer_Reg ;



// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';

// export const Customer_Reg = () => {
//     const { register, handleSubmit, formState: { errors }, watch } = useForm();
//     const password = watch("password", "");

//     const onSubmit = (data) => {
//         console.log(data);
//         createUserApi(data)
//             .then(res => console.log(res.data))
//             .catch(err => console.log(err));
//     };
//    return (
//   <div className="registration-form-container bg-[rgb(11, 17, 32)] text-white p-8 rounded-md">
//     <h2 className="text-2xl mb-4">Banking Registration Form</h2>
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full">

//       {/* First Name */}
//       <div className="form-group mb-4 flex flex-col md:flex-row items-center">
//         <label htmlFor="name" className="text-lg font-bold text-gray-500 mr-4 w-56">First Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           {...register("name", { required: true })}
//           className="w-full px-3 py-2 font-bold italic text-lg border-2 border-cyan-500 focus:outline-none focus:border-blue-500
//             placeholder-gray-500 bg-[rgb(11, 17, 32)] hover:bg-gray-200 focus:bg-white text-black rounded-md transition-all duration-300"
//           placeholder="Enter your First Name"
//         />
//         {errors.name && <span className="error-message">First name is required</span>}
//       </div>

//       {/* Email */}
//       <div className="form-group mb-4 flex flex-col md:flex-row items-center">
//         <label htmlFor="email" className="text-lg font-bold text-gray-500 mr-4 w-56">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           {...register("email", { required: true })}
//           className="w-full px-3 py-2 font-bold italic text-lg border-2 border-cyan-500 focus:outline-none focus:border-blue-500
//             placeholder-gray-500 bg-[rgb(11, 17, 32)] hover:bg-gray-200 focus:bg-white text-black rounded-md transition-all duration-300"
//           placeholder="Enter your email address"
//         />
//         {errors.email && <span className="error-message">Email is required</span>}
//       </div>

//       {/* Password */}
//       <div className="form-group mb-4 flex flex-col md:flex-row items-center">
//         <label htmlFor="password" className="text-lg font-bold text-gray-500 mr-4 w-56">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           {...register("password", { required: true, minLength: 8 })}
//           className="w-full px-3 py-2 font-bold italic text-lg border-2 border-cyan-500 focus:outline-none focus:border-blue-500
//             placeholder-gray-500 bg-[rgb(11, 17, 32)] hover:bg-gray-200 focus:bg-white text-black rounded-md transition-all duration-300"
//           placeholder="Enter your Password"
//         />
//         {errors.password && <span className="error-message">Password must be at least 8 characters long</span>}
//       </div>

//       {/* Date of Birth */}
//       <div className="form-group mb-4 flex flex-col md:flex-row items-center">
//         <label htmlFor="dob" className="text-lg font-bold text-gray-500 mr-4 w-56">Date of Birth:</label>
//         <input
//           type="date"
//           id="dob"
//           name="dob"
//           {...register("dob", { required: true })}
//           className="w-full px-3 py-2 font-bold italic text-lg border-2 border-cyan-500 focus:outline-none focus:border-blue-500
//             placeholder-gray-500 bg-[rgb(11, 17, 32)] hover:bg-gray-200 focus:bg-white text-black rounded-md transition-all duration-300"
//         />
//         {errors.dob && <span className="error-message">Date of birth is required</span>}
//       </div>

//       {/* Gender */}
//       <div className="form-group mb-4 flex flex-col md:flex-row items-center">
//         <label className="text-lg font-bold text-gray-500 mr-4">Gender:</label>
//         <div className="flex items-center">
//           <input
//             type="radio"
//             id="gender-men"
//             name="gender"
//             value="Men"
//             {...register("gender", { required: true })}
//             className="mr-2 cursor-pointer"
//           />
//           <label htmlFor="gender-men" className="mr-4 cursor-pointer text-lg transition duration-300 hover:text-blue-500">Men</label>
//         </div>
//         <div className="flex items-center">
//           <input
//             type="radio"
//             id="gender-women"
//             name="gender"
//             value="Women"
//             {...register("gender", { required: true })}
//             className="mr-2 cursor-pointer"
//           />
//           <label htmlFor="gender-women" className="mr-4 cursor-pointer text-lg transition duration-300 hover:text-blue-500 ">Women</label>
//         </div>
//         <div className="flex items-center">
//           <input
//             type="radio"
//             id="gender-others"
//             name="gender"
//             value="Others"
//             {...register("gender", { required: true })}
//             className="mr-2 cursor-pointer"
//           />
//           <label htmlFor="gender-others" className="cursor-pointer text-lg transition duration-300 hover:text-blue-500 ">Others</label>
//         </div>
//         {errors.gender && <span className="error-message">Please select a Gender</span>}
//       </div>

//       {/* Confirm Password */}
//       <div className="form-group mb-4 flex flex-col md:flex-row items-center">
//         <label htmlFor="confirmPassword" className="text-lg font-bold text-gray-500 w-56">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           {...register("confirmPassword", { required: true, minLength: 8 })}
//           className="w-full px-3 py-2 font-bold italic text-lg border-2 border-cyan-500 focus:outline-none focus:border-blue-500
//             placeholder-gray-500 bg-[rgb(11, 17, 32)] hover:bg-gray-200 focus:bg-white text-black rounded-md transition-all duration-300"
//           placeholder="Confirm your Password"
//         />
//         {errors.confirmPassword && <span className="error-message">Password must be at least 8 characters long</span>}
//       </div>

//       <div className="form-group mb-4">
//         <button className="btn bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">Next</button>
//       </div>
//     </form>
//   </div>
// );

// }


// export default Customer_Reg;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Customer_Reg = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

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
 const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div  className="flex justify-center items-center min-h-screen "style={{ backgroundImage: 'linear-gradient(180deg, #050c1b, #2a4365)', padding: "25px", borderRadius: "20px" }}>
         <img src="Untitled design.png " className='mr-2 w-2/4 hidden md:block place-self-flex shadow-lg shadow-white rounded-md backdrop-blur-md'  /> 
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto rounded-3xl  shadow-md" style={{ backgroundColor: "#050c1b", padding: "25px", borderRadius: "20px" }}>
       <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer ">Registration Form</h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white `}
              {...register("firstName", { required: { value: true, message: 'Please Enter First Name' } })}
              autoComplete="given-name"
              placeholder="First Name"
              style={{ transition: 'background-color 0.3s', className  :"shadow-white rounded-md " }}
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
              className={`border rounded-md px-3 py-2 w-full  shadow-sm shadow-white`}
              {...register("lastName", { required: { value: true, message: 'Please Enter Last Name' } })}
              autoComplete="family-name"
              placeholder="Last Name"
              style={{ transition: 'background-color 0.3s' }}
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
              className={`border rounded-md px-3 py-2 w-full   shadow-sm shadow-white`}
              {...register("Email", {
                required: { value: true, message: 'Please Enter Your Email ' },
                pattern: { value: /^\S+@\S+$/i, message: 'Enter valid  Email ' }
              })}
              autoComplete="email"
              placeholder="Email : Ex. abc@gmail.com"
              style={{ transition: 'background-color 0.3s' }}
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
    className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white`}
    {...register("password", {
      required: { value: true, message: 'Please Enter Your Password ' }
    })}
    autoComplete="new-password"
    placeholder="Password: Ex. Abcd@1234"
    style={{ transition: 'background-color 0.3s' }}
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
{errors.password && <p className="text-amber-400  text-xs ">{errors.password.message}</p>}

<div className="relative">
  <input
    type={showPassword ? 'text' : 'password'}
    id="confirmPassword"
    name="confirmPassword"
    className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white`}
    {...register("confirmPassword", {
      required: { value: true, message: 'Please confirm your password' },
      validate: value => value === password || 'The passwords does not match'
    })}
    autoComplete="confirmPassword"
    placeholder="Confirm Password"
    style={{ transition: 'background-color 0.3s' }}
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
              name="occupation" occupation
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white`}
              {...register("occupation", { required: { value: true, message: 'Please Enter Your Occupation ' } })}
              autoComplete="occupation"
              placeholder="Occupation"
              style={{ transition: 'background-color 0.3s' }}
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
              placeholder="Date of Birth"
              style={{ transition: 'background-color 0.3s' }}
            />
            <label
              htmlFor="dob"
              className={`absolute top-1 transition-all `}
            ></label>
            {errors.dob && <p className="text-amber-400  text-xs mt-1">{errors.dob.message}</p>}
          </div>

          <div className="flex items-center mb-2">
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

        <div className="col-span-2 flex justify-center mt-2">
          <button
            type="submit"
            className="bg-[#9155FD] text-white py-2 px-4 rounded-md w-full"
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

    </div>
  );
}

export default Customer_Reg;
