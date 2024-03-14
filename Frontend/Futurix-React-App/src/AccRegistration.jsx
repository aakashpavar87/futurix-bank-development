import React from 'react';
import { useForm } from 'react-hook-form';


function BankingRegistrationForm() {


  const { register, handleSubmit, formState: { errors }, watch} = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    // Perform validation and submission logic here
    console.log(data);
    handleCustomerRegistration()
    // Here, you can perform any logic for form submission
  };

  return (

    <div className="registration-form-container">
    <h2>Banking Registration Form</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* Firstname */}
      <div className="form-group">
        <label htmlFor="name">First Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="error-message">First name is required</span>}
      </div>
      {/* Lastname */}
      {/* <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <span className="error-message">Last name is required</span>}
      </div> */}
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
      {/* Password */}
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" {...register("password", { required: true, minLength: 8 })} />
        {errors.password && <span>Password must be at least 8 characters long</span>}
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
      <div className="form-group">
        <label htmlFor="creditScore">Phone number :</label>
        <input
          type="number"
          id="phone"
          name="phone"
          {...register("phone", { required: true, min: 300, max: 850 })}
        />
        {errors.phone && <span>This field is required</span>}
      </div>
      {/* Gender */}
      <div className="form-group">
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            id="gender"
            name="gender"
            value="Men"
            {...register("gender", { required: true })}
          />
          <label htmlFor="Men">Men</label>
        </div>
        <div>
          <input
            type="radio"
            id="gender"
            name="gender"
            value="Women"
            {...register("gender", { required: true })}
          />
          <label htmlFor="Women">Women</label>
        </div>
        <div>
          <input
            type="radio"
            id="gender"
            name="gender"
            value="Others"
            {...register("gender", { required: true })}
          />
          <label htmlFor="Others">Others</label>
        </div>
        {errors.gender && <span className="error-message">Please select a Gender</span>}
      </div>
      
      
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" {...register("confirmPassword", { validate: value => value === password })} />
        {errors.confirmPassword && <span>Passwords must match</span>}
      </div>
      {/* Account type */}
      {/* <div className="form-group">
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
      </div> */}
      {/* Occupation */}
      <div className="form-group">
        <label htmlFor="Occupation">Occupation:</label>
        <select
          id="occupation"
          name="occupation"
          {...register("occupation", { required: true })}
        >
          <option value="Select Occupation"></option>
          <option value="Student">Student</option>
          <option value="Bussinesmen">Bussinesmen</option>
          <option value="job-professional">Job/Professional</option>
          <option value="Others">Others</option>
        </select>
        {errors.occupation && <span className="error-message">Please select an Occupaion</span>}
      </div>
      {/* Button */}
      <div className="form-group">
        <button class="btn" type="submit">Next</button>
      </div>
    </form>
  </div>
);
}

export default BankingRegistrationForm;
