import { useState } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

function NavigationTools() {
  const [toggle, setToggle] = useState(false);

  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdown(!aboutDropdown);
    setServicesDropdown(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
    setAboutDropdown(false);
  };

  window.onscroll = () => {
    setToggle(false);
  };
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleDropdown = () => {
  //     setIsOpen(!isOpen);
  //   };
  return (
    <div className="app-body-navigation">
      <nav className="navigation">
        <li
          className={
            "inline-block relative font-poppins font-normal cursor-pointer text-[16px] text-white  hover:text-secondary"
          }
          onClick={toggleServicesDropdown}
        >
          <span>Transaction</span>
          {servicesDropdown && (
            <ul
              className="dropdown-content absolute  shadow-md"
              onClick={() => setServicesDropdown(false)}
            >
              <br />
              <Link to={"/profile/account/deposit"}>
                <span className="md:inset-x-14 ml-20">Deposit</span>
              </Link>
              <br></br>
              <br></br>
              <Link
                to={"/profile/account/withdraw"}
                className="md:inset-x-14 ml-20"
              >
                Withdraw
              </Link>
              <Link
                to={"/profile/account/transfer"}
                className="md:inset-x-14 ml-20"
              >
                Transfer
              </Link>
            </ul>
          )}
        </li>
        <br></br>

        <li
          className={
            "inline-block relative font-poppins font-normal cursor-pointer text-[16px] text-white  hover:text-secondary"
          }
          onClick={toggleServicesDropdown}
        >
          <span onClick={onsubmit}>Cards</span>
        </li>
        <br></br>

        <li
          className={
            "inline-block  relative font-poppins font-normal cursor-pointer text-[16px] text-white  hover:text-secondary"
          }
          onClick={toggleServicesDropdown}
        >
          <Link to={"/profile/account/loan"}>
            <span>Loan</span>
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default NavigationTools;
