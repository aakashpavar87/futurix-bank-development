import { useForm } from "react-hook-form";
import { createAccount, createSavingsAccount } from "../apis/AccountApi";
import { useContext } from "react";
import { UserContext, UserDispatchContext } from "../contexts/userContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AccountApply() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const myUser = useContext(UserContext);

  const navigate = useNavigate();

  const setUserDetails = useContext(UserDispatchContext);

  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const formData = new FormData(); // Corrected typo
      formData.append("account_type", data.accountType);
      console.log("Form data:", formData);
      const account = await createAccount(myUser?.userData?.id, formData);
      console.log(account.data);

      if (data.accountType === "savings") {
        const saving_account = {
          interest_rate: 1.5,
          iinterest_calc_method: "quarterly",
        };
        const savingAccount = await createSavingsAccount(
          account.data.id,
          saving_account
        );
        account.savingAccount = savingAccount;
        setUserDetails({
          userData: { ...myUser.userData, account: { ...account } }, // Corrected typo
        });
        navigate("/profile/");
      }
    } catch (error) {
      showToastMessage(error.response, true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-700 text-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <div className="mb-4">
          <label
            htmlFor="accountType"
            className="block text-gray-100 text-sm font-bold mb-2"
          >
            Account Type
          </label>
          <select
            id="accountType"
            name="accountType"
            {...register("accountType", { required: true })}
            className={`border rounded-md px-3 py-2 w-full shadow-sm shadow-white focus:border-blue-500 focus:ring-blue-500`}
          >
            <option value="">Select Account Type</option>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
          {errors.accountType && (
            <p className="text-red-500 text-xs mt-1">
              Account type is required
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AccountApply;
