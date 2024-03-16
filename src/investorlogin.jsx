import React,{useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { createinvestorApi , getinvestorApi } from './api/helloWorldApiService';

function InvestorLoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();


  useEffect(() => {
    getinvestorApi(1).then(res => {console.log(res.data)})
    .catch(err => {console.log(err)
    })
  }, [])
  const onSubmit = data => {
    console.log(data); // You can handle form submission here
  createinvestorApi(data).then(res =>  console.log(res.data)).catch(err => console.log(err))
  };


  return (
    <div>
    <h2>Investor Registration</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="Investorname">Investor Name</label>
        <input type="text" id="investorName" name="investorName" {...register("investorName", { required: true })} />
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
          type="radio" id="investorGender" name="investorGender" value="Men"
          {...register("investorGender", { required: true })}
        />
        <label htmlFor="Men">Men</label>
      </div>
      <div>
        <input
          type="radio" id="investorGender" name="investorGender" value="Women"
          {...register("investorGender", { required: true })}
        />
        <label htmlFor="Women">Women</label>
      </div>
      <div>
        <input
          type="radio" id="investorGender" name="investorGender" value="Others"
          {...register("investorGender", { required: true })}
        />
        <label htmlFor="Others">Others</label>
      </div>
      {errors.investorgender && <span className="error-message">Please select a Gender</span>}
    </div>

    <div className="form-group">
      <label htmlFor="creditScore">Phone number :</label>
      <input
        type="number"
        id="investorPhoneNumber"
        name="investorPhoneNumber"
        {...register("investorPhoneNumber", { required: true,  })}
      />
      {errors.phonenumber && <span>This field is required</span>}
    </div>

      <div>
        <label htmlFor="investorEmail">Email</label>
        <input type="email" id="investorEmail" name="investorEmail" {...register("investorEmail", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Enter a valid email address</span>}
      </div>
       {/* Date of Birth */}
    <div className="form-group">
      <label htmlFor="dob">Date of Birth:</label>
      <input
        type="date"
        id="investorDob"
        name="investorDob"
        {...register("investorDob", { required: true })}
      />
      {errors.investordob && <span className="error-message">Date of birth is required</span>}
    </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="investorPassword" name="investorPassword`" {...register("investorPassword", { required: true, minLength: 8 })} />
        {errors.password && <span>Password must be at least 8 characters long</span>}
      </div>
      {/* <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" {...register("confirmPassword", { validate: value => value === password })} />
        {errors.confirmPassword && <span>Passwords must match</span>}
      </div> */}
      <button class="btn" type="submit">Register</button>
    </form>
  </div>
  );
}

export default InvestorLoginForm;