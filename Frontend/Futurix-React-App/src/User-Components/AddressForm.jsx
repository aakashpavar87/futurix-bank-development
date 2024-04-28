/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createAddressapi } from "../apis/UserApi";
import { UserContext, UserDispatchContext } from "../contexts/userContext";
import { ToastContainer, toast } from "react-toastify";

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [focusedInput, setFocusedInput] = useState(null);

  const [number, setNumber] = useState(0);

  const navigate = useNavigate();

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  const myUser = useContext(UserContext);

  const setUserDetails = useContext(UserDispatchContext);

  const handleBlur = () => {
    setFocusedInput(null);
  };

  useEffect(() => {
    console.log(myUser);
  }, [number]);

  const onSubmit = (data) => {
    console.log(myUser);

    createAddressapi(data, myUser?.userData?.id)
      .then((res) => {
        setNumber((prev) => prev + 1);
        let data = res.data;
        setUserDetails({
          userData: { ...myUser.userData, address: { data } },
        });
        navigate("/profile/kyc");
      })
      .catch((err) => showToastMessage(`Some error has occured 😒`, true));
  };

  const borderColor = focusedInput
    ? "bg-gradient-to-r from-blue-500 to-blue-700"
    : "";

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: "linear-gradient(180deg, #050c1b, #2a4365)",
        padding: "25px",
        borderRadius: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto rounded-3xl shadow-md"
        style={{
          backgroundColor: "#050c1b",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          Address Form
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <input
              type="text"
              id="street"
              name="street"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "street" ? "animate-pulse" : ""
              }`}
              {...register("street", {
                required: { value: true, message: "Please Enter your street" },
              })}
              placeholder="Enter Your Street"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("street")}
              onBlur={handleBlur}
            />
            {errors.street && (
              <p className="text-amber-400 text-xs ">{errors.street.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="city"
              name="city"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "city" ? "animate-pulse" : ""
              }`}
              {...register("city", {
                required: { value: true, message: "Please Enter your city" },
              })}
              placeholder="Enter Your City"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("city")}
              onBlur={handleBlur}
            />
            {errors.city && (
              <p className="text-amber-400 text-xs ">{errors.city.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="state"
              name="state"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "state" ? "animate-pulse" : ""
              }`}
              {...register("state", {
                required: { value: true, message: "Please Enter your state" },
              })}
              placeholder="Enter Your state"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("state")}
              onBlur={handleBlur}
            />
            {errors.state && (
              <p className="text-amber-400 text-xs ">{errors.state.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="country"
              name="country"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "country" ? "animate-pulse" : ""
              }`}
              {...register("country", {
                required: { value: true, message: "Please Enter your country" },
              })}
              placeholder="Enter Your country"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("country")}
              onBlur={handleBlur}
            />
            {errors.country && (
              <p className="text-amber-400 text-xs ">
                {errors.country.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type="number"
              id="zipcode"
              name="zipcode"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "zipcode" ? "animate-pulse" : ""
              }`}
              {...register("zipcode", {
                required: { value: true, message: "Please Enter your zipcode" },
                pattern: {
                  value: /^\d{6}$/,
                  message: "Zip Code must contain exactly 6 digits",
                },
              })}
              placeholder="Enter Your zip code"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("zipcode")}
              onBlur={handleBlur}
            />
            {errors.zipcode && (
              <p className="text-amber-400 text-xs ">
                {errors.zipcode.message}
              </p>
            )}
          </div>

          {/* Add other input fields similarly */}

          <div className="flex justify-between">
            {/* Previous Button or Link */}
            <Link to={"/profile"}>
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
              >
                Previous
              </button>
            </Link>
            {/* Next Button or Link */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Next
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddressForm;
