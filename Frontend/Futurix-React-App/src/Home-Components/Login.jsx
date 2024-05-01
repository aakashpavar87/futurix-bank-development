/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import bcrypt from "bcryptjs";
import { useAuth } from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import {
  AdminDispatchContext,
  UserDispatchContext,
} from "../contexts/userContext";

import { getUserByEmail } from "../apis/UserApi";
import { getInvestorByEmail } from "../apis/InvestorApi";
import { RoleContext } from "../contexts/RoleContext";
import { EmailContext } from "../contexts/emailContext";

import { useLocation } from "react-router-dom";
import { getAdminByEmail } from "../apis/AdminApi";

const Login = () => {
  //Form States
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const navigate = useNavigate();

  // Context Functions
  const { login, adminLogin } = useAuth();
  const setmyUser = useContext(UserDispatchContext);
  const setmyAdmin = useContext(AdminDispatchContext);
  const saveUserToContext = (user) => setmyUser(user);
  const saveAdminToContext = (admin) => setmyAdmin(admin);
  const { setRole } = useContext(RoleContext);
  const { setEmail } = useContext(EmailContext);

  const location = useLocation();
  const message = location?.state?.msg;

  useEffect(() => {
    showToastMessage(message, false);
  }, []);

  const loginUser = (userEnteredPassword, serverPassword, res, role) => {
    bcrypt.compare(userEnteredPassword, serverPassword, async (err, result) => {
      if (err) {
        console.error("Error:", err);
        showToastMessage("An error occurred while comparing passwords.", true);
      } else if (result) {
        let userData = res.data;
        showToastMessage("Password matched. Login successful.", false);
        saveUserToContext(userData);
        console.log(role);
        setRole(role);
        await login({ userData }, role);
      } else {
        console.log("Password does not match. Login failed.");
        showToastMessage("Incorrect username or password.", true);
      }
    });
  };

  const loginAdminToSystem = (
    userEnteredPassword,
    serverPassword,
    res,
    role
  ) => {
    bcrypt.compare(userEnteredPassword, serverPassword, async (err, result) => {
      if (err) {
        console.error("Error:", err);
        showToastMessage("An error occurred while comparing passwords.", true);
      } else if (result) {
        let userData = res.data;
        showToastMessage("Password matched. Login successful.", false);
        saveAdminToContext(userData);
        console.log(role);
        setRole(role);
        await adminLogin({ userData }, role);
      } else {
        console.log("Password does not match. Login failed.");
        showToastMessage("Incorrect username or password.", true);
      }
    });
  };

  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const onSubmit = async (data) => {
    const encodedEmail = encodeURIComponent(data.email);
    setEmail(encodedEmail);
    try {
      let res, serverPassword;
      if (data.role === "customer") {
        res = await getUserByEmail(encodedEmail);
        serverPassword = res.data.password;
        loginUser(data.password, serverPassword, res, data.role);
      }
      if (data.role === "investor") {
        res = await getInvestorByEmail(encodedEmail);
        serverPassword = res.data.investorPassword;
        loginUser(data.password, serverPassword, res, data.role);
      }
      if (data.role === "admin") {
        res = await getAdminByEmail(encodedEmail);
        serverPassword = res.data.adminPassword;
        loginAdminToSystem(data.password, serverPassword, res, data.role);
      }
      console.log(res.data);
    } catch (error) {
      showToastMessage(error.response.data.message, true);
    }
  };

  const handlePasswordToggle = () => setShowPassword(!showPassword);
  const borderColor = focusedInput
    ? "bg-gradient-to-r from-blue-500 to-blue-700"
    : "";

  const eyeIconStyle = {
    width: "16px",
    height: "16px",
    position: "absolute",
    right: "10px",
    top: "50%",
    marginTop: "-8px",
    cursor: "pointer",
    color: "#fff",
  };

  return (
    <div
      className="flex w-[98vw] h-[99vh] mx-auto  justify-center items-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(180deg, #050c1b, #2a4365)",
        padding: "25px",
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
        <ArrowBackIcon
          className="text-white cursor-pointer text-2xl"
          onClick={() => {
            navigate("/");
          }}
        />
        <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          Login Form
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <input
              type="text"
              id="email"
              name="email"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                            focus:border-blue-500 focus:ring-blue-500 ${
                              focusedInput === "email" ? "animate-pulse" : ""
                            }`}
              {...register("email", {
                required: { value: true, message: "Please Enter your email" },
              })}
              autoComplete="given-name"
              placeholder="Enter your Email"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && (
            <p className="text-amber-400 text-xs ">{errors.email.message}</p>
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                focusedInput === "password" ? "animate-pulse" : ""
              }`}
              {...register("password", {
                required: {
                  value: true,
                  message: "Please Enter Your Password ",
                },
              })}
              autoComplete="new-password"
              placeholder="Enter Password"
              style={{
                transition: "background-color 0.3s",
                background: borderColor,
              }}
              onFocus={() => handleFocus("password")}
              onBlur={handleBlur}
            />
            {showPassword ? (
              <svg
                style={eyeIconStyle}
                viewBox="0 0 37.519 37.519"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handlePasswordToggle}
                stroke="#ffff"
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
                  stroke="#ffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                  stroke="#ffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                  stroke="#ffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          {errors.password && (
            <p className="text-amber-400  text-xs">{errors.password.message}</p>
          )}
        </div>
        <div className="flex items-center justify-center mb-2 mt-2">
          <label className="mr-4 text-center text-white">Role</label>
          <div className="flex items-center flex-col md:flex-row">
            <label className="inline-flex items-center mr-8 shadow-sm shadow-white`">
              <input
                type="radio"
                name="role"
                value="customer"
                {...register("role", {
                  required: "Please select your role",
                })}
                className="form-radio h-4 w-4 text-purple-600"
                style={{ transition: "background-color 0.3s" }}
              />
              <span className="ml-2 text-white">Customer</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="role"
                value="investor"
                {...register("role", {
                  required: "Please select your role",
                })}
                className="form-radio h-4 w-4 text-purple-600"
                style={{ transition: "background-color 0.3s" }}
              />
              <span className="ml-2 text-white">Investor</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="role"
                value="admin"
                {...register("role", {
                  required: "Please select your role",
                })}
                className="form-radio h-4 w-4 text-purple-600"
                style={{ transition: "background-color 0.3s" }}
              />
              <span className="ml-2 text-white">Admin</span>
            </label>
          </div>
        </div>
        {errors.role && (
          <p className="text-amber-400  text-xs">{errors.role.message}</p>
        )}
        <div className="flex justify-between items-center">
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-white hover:text-gray-400"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-right">
            <Link
              to="/register"
              className="text-sm text-white hover:text-gray-400"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
