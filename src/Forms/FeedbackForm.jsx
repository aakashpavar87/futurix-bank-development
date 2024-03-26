import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FeedbackForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
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

    const borderColor = focusedInput ? 'bg-gradient-to-r from-blue-500 to-blue-700' : '';

    return (
        <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: 'linear-gradient(180deg, #050c1b, #2a4365)', padding: "25px", borderRadius: "20px" }}>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto rounded-3xl shadow-md" style={{ backgroundColor: "#050c1b", padding: "25px", borderRadius: "20px" }}>
                <h1 className="text-3xl text-white font-bold text-center mb-4 hover:text-gray-400 transition-colors duration-300 cursor-pointer">Feedback Form</h1>
                <div className="grid grid-cols-1 gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                            focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "name" ? 'animate-pulse' : ''}`}
                            {...register("name", { required: { value: true, message: 'Please Enter your name' } })}
                            autoComplete="given-name"
                            placeholder="Enter your Name"
                            style={{ transition: 'background-color 0.3s', background: borderColor }}
                            onFocus={() => handleFocus("name")}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.name && <p className="text-amber-400 text-xs">{errors.name.message}</p>}
                    <div className="relative">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                            focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "email" ? 'animate-pulse' : ''}`}
                            {...register("email", { required: { value: true, message: 'Please Enter your email' } })}
                            autoComplete="email"
                            placeholder="Enter your Email"
                            style={{ transition: 'background-color 0.3s', background: borderColor }}
                            onFocus={() => handleFocus("email")}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.email && <p className="text-amber-400 text-xs">{errors.email.message}</p>}
                    <div className="relative">
                        <textarea
                            id="feedback"
                            name="feedback"
                            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white 
                            focus:border-blue-500 focus:ring-blue-500 ${focusedInput === "feedback" ? 'animate-pulse' : ''}`}
                            {...register("feedback", { required: { value: true, message: 'Please Enter your feedback' } })}
                            autoComplete="off"
                            placeholder="Enter your Feedback"
                            style={{ transition: 'background-color 0.3s', background: borderColor, height: '100px' }}
                            onFocus={() => handleFocus("feedback")}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.feedback && <p className="text-amber-400 text-xs">{errors.feedback.message}</p>}
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit Feedback</button>
                </div>
            </form>
        </div>
    );
}

export default FeedbackForm;
