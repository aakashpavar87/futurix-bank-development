import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import "../App.css"
import "./BankingRegistration.css"

//import ImageComponent from './imgregister';


function BankingRegistrationForm() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
  
    const navigate = useNavigate()
  
    const onSubmit = (data) => {
      // Perform validation and submission logic here
      console.log(data);
      navigate("/address")
    };
  
    return (
      
      <div className="registration-form-container">
        <h2>Banking Registration Form</h2>
        <form action='/address' onSubmit={handleSubmit(onSubmit)}>
          
          {/* Firstname */}
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <span className="error-message">First name is required</span>}
          </div>
          {/* Lastname */}
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span className="error-message">Last name is required</span>}
          </div>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="error-message">Email is required</span>}
          </div>
          {/* Gender */}
          <div className="form-group">
            <label>Gender:</label>
            <div>
              <input
                type="radio"
                id="Men"
                name="gender"
                value="Men"
                {...register("gender", { required: true })}
              />
              <label htmlFor="Men">Men</label>
            </div>
            <div>
              <input
                type="radio"
                id="Women"
                name="gender"
                value="Women"
                {...register("gender", { required: true })}
              />
              <label htmlFor="Women">Women</label>
            </div>
            <div>
              <input
                type="radio"
                id="Others"
                name="gender"
                value="Others"
                {...register("gender", { required: true })}
              />
              <label htmlFor="Others">Others</label>
            </div>
            {errors.gender && <span className="error-message">Please select a Gender</span>}
          </div>
          {/* Date of Birth */}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              {...register("dob", { required: true })}
            />
            {errors.dob && <span className="error-message">Date of birth is required</span>}
          </div>
          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="error-message">Password is required</span>}
          </div>
          {/* Confirm password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword",{
                required: true,
                validate: value => value === document.getElementById('password').value || 'Passwords do not match'
              })}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
          </div>
          {/* Account type */}
          <div className="form-group">
            <label htmlFor="accountType">Account Type:</label>
            <select
              id="accountType"
              name="accountType"
              {...register("accountType", { required: true })}
            >
              <option value="">Select Account Type</option>
              <option value="Savings">Savings</option>
              <option value="Checking">Current</option>
            </select>
            {errors.accountType && <span className="error-message">Please select an account type</span>}
          </div>
          {/* Occupation */}
          <div className="form-group">
            <label htmlFor="Occupation">Occupation:</label>
            <select
              id="Occupation"
              name="Occupation"
              {...register("Occupation", { required: true })}
            >
              <option value="Select Occupation"></option>
              <option value="Student">Student</option>
              <option value="Bussinesmen">Bussinesmen</option>
              <option value="job-professional">Job/Professional</option>
              <option value="Others">Others</option>
            </select>
            {errors.Occupation && <span className="error-message">Please select an Occupaion</span>}
          </div>
          {/* Button */}
          <div className="form-group">
            <button class= "btn" type="submit">Next</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default BankingRegistrationForm;