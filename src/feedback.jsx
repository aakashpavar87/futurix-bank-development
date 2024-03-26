import React from 'react';
import { useForm } from 'react-hook-form';

function FeedbackForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" name="feedback" {...register("feedback", { required: true })} />
          {errors.feedback && <span>Feedback is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;