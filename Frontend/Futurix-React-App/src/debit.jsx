import React from 'react';
import { useForm } from 'react-hook-form';

function DebitCardApplicationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Submit logic here, e.g., send data to server
  };

  return (
    <div>
      <h2>Debit Card Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Personal Information */}
        {/* Address */}
        {/* <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
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
{/* 
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div> */}

        {/* Employment Information */}
        {/* <div className="form-group">
          <label htmlFor="employmentStatus">Employment Status:</label>
          <select id="employmentStatus"  name="employmentStatus" {...register("employmentStatus", { required: true })}>
            <option value="employed">Employed</option>
            <option value="selfEmployed">Self-Employed</option>
            <option value="unemployed">Unemployed</option>
          </select>
          {errors.employmentStatus && <span>This field is required</span>}
        </div> */}

        {/* <div className="form-group">
          <label htmlFor="employer">Employer:</label>
          <input
            type="text"
            id="employer"
            name="employer"
            {...register("employer", { required: true })}
          />
          {errors.employer && <span>This field is required</span>}
        </div> */}

        {/* Account Details */}
        {/* <div className="form-group">
          <label htmlFor="existingAccount">Do you have an existing account with us?</label>
          <input
            type="checkbox"
            id="existingAccount"
            name="existingAccount"
            {...register("existingAccount")}
          />
        </div> */}

        {/* Card Information */}
        <div className="form-group">
          <label htmlFor="cardType">Card Type:</label>
          <select id="cardType" name="cardType" {...register("cardType", { required: true })}>
            <option value="debit">Debit</option>
            {/* <option value="credit">Credit</option> */}
          </select>
          {errors.cardType && <span>This field is required</span>}
        </div>

        {/* Authorization and Submission */}
        {/* <div className="form-group">
          <label>
            <input type="checkbox" {...register("authorization", { required: true })} />
            I authorize this application
          </label>
          {errors.authorization && <span>This field is required</span>}
        </div>
         */}
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default DebitCardApplicationForm;