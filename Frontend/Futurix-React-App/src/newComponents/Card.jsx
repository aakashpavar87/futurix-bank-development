import React from 'react';
import { useForm } from 'react-hook-form';

function Card() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Submit logic here, e.g., send data to server
  };

  return (
    <div>
      <h2> Card Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

         <div className="form-group"> 
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div> 
        <div className="form-group">
          <label htmlFor="cardType">Card Type:</label>
          <select id="cardType" name="cardType" {...register("cardType", { required: true })}>
            <option value="debit">Debit</option>
            <option value="Credit">Credit</option>
            {/* <option value="credit">Credit</option> */}
          </select>
          {errors.cardType && <span>This field is required</span>}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Card;

