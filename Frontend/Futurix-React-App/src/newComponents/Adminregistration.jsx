import React from 'react';
import { useForm } from 'react-hook-form';
import { helloWorldApi } from '../api/helloWorldApiService';
function AdminRegistrationForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = data => {
    console.log(data); // You can handle form submission here
    helloWorldApi().then((res) => console.log(res.data)).catch((err) => console.log(err))
  };

  const password = watch("password", "");

  return (
    <div>
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Adminname">Admin Name</label>
          <input type="text" id="adminname" name="adminName" {...register("adminname", { required: true })} />
          {errors.adminname && <span>Username is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Admin Address:</label>
          <input
            type="text"
            id="adminAddress"
            name="adminAddress"
            {...register("adminAddress", { required: true })}
          />
          {errors.adminAddress && <span className="error-message">Street name is required</span>}
        </div>

        {/* Gender */}
      <div className="form-group">
        <label>Admin Gender:</label>
        <div>
          <input
            type="radio" id="admingender" name="admingender" value="Men"
            {...register("admingender", { required: true })}
          />
          <label htmlFor="Men">Men</label>
        </div>
        <div>
          <input
            type="radio" id="admingender" name="admingender" value="Women"
            {...register("admingender", { required: true })}
          />
          <label htmlFor="Women">Women</label>
        </div>
        <div>
          <input
            type="radio" id="admingender" name="admingender" value="Others"
            {...register("admingender", { required: true })}
          />
          <label htmlFor="Others">Others</label>
        </div>
        {errors.admingender && <span className="error-message">Please select a Gender</span>}
      </div>

      <div className="form-group">
        <label htmlFor="creditScore">Phone number :</label>
        <input
          type="number"
          id="phonenumber"
          name="phonenumber"
          {...register("phonenumber", { required: true })}
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
          id="admindob"
          name="admindob"
          {...register("admindob", { required: true })}
        />
        {errors.admindob && <span className="error-message">Date of birth is required</span>}
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

export default AdminRegistrationForm;