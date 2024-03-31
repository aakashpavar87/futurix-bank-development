import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserDetails = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [editMode, setEditMode] = React.useState(false);
  
  const onSubmit = (data) => {
    console.log("Updated User Data:", data);
    setEditMode(false);
  };

  useEffect(()=>{
    console.log(editMode);
  })

  return (
    <div className="user-details m-7 w-[70%] h-[90%] relative z-[5] bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-lg text-gray-100 font-bold mb-4">User Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            {...register("username")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            readOnly={!editMode}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            {...register("email")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            readOnly={!editMode}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Phone:
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            readOnly={!editMode}
          />
        </div>
        {editMode ? (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setEditMode(!editMode);
            }}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
          >
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default UserDetails;
