import React from 'react';
import { useForm } from 'react-hook-form';

function PersonalLoanVerificationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Submit logic here, e.g., send data to server
  };

  return (
    <div>
      <h2>Personal Loan Verification</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Identity Verification */}
        <div className="form-group">
          <label htmlFor="idDocument">Government ID Document:</label>
          <input
            type="file"
            id="idDocument"
            {...register("idDocument", { required: true })}
          />
          {errors.idDocument && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="addressProof">Address Proof:</label>
          <input
            type="file"
            id="addressProof"
            {...register("addressProof", { required: true })}
          />
          {errors.addressProof && <span>This field is required</span>}
        </div>

        {/* Income Verification */}
        <div className="form-group">
          <label htmlFor="employer">Employer:</label>
          <input
            type="text"
            id="employer"
            {...register("employer", { required: true })}
          />
          {errors.employer && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="salary">Monthly Salary:</label>
          <input
            type="number"
            id="salary"
            {...register("salary", { required: true, min: 0 })}
          />
          {errors.salary && <span>This field is required</span>}
        </div>

        {/* Credit History */}
        <div className="form-group">
          <label htmlFor="creditScore">Credit Score:</label>
          <input
            type="number"
            id="creditScore"
            {...register("creditScore", { required: true, min: 300, max: 850 })}
          />
          {errors.creditScore && <span>This field is required</span>}
        </div>

        {/* Debt-to-Income Ratio */}
        <div className="form-group">
          <label htmlFor="debtIncomeRatio">Debt-to-Income Ratio:</label>
          <input
            type="number"
            id="debtIncomeRatio"
            {...register("debtIncomeRatio", { required: true, min: 0 })}
          />
          {errors.debtIncomeRatio && <span>This field is required</span>}
        </div>

        {/* Additional Information */}
        <div className="form-group">
          <label htmlFor="assets">Total Assets:</label>
          <input
            type="number"
            id="assets"
            {...register("assets", { required: true, min: 0 })}
          />
          {errors.assets && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="liabilities">Total Liabilities:</label>
          <input
            type="number"
            id="liabilities"
            {...register("liabilities", { required: true, min: 0 })}
          />
          {errors.liabilities && <span>This field is required</span>}
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

export default PersonalLoanVerificationForm;
