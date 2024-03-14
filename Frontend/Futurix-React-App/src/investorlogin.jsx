import React from 'react';
import { useForm } from 'react-hook-form';

function InvestorLoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div>
    <h2>Investor Registration</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="Adminname">Investor Name</label>
        <input type="text" id="investorname" name="investorName" {...register("investorname", { required: true })} />
        {errors.investorname && <span>Username is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="address">Investot Address:</label>
        <input
          type="text"
          id="investorAddress"
          name="investorAddress"
          {...register("investorAddress", { required: true })}
        />
        {errors.investorAddress && <span className="error-message">Street name is required</span>}
      </div>

      {/* Gender */}
    <div className="form-group">
      <label>Investor Gender:</label>
      <div>
        <input
          type="radio" id="investorgender" name="investorgender" value="Men"
          {...register("investorgender", { required: true })}
        />
        <label htmlFor="Men">Men</label>
      </div>
      <div>
        <input
          type="radio" id="investorgender" name="investorgender" value="Women"
          {...register("investorgender", { required: true })}
        />
        <label htmlFor="Women">Women</label>
      </div>
      <div>
        <input
          type="radio" id="investorgender" name="investorgender" value="Others"
          {...register("investorgender", { required: true })}
        />
        <label htmlFor="Others">Others</label>
      </div>
      {errors.investorgender && <span className="error-message">Please select a Gender</span>}
    </div>

    <div className="form-group">
      <label htmlFor="creditScore">Phone number :</label>
      <input
        type="number"
        id="phonenumber"
        name="phonenumber"
        {...register("phonenumber", { required: true, min: 300, max: 850 })}
      />
      {errors.phonenumber && <span>This field is required</span>}
    </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Enter a valid email address</span>}
      </div>
       {/* Date of Birth */}
    <div className="form-group">
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="investordob"
        name="investordob"
        {...register("investordob", { required: true })}
      />
      {errors.investordob && <span className="error-message">Date of birth is required</span>}
    </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password`" {...register("password", { required: true, minLength: 8 })} />
        {errors.password && <span>Password must be at least 8 characters long</span>}
      </div>
      {/* <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" {...register("confirmPassword", { validate: value => value === password })} />
        {errors.confirmPassword && <span>Passwords must match</span>}
      </div> */}
      <button type="submit">Register</button>
    </form>
  </div>
  );
}

export default InvestorLoginForm;