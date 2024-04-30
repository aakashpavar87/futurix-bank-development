/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";

import "./user.css";
import { UserContext } from "../contexts/userContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getBalance } from "../apis/AccountApi";
import { ToastContainer, toast } from "react-toastify";
import { getUserKyc } from "../apis/UserApi";
import ThreeDCard from "./ThreeDCard";

export const Stats = () => {
  const [toggle, setToggle] = useState(false);

  const [number, setNumber] = useState(0);

  const [balance, setBalance] = useState();

  const myUser = useContext(UserContext);

  const [userKyc, setUserKyc] = useState({});

  const { state } = useLocation();

  const navigate = useNavigate();

  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  useEffect(() => {
    state && showToastMessage(state, false);
    console.log(myUser);
    getUserKyc(myUser?.userData?.id).then((res) => setUserKyc(res.data));
    getBalance(myUser?.userData?.id)
      .then((res) => setBalance(res.data.balance))
      .catch((err) => showToastMessage(err.response, true));
  }, [number]);

  window.onscroll = () => {
    setToggle(false);
  };

  const formattedExpiryYear =
    myUser?.userData?.cardList[0]["date_of_exspiry"].split("-")[0];
  const formattedExpiryMonth =
    myUser?.userData?.cardList[0]["date_of_exspiry"].split("-")[1];

  const formattedDate =
    formattedExpiryMonth + "/" + formattedExpiryYear.substring(2);

  let lastFourDigitOfCard = myUser?.userData?.cardList[0]["newCardNumber"];
  // lastFourDigitOfCard = lastFourDigitOfCard.substring(
  //   lastFourDigitOfCard.length() - 5
  // );

  return (
    <div className="flex flex-col justify-center items-center">
      <ToastContainer />
      {!myUser?.userData?.account ? (
        <div className="p-4 bg-emerald-400 text-red-500 rounded-md">
          {" "}
          <h3>Looks Like you don't have account !!</h3>
        </div>
      ) : (
        <div className="container mx-auto flex justify-around items-center">
          <button className="p-5 rounded-md font-semibold border-white bg-transparent hover:bg-blue-400 transition-all text-slate-200 font-poppins">
            <Link to={"/profile/deposit"}>Deposit</Link>
          </button>
          <button className="p-5 w-32 rounded-md font-semibold border-white hover:bg-cyan-600 text-slate-200 font-poppins">
            <Link to={"/profile/withdraw"} state={balance}>
              Withdraw
            </Link>
          </button>
          <button className="p-5 rounded-md font-semibold border-white hover:bg-amber-200 hover:text-slate-800 text-slate-300 font-poppins">
            <Link to={"/profile/transfer"}>Transfer</Link>
          </button>
        </div>
      )}

      <div className="mt-20 w-[80vw] flex justify-around items-center gap-20">
        <div className="flex w-full justify-around gap-8">
          <div className="app-body-navigation">
            {myUser?.userData?.account && (
              <article className="p-5 transition-all duration-[0.25s] rounded-xl bg-cyan-500 w-[445px] h-[200px] flex flex-col items-start text-white ">
                <div className="tile-header">
                  <h3 className="text-xl flex flex-col gap-5 font-semibold">
                    <span>Account</span>
                    <span>
                      Balance : {myUser?.userData?.account ? balance : "N/A"}
                    </span>
                  </h3>
                </div>
                {!myUser?.userData?.account ? (
                  <button
                    onClick={() => navigate("/profile/account-apply")}
                    className="p-4 bg-zinc-900 rounded-lg font-semibold"
                  >
                    Create Account
                  </button>
                ) : (
                  <span className="mt-6">
                    <Link to={"/profile/services"} state={balance}>
                      Go to service
                    </Link>
                  </span>
                )}
              </article>
            )}
          </div>
          <div className="app-body-main-content">
            {myUser?.userData?.account ? (
              <section className="payment-section">
                <h2>New Payment</h2>
                <div className="payments">
                  <div className="payment">
                    <div className="card olive w-48 text-gray-800">
                      <span>{formattedDate || "MM/YY"}</span>
                      <span>{myUser?.userData?.name || "Customer Name"}</span>
                      <span>
                        •••• {lastFourDigitOfCard.substring(14) || "3456"}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <ThreeDCard />
            )}
          </div>
          {/* <div className="app-body-sidebar">
            <h1 className="text-white text-3xl">Console</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

{
  /* <section className="service-section">
              <h2>Service</h2>
              <div className="service-section-header">
                <div className="search-field">
                  <i className="ph-magnifying-glass"></i>
                  <input type="text" placeholder="Loan Id" />
                </div>

                <button className="flat-button">Search</button>
              </div>
              <div className="mobile-only">
                <button className="flat-button">Toggle search</button>
              </div>
              <div className="tiles">
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-lightning-light"></i>
                    <h3>
                      <span>Electricity</span>
                      <span>UGVCL.</span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <span className="icon-button">
                      <i className="ph-caret-right-bold"></i>
                    </span>
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-fire-simple-light"></i>
                    <h3>
                      <span>Gas</span>
                      <span>Sabarmati Gas</span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <span className="icon-button">
                      <i className="ph-caret-right-bold"></i>
                    </span>
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-file-light"></i>
                    <h3>
                      <span>Tax online</span>
                      <span>Gst.</span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Go to service</span>
                    <span className="icon-button">
                      <i className="ph-caret-right-bold"></i>
                    </span>
                  </a>
                </article>
              </div>
              <div className="service-section-footer">
                <p>
                  Services are paid according to the current state of the
                  currency and tariff.
                </p>
              </div>
            </section> */
}
{
  /* <section className="transfer-section">
              <div className="transfer-section-header">
                <h2>Latest transfers</h2>
                <div className="filter-options">
                  <p>Filter selected: more than 10000 </p>
                  <button className="icon-button">
                    <i className="ph-funnel"></i>
                  </button>
                  <button className="icon-button">
                    <i className="ph-plus"></i>
                  </button>
                </div>
              </div>
              <div className="transfers">
                <div className="transfer">
                  <div className="transfer-logo">
                    <img
                      src="https://assets.codepen.io/285131/apple.svg"
                      alt="Apple Logo"
                    />
                  </div>
                  <dl className="transfer-details">
                    <div>
                      <dt>Apple Inc.</dt>
                      <dd>Apple ID Payment</dd>
                    </div>
                    <div>
                      <dt>4012</dt>
                      <dd>Last four digits</dd>
                    </div>
                    <div>
                      <dt>28 Oct. 21</dt>
                      <dd>Date payment</dd>
                    </div>
                  </dl>
                  <div className="transfer-number">- 5500</div>
                </div>
                <div className="transfer">
                  <div className="transfer-logo">
                    <img
                      src="https://assets.codepen.io/285131/pinterest.svg"
                      alt="Pinterest Logo"
                    />
                  </div>
                  <dl className="transfer-details">
                    <div>
                      <dt>Pinterest</dt>
                      <dd>2 year subscription</dd>
                    </div>
                    <div>
                      <dt>5214</dt>
                      <dd>Last four digits</dd>
                    </div>
                    <div>
                      <dt>26 Oct. 21</dt>
                      <dd>Date payment</dd>
                    </div>
                  </dl>
                  <div className="transfer-number">- 1200</div>
                </div>
                <div className="transfer">
                  <div className="transfer-logo">
                    <img
                      src="https://assets.codepen.io/285131/warner-bros.svg"
                      alt="Warner Bros. Logo"
                    />
                  </div>
                  <dl className="transfer-details">
                    <div>
                      <dt>Warner Bros.</dt>
                      <dd>Cinema</dd>
                    </div>
                    <div>
                      <dt>2228</dt>
                      <dd>Last four digits</dd>
                    </div>
                    <div>
                      <dt>22 Oct. 21</dt>
                      <dd>Date payment</dd>
                    </div>
                  </dl>
                  <div className="transfer-number">- 700</div>
                </div>
              </div>
            </section> */
}
{
  /* <div className="payment">
                  <div className="card green">
                    <span>01/22</span>
                    <span>•••• 4012</span>
                  </div>
                  <div className="payment-details">
                    <h3>Credit Card</h3>
                    <div>
                      <span>10550</span>
                      <button className="icon-button">
                        <i className="ph-caret-right-bold"></i>
                      </button>
                    </div>
                  </div>
                </div> */
}
