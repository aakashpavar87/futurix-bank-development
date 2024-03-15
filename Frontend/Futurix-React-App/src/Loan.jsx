import React ,{useEffect}from 'react';
import { useForm } from 'react-hook-form';

function Loan() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data); // You can handle form submission here

  };

  return (
    <div>
      <h2>Loan Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="amount">Loan Amount ($)</label>
          <input type="number" id="loan_amount" name="loan_amount"{...register("loan_amount", { 
            required: "Investment amount is required",
            min: {
              value: 1,
              message: "Investment amount must be at least $1"
            }
          })} />
          {errors.amount && <span>{errors.amount.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="cardType">Loan Type:</label>
          <select id="LoanType" name="LoanType" {...register("LoanType", { required: true })}>
            <option value="personal">Personal</option>
            <option value="Business">Business</option>
            {/* <option value="credit">Credit</option> */}
          </select>
          {errors.investmentType && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="duration">Loan Duration (Years)</label>
          <input type="number" id="durationInYears" {...register("durationInYears", { 
            required: "Investment duration is required",
            min: {
              value: 1,
              message: "Investment duration must be at least 1 month"
            }
          })} />
          {errors.duration && <span>{errors.duration.message}</span>}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Loan;