import React from 'react';
import { useForm } from 'react-hook-form';

function WithdrawalForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Submit logic here, e.g., send data to server
  };

  return (
    <div>
      <h2>Withdrawal Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Account Information */}
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            {...register("accountNumber", { required: true })}
          />
          {errors.accountNumber && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="accountType">Account Type:</label>
          <select id="accountType" {...register("accountType", { required: true })}>
            <option value="savings">Savings</option>
            <option value="checking">Current</option>
          </select>
          {errors.accountType && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label>Available Balance:</label>
          <span>$1000.00</span> {/* Example: Display actual available balance here */}
        </div>

        {/* Withdrawal Details */}
        <div className="form-group">
          <label htmlFor="amount">Withdrawal Amount:</label>
          <input
            type="number"
            id="amount"
            {...register("amount", { required: true, min: 0 })}
          />
          {errors.amount && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="method">Withdrawal Method:</label>
          <select id="method" {...register("method", { required: true })}>
            <option value="online">Online Transfer</option>
          </select>
          {errors.method && <span>This field is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            {...register("date", { required: true })}
          />
          {errors.date && <span>This field is required</span>}
        </div>

        {/* Transaction Authorization */}
        <div className="form-group">
          <label htmlFor="pin">Transaction PIN:</label>
          <input
            type="password"
            id="pin"
            {...register("pin", { required: true })}
          />
          {errors.pin && <span>This field is required</span>}
        </div>

        {/* <div className="form-group">
          <label htmlFor="code">Authorization Code:</label>
          <input
            type="text"
            id="code"
            {...register("code")}
          />
        </div> */}

        {/* Confirmation */}
        <div className="form-group">
          <label>
            <input type="checkbox" {...register("confirmation", { required: true })} />
            I confirm this withdrawal request
          </label>
          {errors.confirmation && <span>This field is required</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WithdrawalForm;
