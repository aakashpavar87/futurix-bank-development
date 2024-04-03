import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {getUserByEmail } from '../apis/UserApi';
import bcrypt from 'bcryptjs'
import { useAuth } from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { UserDispatchContext } from '../contexts/userContext';
import { forgotPassword } from '../apis/PasswordApi';
import Spinner from '../components/Spinner';

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);
    const {login} = useAuth()
    const navigate = useNavigate()
    const setmyUser = useContext(UserDispatchContext)
    const [loading, setLoading] = useState(false);
    const saveUserToContext = (user) => setmyUser(user)

    const showToastMessage = (msg, isError) => {
        if(!isError)
            toast.success(msg)
        else
            toast.error(msg)
    }
    
    const handleFocus = (inputName) => {

        setFocusedInput(inputName);
    };

    const handleBlur = () => {
        setFocusedInput(null);
    };

    const onSubmit = async (data) => {
        console.log(data);
        setLoading(true)
        forgotPassword(data)
            .then(res => {
                console.log(res.data)
                saveUserToContext(res.data)
            })
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
            setTimeout(() => {
                navigate('/verify-account')
            }, 1500);
    };

    // const handlePasswordToggle = () => setShowPassword(!showPassword);
    const borderColor = focusedInput ? 'bg-gradient-to-r from-blue-500 to-blue-700' : '';

    // const eyeIconStyle = {
    //     width: '16px',
    //     height: '16px',
    //     position: 'absolute',
    //     right: '10px',
    //     top: '50%',
    //     marginTop: '-8px',
    //     cursor: 'pointer',
    // };

    return (
        <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: 'linear-gradient(180deg, #050c1b, #2a4365)', padding: "25px" }}>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto rounded-3xl shadow-md" style={{ backgroundColor: "#050c1b", padding: "25px", borderRadius: "20px" }}>
            <ArrowBackIcon className='text-white cursor-pointer text-2xl' onClick={()=>{navigate("/")}} />
                <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">Reset Your Password</h1>
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
                            style={{
                                transition: 'background-color 0.3s',
                                background: borderColor
                            }}
                            onFocus={() => handleFocus("email")}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && <p className="text-amber-400 text-xs ">{errors.email.message}</p>}

                </div>
                <div className="flex justify-center">
                    {
                        loading ? 
                        <Spinner color={"#9155fd"} />
                        :
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
                    }
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default ForgotPassword;
