import React from 'react';
import { useForm } from 'react-hook-form';

function AdminUpdateForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = data => {
    console.log(data); // You can handle form submission here
  };

  const password = watch("password", "");

  return (
    <div>
      <h2>Admin Update</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username", { required: true })} />
          {errors.username && <span>Username is required</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Enter a valid email address</span>}
        </div>
        <div>
          <label htmlFor="password">New Password</label>
          <input type="password" id="password" {...register("password", { required: true, minLength: 8 })} />
          {errors.password && <span>Password must be at least 8 characters long</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input type="password" id="confirmPassword" {...register("confirmPassword", { validate: value => value === password })} />
          {errors.confirmPassword && <span>Passwords must match</span>}
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default AdminUpdateForm;