/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

function Cardapply() {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showDetai, setShowDetai] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  const toggleDetai = () => {
    setShowDetai(!showDetai);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-start ">
        <h1 className="text-center font-bold mt-4 text-xl">
          Why Credit Cards?
        </h1>
        <p>
          Enter the cashless and rewarding world of Credit Cards with Kotak
          Bank! Whether you’re shopping, traveling, or enjoying a movie, our
          cards come loaded with power-packed features that make cashless
          payments seamless, convenient, and more rewarding than ever before.
          Get discounts and deals with top brands like Myntra, Indigo, PVR, and
          IndianOil. What’s more, you can earn and redeem points when you spend
          on your card, letting you reap the rewards of cashback with every
          swipe. Apply online now for an instant credit card approval through
          our secure portal. Choose from a variety of instant credit cards
          tailored to your needs and simplify bill payments, all in one go.
        </p>
      </div>
      <br></br>
      <br></br>
      <button
        onClick={toggleDetail}
        className="mr-auto  hover:bg-blue-700 text-red font-bold py-2 px-4 rounded"
      >
        {" "}
        How to Apply for a Credit Card?
      </button>
      {showDetail && (
        <div className="mr-auto">
          <p>
            Credit cards in India have become a popular payment method. More
            than half the population owns instant-approval credit cards. To get
            a credit card,
            <br></br> apply online using the following steps:
          </p>
          ● Visit Kotak Mahindra Bank’s website
          <br></br>● Check your credit card eligibility
          <br></br>● Fill out the online application form and submit it
          <br></br>● Track your application status online
        </div>
      )}
      <br></br>
      <button
        onClick={toggleDetails}
        className="mr-auto  hover:bg-blue-700 text-red font-bold py-2 px-4 rounded"
      >
        Eligibility and Documents Required for New Credit Card
      </button>
      {showDetails && (
        <div className="mr-auto">
          <p>
            Apply online at Futurix Bank's website to get a new credit card.
            Here are the eligibility criteria for getting a credit card:
            <br></br>● Age: You should be at least 18 years and above.
            <br></br>● Income: Your earnings should match the minimum income
            required for each credit card.
            <br></br>● Occupation: Credit cards are available for self-employed
            and salaried individuals.
            <br></br>● Credit score: You need a good credit score to get a
            credit card.
          </p>
        </div>
      )}
      <br></br>
      <button
        onClick={toggleDetai}
        className="mr-auto  hover:bg-blue-700 text-red font-bold py-2 px-4 rounded"
      >
        Why is a Credit Card Important?
      </button>

      {showDetai && (
        <div className="mr-auto">
          <p>
            Credit cards offer several benefits such as reward points, cashback,
            frequent flyer miles, and credit scores. Interest is charged only if
            the credit amount is not repaid within the grace period, which
            ranges between 20 to 60 days.
          </p>
          <p>A credit card is certainly a must-have item in your wallet.</p>
        </div>
      )}
      <br></br>
      <br></br>
      <Link to={"/profile/creditcardform"}>
        <button className="mr-auto  hover:bg-blue-700 text-red font-bold py-2 px-4 rounded">
          {" "}
          Apply Now
        </button>
      </Link>
    </div>
  );
}

export default Cardapply;
