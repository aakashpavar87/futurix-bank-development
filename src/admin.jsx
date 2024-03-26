import React from 'react';
import { useForm } from 'react-hook-form';

function AdminLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data); // Here you can handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
}

export default AdminLogin;
