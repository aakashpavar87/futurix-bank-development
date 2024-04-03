import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { verifyAccount } from "../apis/PasswordApi";
import { UserContext } from "../contexts/userContext";

function VerifyAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  

  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [timerRunning, setTimerRunning] = useState(true); // State to track if the timer is running
  const user = useContext(UserContext)
  useEffect(() => {
    // Start the timer when the component mounts
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setTimerRunning(false); // Timer finished, set timerRunning to false
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000); // Update every second
    console.log(user)
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const onSubmit = async (data) => {
    console.log(data);
    let { firstDigit, secondDigit, thirdDigit, fourthDigit , fifthDigit, lastDigit} = data;
    let otp = firstDigit + secondDigit + thirdDigit + fourthDigit + fifthDigit + lastDigit;
    console.log(otp);
    verifyAccount(user.email, otp)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    navigate("/set-password");
  };

  const handleInputChange = (event) => {
    const inputLength = event.target.value.length;
    const maxLength = parseInt(event.target.maxLength);

    if (inputLength >= maxLength) {
      // If the input is filled, do nothing
      return;
    }
  };

  return (
    <div className="h-screen bg-blue-500 py-20 px-3">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white min-h-64 py-3 rounded text-center">
              
              <h1 className="flex gap-4 justify-center items-center text-2xl font-bold">
              <ArrowBackIcon className='text-black cursor-pointer text-2xl' onClick={()=>{navigate("/")}} />  
                OTP Verification
              </h1>
              <div className="flex flex-col mt-4">
              
                <span>Enter the OTP you received at</span>
                <span className="font-bold">aak**********@gmail.com</span>
              </div>
              <div className="mt-4">
                Time Left: {Math.floor(timeLeft / 60)}:
                {(timeLeft % 60).toString().padStart(2, "0")}
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div
                  id="otp"
                  className="flex flex-row justify-center text-center px-2 mt-5"
                >
                  <input
                    {...register("firstDigit", { required: true })}
                    className="m-2 border border-slate-800 h-10 w-10 text-center form-control rounded"
                    type="text"
                    maxLength="1"
                    autoFocus
                    onKeyDown={handleInputChange}
                  />
                  <input
                    {...register("secondDigit", { required: true })}
                    className="m-2 border border-slate-800 h-10 w-10 text-center form-control rounded"
                    type="text"
                    maxLength="1"
                    onKeyDown={handleInputChange}
                  />
                  <input
                    {...register("thirdDigit", { required: true })}
                    className="m-2 border border-slate-800 h-10 w-10 text-center form-control rounded"
                    type="text"
                    maxLength="1"
                    onKeyDown={handleInputChange}
                  />
                  <input
                    {...register("fourthDigit", { required: true })}
                    className="m-2 border border-slate-800 h-10 w-10 text-center form-control rounded"
                    type="text"
                    maxLength="1"
                    onKeyDown={handleInputChange}
                  />
                  <input
                    {...register("fifthDigit", { required: true })}
                    className="m-2 border border-slate-800 h-10 w-10 text-center form-control rounded"
                    type="text"
                    maxLength="1"
                    onKeyDown={handleInputChange}
                  />
                  <input
                    {...register("lastDigit", { required: true })}
                    className="m-2 border border-slate-800 h-10 w-10 text-center form-control rounded"
                    type="text"
                    maxLength="1"
                    onKeyDown={handleInputChange}
                  />
                </div>
                {(errors.firstDigit ||
                  errors.secondDigit ||
                  errors.thirdDigit ||
                  errors.fourthDigit ||
                  errors.fifthDigit ||
                  errors.lastDigit) && (
                  <p className="text-red-400 text-xs mt-0">Please Enter OTP</p>
                )}
                <div className="flex gap-10 justify-center items-center text-center mt-5">
                  {!timerRunning && <button
                    disabled={timerRunning} // Disable the button when timer is running
                    className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"
                  >
                    <span className="font-bold">Resend OTP</span>
                  </button>}
                  <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                    <button
                      type="submit"
                      className="font-bold p-3 border border-slate-700 rounded-lg"
                    >
                      Submit OTP
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccount;