import { useForm } from "react-hook-form";

function ProfileUpdateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  const password = watch("password", "");

  return (
    <div>
      <h2>Profile Update Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="image">Profile Image</label>
          <input type="file" id="image" {...register("image")} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>Name is required</span>}
        </div>
        <div>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { minLength: 8 })}
          />
          {errors.password && (
            <span>Password must be at least 8 characters long</span>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              validate: (value) => value === password,
            })}
          />
          {errors.confirmPassword && <span>Passwords must match</span>}
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ProfileUpdateForm;
