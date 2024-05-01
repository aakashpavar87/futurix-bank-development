/* eslint-disable react-hooks/exhaustive-deps */
import { getAllTransactions } from "../apis/AccountApi";
import { getOneUserById } from "../apis/UserApi";
import { UserContext } from "../contexts/userContext";
import "./user.css";
import { useContext, useEffect, useState } from "react";

function UserTransactions() {
  const myUser = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    console.log(myUser);

    getOneUserById(myUser?.userData?.id)
      .then((res) => {
        console.log(res);
        setTransactions(res?.data?.account["transactionList"]);
        console.log(transactions);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="transfer-section container mx-auto w-[80%] h-full">
      <div className="transfer-section-header">
        <h2>Latest transfers</h2>
      </div>
      <div className="transfers">
        {/* heading row */}

        <div className="transfer">
          <div className="transfer-logo">
            <h3 className="text-gray-800 text-base font-poppins font-semibold">
              Sr.
            </h3>
          </div>
          <dl className="transfer-details">
            <div>
              <dt>Customer Details</dt>
            </div>
            <div>
              <dd>Transaction ID</dd>
            </div>
            <div>
              <dd>Date of payment</dd>
            </div>
          </dl>
          <div className="transfer-number">Amount</div>
        </div>
        {transactions?.map((transaction, index) => (
          <div className="transfer" key={index}>
            <div className="transfer-logo">
              <h3 className="text-gray-800 text-base font-poppins font-semibold">
                {index + 1}
              </h3>
            </div>
            <dl className="transfer-details">
              <div>
                <dt>{transaction?.accountNumber}</dt>
                <dd>{transaction?.description}</dd>
              </div>
              <div>
                <dt>{transaction.transactionCode}</dt>
                <dd>{transaction.transactionLimit}</dd>
              </div>
              <div>
                <dt>{transaction.date}</dt>
              </div>
            </dl>
            <div className="transfer-number">
              {transaction.transactionType === "Deposit"
                ? "+ " + transaction.amount
                : "- " + transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserTransactions;

{
  /* <div className="transfer">
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
</div> */
}
