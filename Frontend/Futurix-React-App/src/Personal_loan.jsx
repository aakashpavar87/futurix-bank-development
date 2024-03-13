import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css'

function LoanForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Submit logic here, e.g., send data to server
  };

  return (
    <div>
      <h2>Loan Application</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* Loan amount */}
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input
            type="number"
            id="loanAmount"
            placeholder="Enter loan amount"
            {...register("loanAmount", { required: true, min: 0 })}
          />
          {errors.loanAmount && <span>This field is required</span>}
        </div>
        {/* LOan term */}
        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (months):</label>
          <input
            type="number"
            id="loanTerm"
            placeholder="Enter loan term in months"
            {...register("loanTerm", { required: true, min: 1 })}
          />
          {errors.loanTerm && <span>This field is required</span>}
        </div>
        {/* Interest rate  */}
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%):</label>
        0  <input
            type="number"
            id="interestRate"
            placeholder="Enter interest rate"
            {...register("interestRate", { required: true, min: 0, max: 100 })}
          />
          {errors.interestRate && <span>This field is required</span>}
        </div>
        {/* Loan purposes */}
        <div className="form-group">
          <label htmlFor="loanPurpose">Loan Purpose:</label>
          <select id="loanPurpose" {...register("loanPurpose", { required: true })}>
            <option value="">Select loan purpose</option>
            <option value="Home purchase">Home purchase</option>
            <option value="Refinance">Refinance</option>
            <option value="Home improvement">Home improvement</option>
            <option value="Debt consolidation">Debt consolidation</option>
          </select>
          {errors.loanPurpose && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label>Employment Status:</label>
          <div>
            <label>
              <input type="radio" value="Employed" {...register("employmentStatus", { required: true })} />
              Employed
            </label>
            <label>
              <input type="radio" value="Self-employed" {...register("employmentStatus", { required: true })} />
              Self-employed
            </label>
            <label>
              <input type="radio" value="Unemployed" {...register("employmentStatus", { required: true })} />
              Unemployed
            </label>
            <label>
              <input type="radio" value="Retired" {...register("employmentStatus", { required: true })} />
              Retired
            </label>
          </div>
          {errors.employmentStatus && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="income">Income:</label>
          <input
            type="number"
            id="income"
            placeholder="Enter annual income"
            {...register("income", { required: true, min: 0 })}
          />
          {errors.income && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="creditScore">Credit Score:</label>
          <input
            type="number"
            id="creditScore"
            placeholder="Enter credit score"
            {...register("creditScore", { required: true, min: 300, max: 850 })}
          />
          {errors.creditScore && <span>This field is required</span>}
        </div>
        {/* Personal Information */}
        <h3>Personal Information</h3>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter first name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter phone number"
            {...register("phone", { required: true })}
          />
          {errors.phone && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Enter street address"
            {...register("address.street", { required: true })}
          />
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            {...register("address.city", { required: true })}
          />
          <input
            type="text"
            id="state"
            placeholder="Enter state"
            {...register("address.state", { required: true })}
          />
          <input
            type="text"
            id="zip"
            placeholder="Enter ZIP code"
            {...register("address.zip", { required: true })}
          />
          {errors.address && <span>This field is required</span>}
        </div>
        {/* Additional Information */}
        <h3>Additional Information</h3>
        <div className="form-group">
          <label htmlFor="citizenship">Citizenship:</label>
          <input
            type="text"
            id="citizenship"
            placeholder="Enter citizenship"
            {...register("citizenship", { required: true })}
          />
          {errors.citizenship && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            {...register("dob", { required: true })}
          />
          {errors.dob && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="ssn">Aadhar Card Number:</label>
          <input
            type="text"
            id="ssn"
            placeholder="Enter SSN"
            {...register("ssn", { required: true })}
          />
          {errors.ssn && <span>This field is required</span>}
        </div>
        {/* Agreement */}
        <div className="form-group">
          <label>
            <input type="checkbox" {...register("agreement", { required: true })} />
            I agree to the terms and conditions
          </label>
          {errors.agreement && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoanForm;