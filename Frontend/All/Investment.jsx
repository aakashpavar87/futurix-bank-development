import React from 'react';
import { useForm } from 'react-hook-form';

function InvestmentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div>
      <h2>Investment Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="amount">Investment Amount ($)</label>
          <input type="number" id="amount" {...register("amount", { 
            required: "Investment amount is required",
            min: {
              value: 1,
              message: "Investment amount must be at least $1"
            }
          })} />
          {errors.amount && <span>{errors.amount.message}</span>}
        </div>
        <div>
          <label htmlFor="duration">Investment Duration (months)</label>
          <input type="number" id="duration" {...register("duration", { 
            required: "Investment duration is required",
            min: {
              value: 1,
              message: "Investment duration must be at least 1 month"
            }
          })} />
          {errors.duration && <span>{errors.duration.message}</span>}
        </div>
        <button type="submit">Invest Now</button>
      </form>
    </div>
  );
}

export default InvestmentForm;