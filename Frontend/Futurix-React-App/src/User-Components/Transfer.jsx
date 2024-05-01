import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { transferMoney } from "../apis/AccountApi";
import { UserContext } from "../contexts/userContext";
import { ToastContainer, toast } from "react-toastify";

function TransferForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const myUser = useContext(UserContext);

  const location = useLocation();

  const accountBalance = location.state;

  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  const onSubmit = ({ accountNumber, amount, desc }) => {
    const transferData = {
      accountNumber,
      amount,
      desc,
    };
    transferMoney(myUser?.userData?.account?.id, transferData)
      .then((res) => {
        navigate("/profile/account", { state: res.data });
      })
      .catch((err) => {
        showToastMessage(err?.response?.data?.message, true);
      });
  };

  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  const eyeIconStyle = {
    width: "16px",
    height: "16px",
    position: "absolute",
    right: "10px",
    top: "50%",
    marginTop: "-8px",
    cursor: "pointer",
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
      <ToastContainer />
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
          Transfer Form
        </h1>

        {/* Account Information */}
        {/* <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <input
              type="text"
              id="accountnumber"
              name="accountnumber"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "accountnumber" ? 'animate-pulse' : ''}`}
              {...register("accountnumber", { required: true })}
              autoComplete="given-name"
              placeholder="Enter Your account number"
              style={{ transition: 'background-color 0.3s', className: "shadow-white rounded-md ", background: borderColor }}
              onFocus={() => handleFocus("accountnumber")}
              onBlur={handleBlur}
            />
            {errors.accountnumber && <p className="text-amber-400 text-xs mt-1">Please Enter Your Account Number</p>}
            <label
              htmlFor="accountnumber"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
        </div>
        <br></br> */}

        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "accountNumber" ? "animate-pulse" : ""
              }`}
              {...register("accountNumber", { required: true })}
              autoComplete="given-name"
              placeholder="Enter Receiver account number"
              style={{
                transition: "background-color 0.3s",
                className: "shadow-white rounded-md ",
                background: borderColor,
              }}
              onFocus={() => handleFocus("accountNumber")}
              onBlur={handleBlur}
            />
            {errors.accountNumber && (
              <p className="text-amber-400 text-xs mt-1">
                Please Enter Receiver Account Number
              </p>
            )}
            <label
              htmlFor="accountNumber"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
        </div>
        <br></br>

        {/* <div className="relative">
          <select
            id="accountType"
            name="accountType"
            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "accountType" ? 'animate-pulse' : ''}`}
            {...register("accountType", { required: true })}
            onFocus={() => handleFocus("accountType")}
            onBlur={handleBlur}
          >
            <option value="">Choose Your Account Type</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
          </select>
          {errors.accountType && <p className="text-amber-400 text-xs mt-1">Please select your Account Type</p>}
        </div>
        <br></br> */}

        <div className="form-group">
          <label className="text-green-300">Available Balance : </label>
          <span className="text-yellow-300">
            {accountBalance || "N/A"}
          </span>{" "}
          {/* Example: Display actual available balance here */}
        </div>
        <br></br>
        {/* Withdrawal Details */}
        <div className="relative">
          <input
            type="number"
            {...register("amount", { required: true })}
            placeholder="Enter Amount"
            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
              focusedInput === "amount" ? "animate-pulse" : ""
            }`}
            style={{
              transition: "background-color 0.3s",
              background: borderColor,
            }}
            onFocus={() => handleFocus("amount")}
            onBlur={handleBlur}
          />
          {errors.amount && (
            <p className="text-amber-400 text-xs mt-1">
              Please Enter Your Amount
            </p>
          )}
        </div>

        <br></br>

        {/* Transaction Authorization */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="pin"
            name="pin"
            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
              focusedInput === "pin" ? "animate-pulse" : ""
            }`}
            {...register("pin", {
              required: { value: true, message: "Please Enter Your Password " },
            })}
            autoComplete="new-password"
            placeholder="Enter Password"
            style={{
              transition: "background-color 0.3s",
              background: borderColor,
            }}
            onFocus={() => handleFocus("pin")}
            onBlur={handleBlur}
          />
          {showPassword ? (
            <svg
              style={eyeIconStyle}
              viewBox="0 0 37.519 37.519"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handlePasswordToggle}
            >
              <g>
                <path d="M37.087,17.705c-0.334-0.338-8.284-8.276-18.327-8.276S0.766,17.367,0.433,17.705c-0.577,0.584-0.577,1.523,0,2.107 c0.333,0.34,8.284,8.277,18.327,8.277s17.993-7.938,18.327-8.275C37.662,19.23,37.662,18.29,37.087,17.705z M18.76,25.089 c-6.721,0-12.604-4.291-15.022-6.332c2.411-2.04,8.281-6.328,15.022-6.328c6.72,0,12.604,4.292,15.021,6.332 C31.369,20.802,25.501,25.089,18.76,25.089z M18.76,13.009c3.176,0,5.75,2.574,5.75,5.75c0,3.175-2.574,5.75-5.75,5.75 c-3.177,0-5.75-2.574-5.75-5.75C13.01,15.584,15.583,13.009,18.76,13.009z" />
              </g>
            </svg>
          ) : (
            <svg
              style={eyeIconStyle}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handlePasswordToggle}
            >
              <path
                d="M2 2L22 22"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        {errors.pin && (
          <p className="text-amber-400 text-xs mt-1">{errors.pin.message}</p>
        )}

        <br></br>
        {/* Confirmation */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              {...register("confirmation", { required: true })}
            />
            <b className="text-red-600"> I confirm this Transfer request</b>
          </label>
          <br />
          {errors.confirmation && (
            <span className="text-amber-400">This field is required</span>
          )}
        </div>
        <br></br>

        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <input
              type="text"
              id="desc"
              name="desc"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "desc" ? "animate-pulse" : ""
              }`}
              {...register("desc", { required: true })}
              autoComplete="given-name"
              placeholder="Please Enter Description"
              style={{
                transition: "background-color 0.3s",
                className: "shadow-white rounded-md ",
                background: borderColor,
              }}
              onFocus={() => handleFocus("desc")}
              onBlur={handleBlur}
            />
            {errors.desc && (
              <p className="text-amber-400 text-xs mt-1">
                Please Enter Description
              </p>
            )}
            <label
              htmlFor="desc"
              className={`absolute top-1 transition-all`}
            ></label>
          </div>
        </div>
        <br></br>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransferForm;
