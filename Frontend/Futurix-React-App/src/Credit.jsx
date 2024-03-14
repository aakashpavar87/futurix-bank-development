import React from 'react';
import { useForm } from 'react-hook-form';

function CreditCardApplicationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Submit logic here, e.g., send data to server
  };

  return (
    <div>
      <h2>Credit Card Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        {/* <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div> */}

        {/* Date of Birth */}
        {/* <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            {...register("dob", { required: true })}
          />
          {errors.dob && <span>This field is required</span>}
        </div> */}

        {/* Address */}
        {/* <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            {...register("address", { required: true })}
          />
          {errors.address && <span>This field is required</span>}
        </div> */}

        {/* Contact Information */}
        <div className="form-group">
          <label htmlFor="phone">PIN:</label>
          <input
            type="text"
            id="pin"
            name="pin"
            {...register("pin", { required: true })}
          />
          {errors.pin && <span>This field is required</span>}
        </div>

        {/* <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div> */}

        {/* Employment Information */}
        {/* <div className="form-group">
          <label htmlFor="employment">Employment Information:</label>
          <input
            type="text"
            id="employment"
            {...register("employment", { required: true })}
          />
          {errors.employment && <span>This field is required</span>}
        </div> */}

        {/* Income Details */}
        <div className="form-group">
          <label htmlFor="income">Income Details:</label>
          <input
            type="text"
            id="income"
            name="income"
            {...register("income", { required: true })}
          />
          {errors.income && <span>This field is required</span>}
        </div>

        {/* Social Security Number */}
        {/* <div className="form-group">
          <label htmlFor="ssn">Aadhar Card Number:</label>
          <input
            type="text"
            id="ssn"
            {...register("ssn", { required: true })}
          />
          {errors.ssn && <span>This field is required</span>}
        </div> */}

        {/* Existing Accounts */}
        {/* <div className="form-section">
          <h3>Existing Accounts</h3>
          <div className="form-group">
            <label htmlFor="existingAccounts">Do you have any existing accounts or relationships with the bank?</label>
            <input
              type="checkbox"
              id="existingAccounts"
              {...register("existingAccounts")}
            />
          </div>
        </div> */}

         {/* Credit History */}
         <div className="form-group">
          <label htmlFor="creditScore">Credit Score:</label>
          <input
            type="number"
            id="creditScore"
            name="creditScore"
            {...register("creditScore", { required: true, min: 300, max: 850 })}
          />
          {errors.creditScore && <span>This field is required</span>}
        </div>

        {/* Additional Information */}
        {/* <div className="form-group">
          <label htmlFor="additional">Additional Information:</label>
          <textarea
            id="additional"
            {...register("additional")}
          />
        </div> */}

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default CreditCardApplicationForm;

