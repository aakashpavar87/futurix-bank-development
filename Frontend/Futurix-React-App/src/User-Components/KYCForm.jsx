import { useState } from "react";
import { useForm } from "react-hook-form";
import { uploadKycDocs } from "../apis/UserApi";

const KYCForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [focusedInput, setFocusedInput] = useState("");
  const [borderColor] = useState("#050c1b");

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };
  const validatePAN = (value) => {
    const panRegex = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
    if (!panRegex.test(value)) {
      return "Invalid PAN card number";
    }
    if (value.length > 10) {
      return "PAN card number should not exceed 10 characters";
    }
    return true;
  };
  const handleBlur = () => {
    setFocusedInput("");
  };

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();

    formData.append("aadharCardNumber", data.aadhar);
    formData.append("panCardNumber", data.panCard);
    formData.append("aadharCard", data.aadharFile[0]);
    formData.append("panCard", data.panFile[0]);

    const res = await uploadKycDocs(152, formData);

    console.log(res.data);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen text-gray-200"
      style={{
        backgroundImage: "linear-gradient(180deg, #050c1b, #2a4365)",
        padding: "25px",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto rounded-3xl shadow-md"
        style={{ backgroundColor: "#050c1b", padding: "25px" }}
      >
        <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          KYC Form
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "aadhar" ? "animate-pulse" : ""
              } ${errors.aadhar ? "border-white-500" : ""}`} // Add error class for visual feedback
              {...register("aadhar", {
                required: {
                  value: true,
                  message: "Please Enter your Aadhar card number",
                },
                pattern: {
                  value: /^\d{12}$/,
                  message: "Aadhar card number must be exactly 12 digits",
                },
                validate: (value) =>
                  value === "" ||
                  /^\d+$/.test(value) ||
                  "Please enter digits only", // Custom validation with immediate feedback
              })}
              maxLength={12}
              autoComplete="off" // Disable autocompletion for security
              placeholder="Enter your Aadhar Card Number"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("aadhar")}
              onBlur={handleBlur}
            />
            {errors.aadhar && (
              <p className="text-amber-400 text-xs mt-1">
                {errors.aadhar.message}
              </p>
            )}
          </div>

          <div className="flex aadhar-file-chooser">
            {" "}
            {/* New class name */}
            <label
              htmlFor="aadharFile"
              className="text-base text-gray-400 py-2 px-0"
            >
              Upload Your Aadhar Card{" "}
            </label>
            <input
              type="file"
              id="aadharFile"
              name="aadharFile"
              className={`text-white border rounded-md px-2 py-3 w-15 shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "aadharFile" ? "animate-pulse" : ""
              }`}
              {...register("aadharFile", {
                required: {
                  value: true,
                  message: "Please Upload your Aadhar card file",
                },
              })}
              accept=".jpg, .jpeg, .png, .pdf"
              style={{ transition: "background-color 0.3s" }} // Remove background color from input
              onFocus={() => handleFocus("aadharFile")}
              onBlur={handleBlur}
            />
          </div>
          {errors.aadharFile && (
            <p className="text-amber-400 text-xs">
              {errors.aadharFile.message}
            </p>
          )}

          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              id="panCard"
              name="panCard"
              className={`border rounded-md px-3 py-2 w-full md:w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "panCard" ? "animate-pulse" : ""
              }`}
              {...register("panCard", {
                required: {
                  value: true,
                  message: "Please Enter PAN Card Number",
                },
                validate: validatePAN,
              })}
              autoComplete="off"
              placeholder="PAN Card: Ex. ABCDE1234F"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("panCard")}
              onBlur={handleBlur}
            />
            {errors.panCard && (
              <p className="text-amber-400 text-xs mt-1">
                {errors.panCard.message}
              </p>
            )}
            <label
              htmlFor="panCard"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>

          <div className="flex">
            <label
              htmlFor="PanCardFile"
              className="text-base text-gray-400 py-2 px-0"
            >
              Upload Your PanCard{" "}
            </label>
            <input
              type="file"
              id="panFile"
              name="panFile"
              className={` text-white border rounded-md px-3 py-3 w-15 shadow-sm shadow-white 
                            focus:border-blue-500 focus:ring-blue-500 ${
                              focusedInput === "panFile" ? "animate-pulse" : ""
                            }`}
              {...register("panFile")}
              accept=".jpg, .jpeg, .png, .pdf"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("panFile")}
              onBlur={handleBlur}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default KYCForm;
