import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);
    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleBlur = () => {
        setFocusedInput(null);
    };

    const onSubmit = (data) => {
        console.log(data); // You can handle the form submission here
    };

    const handlePasswordToggle = () => setShowPassword(!showPassword);
    const borderColor = focusedInput ? 'bg-gradient-to-r from-blue-500 to-blue-700' : '';

    const eyeIconStyle = {
        width: '16px',
        height: '16px',
        position: 'absolute',
        right: '10px',
        top: '50%',
        marginTop: '-8px',
        cursor: 'pointer',
    };

    return (
        <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: 'linear-gradient(180deg, #050c1b, #2a4365)', padding: "25px", borderRadius: "20px" }}>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto rounded-3xl shadow-md" style={{ backgroundColor: "#050c1b", padding: "25px", borderRadius: "20px" }}>
                <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">Login Form</h1>
                <div className="grid grid-cols-1 gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                            focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "email" ? 'animate-pulse' : ''}`}
                            {...register("email", { required: { value: true, message: 'Please Enter your email' } })}
                            autoComplete="given-name"
                            placeholder="Enter your Email"
                            style={{ transition: 'background-color 0.3s',
                            background: borderColor }}
                            onFocus={() => handleFocus("email")}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && <p className="text-amber-400 text-xs ">{errors.email.message}</p>}
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "password" ? 'animate-pulse' : ''}`}
                            {...register("password", {
                                required: { value: true, message: 'Please Enter Your Password ' }
                            })}
                            autoComplete="new-password"
                            placeholder="Enter Password"
                            style={{ transition: 'background-color 0.3s',
                            background: borderColor }}
                            onFocus={() => handleFocus("password")}
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
                                <path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </div>
                    {errors.password && <p className="text-amber-400  text-xs">{errors.password.message}</p>}
                </div>
                <div className="text-right">
                        <a href="#" className="text-sm text-white hover:text-gray-400">Forgot Password?</a>
                    </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
