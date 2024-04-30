import { useForm, Controller } from "react-hook-form";
import { createAccount, createSavingsAccount } from "../apis/AccountApi";
import { useContext, useEffect, useState } from "react";
import { UserContext, UserDispatchContext } from "../contexts/userContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import { createCard, createDebitCard } from "../apis/CardApi";

function AccountApply() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const myUser = useContext(UserContext);

  const navigate = useNavigate();

  const setUserDetails = useContext(UserDispatchContext);

  const [showPassword, setShowPassword] = useState(false);

  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  useEffect(() => {
    if (!myUser?.userData?.address || !myUser?.userData?.userKycDocument) {
      navigate("/profile", {
        state: "Please complete your Kyc than open an account.",
        error: true,
      });
    }
  });

  const onSubmit = async (submittedData) => {
    try {
      const formData = new FormData(); // Corrected typo
      formData.append("account_type", "savings");
      const account = await createAccount(myUser?.userData?.id, formData);
      console.log(account.data);

      const saving_account = {
        interest_rate: 1.5,
        iinterest_calc_method: "quarterly",
      };

      const savingAccount = await createSavingsAccount(
        account.data.id,
        saving_account
      );
      account.savingAccount = savingAccount.data;

      const cardRes = await createCard(myUser?.userData?.id);

      const debitCardRes = await createDebitCard(
        cardRes?.data?.card_number,
        submittedData.pin
      );

      const cardList = myUser?.userData?.cardList;
      cardRes.data["debitCard"] = debitCardRes?.data;
      cardList.push(cardRes?.data);

      setUserDetails({
        userData: {
          ...myUser.userData,
          account: { ...account },
          cardList: cardList,
        }, // Corrected typo
      });

      navigate("/profile", {
        state: "Congratulations your account has been created successfully 🥳",
      });
    } catch (error) {
      showToastMessage(error.response, true);
    }
  };

  return (
    <div className="flex flex-col items-center container justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm mx-auto p-[2%] border text-gray-100 border-white rounded-xl"
      >
        <div className="mb-6 relative">
          <label
            htmlFor="debitCardPin"
            className="block text-gray-700 font-bold mb-2"
          >
            Debit Card PIN
          </label>
          <Controller
            name="debitCardPin"
            control={control}
            defaultValue=""
            rules={{
              required: "PIN is required",
              minLength: {
                value: 4,
                message: "PIN must be at least 4 characters long",
              },
            }}
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  id="debitCardPin"
                  type={showPassword ? "text" : "password"}
                  className={`border rounded-md px-3 py-3 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500 ${
                    errors.debitCardPin && "border-red-500"
                  }`}
                  placeholder="Enter Your Debit Card PIN"
                />
                {/* Show/hide password toggle button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-200 cursor-pointer"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            )}
          />
          {errors.debitCardPin && (
            <p className="text-red-500 text-sm mt-1">
              {errors.debitCardPin.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {/* ToastContainer component */}
      <ToastContainer />
    </div>
  );
}

export default AccountApply;
