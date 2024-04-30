/* eslint-disable react-hooks/exhaustive-deps */
import { getAllTransactions } from "../apis/AccountApi";
import { UserContext } from "../contexts/userContext";
import "./user.css";
import { useContext, useEffect, useState } from "react";

function UserTransactions() {
  const myUser = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    getAllTransactions(myUser?.userData?.id).then((res) => {
      setTransactions(res);
      console.log(transactions);
    });
  }, [setTransactions]);
  return (
    <section className="transfer-section container mx-auto w-[80%] h-full">
      <div className="transfer-section-header">
        <h2>Latest transfers</h2>
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
