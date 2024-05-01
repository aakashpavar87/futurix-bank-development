/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import { createOrder, getInvestorByEmail } from "../apis/InvestorApi";
import { UserContext, UserDispatchContext } from "../contexts/userContext";
import { createinvestmentApi } from "../apis/InvestorApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logo } from "../assets";
import { InvestmentContext } from "../contexts/InvestmentContext";

const AddFundsModal = ({ showModal, setShowModal }) => {
  const [sendAmount, setSendAmount] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [investmentDuration, setinvestmentDuration] = useState("");
  // const [myUser.userData, setmyUser.userData] = useState(null)

  const navigate = useNavigate();
  const { setIsInvested } = useContext(InvestmentContext);
  const myUser = useContext(UserContext);
  const setmyUser = useContext(UserDispatchContext);
  const { investorEmail, investorName, investorPhoneNumber, id } = myUser;
  useEffect(() => {
    console.log(myUser);
  }, []);
  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    let orderData = {
      customerName: investorName,
      email: investorEmail,
      phoneNumber: investorPhoneNumber,
      amount: Number.parseInt(sendAmount),
    };
    const result = await createOrder(orderData);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const {
      secretKey,
      applicationFee: amount,
      razorpayOrderId: order_id,
    } = result.data;

    const options = {
      key: secretKey || "rzp_test_lbJvn1SAUOyaff", // Enter the Key ID generated from the Dashboard
      amount: amount + "00" || "20000",
      currency: "INR",
      name: "Futurix Bank",
      description: "Test Transaction",
      image: { logo },
      order_id: order_id || "order_Nt2JIRUUGBKDa1",
      handler: async function (response) {
        const data = {
          orderCreationId: order_id || "order_Nt2JIRUUGBKDa1",
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const date = new Date();
        const isoString = date.toISOString();
        const year = isoString.substring(0, 4);
        const month = isoString.substring(5, 7);
        const day = isoString.substring(8, 10);
        let dateString = `${year}-${month}-${day}`;

        let investment = {
          investmentAmount: sendAmount,
          investmentDate: dateString,
          investmentType: investmentType,
          investmentDuration: investmentDuration,
          investorPhoneNumber: investorPhoneNumber,
        };
        const res = await createinvestmentApi(investment, id);
        setmyUser(res.data);
      },
      prefill: {
        name: "Aakash Pavar",
        email: "aakashpavar87@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Aakash Pavar Sarangpur Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = (e) => {
    const id = myUser.userData.id;
    const investorPhoneNumber = myUser.userData.investorPhoneNumber;
    console.log(myUser);

    e.preventDefault();
    if (
      investmentType === "" ||
      investmentDuration === "" ||
      sendAmount === ""
    ) {
      showToastMessage("Please Enter All Investment Details", true);
    } else {
      displayRazorpay();
      const date = new Date();
      const isoString = date.toISOString();
      const year = isoString.substring(0, 4);
      const month = isoString.substring(5, 7);
      const day = isoString.substring(8, 10);
      let dateString = `${year}-${month}-${day}`;
      let investment = {
        investmentAmount: sendAmount,
        investmentDate: dateString,
        investmentType: investmentType,
        investmentDuration: investmentDuration,
        investorPhoneNumber: investorPhoneNumber,
      };
      createinvestmentApi(investment, id)
        .then((res) => {
          setmyUser(res.data);
          console.log("investment has saved");
          closeModal();
          // navigate("/investor/transactions", { state: { number: 1 } });
        })
        .catch((err) => console.log(err.response));
      setIsInvested(true);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center text-black justify-center z-50">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="bg-white flex flex-col justify-evenly items-center p-8 rounded-lg shadow-lg h-1/2 w-80%"
          >
            <div className="flex justify-between gap-7 justify-self-start items-center mb-4">
              <h2 className="text-lg font-semibold">
                Enter Investment Details
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <div>
              <div className="flex flex-col justify-center w-full items-center gap-5">
                <div className="flex flex-col gap-5 w-full">
                  <input
                    type="text"
                    onChange={(e) => {
                      setSendAmount(e.target.value);
                    }}
                    className="border border-gray-500 h-9 w-full p-3 rounded-md"
                    placeholder="Investment Amount"
                    name="amount"
                  />

                  <div className="relative h-10 w-72 min-w-[200px] border-gray-700">
                    <select
                      className="peer h-full w-full rounded-[7px] border border-gray-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      name="duration"
                      onChange={(e) => setinvestmentDuration(e.target.value)}
                    >
                      <option value="1">1 Year</option>
                      <option value="5">5 Year</option>
                      <option value="10">10 Year</option>
                    </select>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Select Duration
                    </label>
                  </div>

                  <div className="relative h-10 w-72 min-w-[200px]">
                    <select
                      className="peer h-full w-full rounded-[7px] border border-gray-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      name="type"
                      onChange={(e) => setInvestmentType(e.target.value)}
                    >
                      <option value="short">Short Term</option>
                      <option value="long">Long Term</option>
                    </select>
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Select Duration
                    </label>
                  </div>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  type="submit"
                >
                  Invest Now
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default AddFundsModal;
