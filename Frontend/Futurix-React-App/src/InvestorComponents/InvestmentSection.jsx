import { useState } from "react";
import AddFundsModal from "../helper-components/AddFundsModal";

export const InvestmentSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" mt-6 mb-6 w-full flex justify-end">
      <div className="w-500 border border-red rounded-xl p-10 shadow-lg shadow-white">
        <div className="flex flex-col text-left ml-10 p-4">
          <button className="text-lg align-start font-medium p-2 md:p-4 w-15 text-white hover:text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-dotted focus:ring-transparent focus:ring-blue-400 shadow-md shadow-white">
            <span className="inline-block">
              <h1
                className={`text-2xl font-serif ${
                  isHovered ? "text-shadow-lg" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={isHovered ? { textShadow: "8px 8px 12px black" } : {}}
              >
                Cultivate Your Wealth
              </h1>
              <span
                className={`text-4xl block ${
                  isHovered ? "text-shadow-lg" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={isHovered ? { textShadow: "8px 8px 12px black" } : {}}
              >
                Start Investing Today!
              </span>
            </span>
          </button>
          <button
            className="block mt-2 text-black bg-amber-100 hover:text-amber-400 hover:bg-amber-700 transition duration-300 text-lg md:text-xl lg:text-2xl border border-black rounded-xl px-4 py-2 shadow-9xl shadow-neutral-950"
            style={{
              textDecoration: "underline",
              fontSize: "1.25rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.4)", // Adjust shadow color here
            }}
            onClick={(e) => {
              e.preventDefault(); // Prevents default link behavior
              e.target.classList.add("animate-bounce"); // Applies bounce animation on click
              setTimeout(() => {
                e.target.classList.remove("animate-bounce"); // Removes bounce animation after a short delay
              }, 500);
            }}
          >
            Make An Investment NOW!!
          </button>
          <AddFundsModal showModal={showModal} setShowModal={setShowModal} />
          <button
            className="text-lg align-start font-semibold p-2 text-white hover:text-grey-200 bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-4 shadow-9xl shadow-neutral-950 transition duration-300 shadow-inner md:shadow-white"
            onClick={(e) => {
              e.preventDefault(); // Prevents default link behavior
              e.target.classList.add("animate-bounce"); // Applies bounce animation on click
              setTimeout(() => {
                e.target.classList.remove("animate-bounce"); // Removes bounce animation after a short delay
              }, 500);
              setShowModal(true);
            }}
          >
            {" "}
            Add Funds
          </button>
        </div>
      </div>
    </div>
  );
};
