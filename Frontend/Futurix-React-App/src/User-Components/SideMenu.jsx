import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import "./user.css";
import { useAuth } from "../hooks/useAuth";
import { BiLogOut } from "react-icons/bi";

export const SideMenu = () => {
  const { logout } = useAuth();
  const [, setUser] = useState(window.localStorage.getItem("user")); // Initialize user state with null

  const handleLogout = () => {
    logout();
    setUser(null); // Clear user state after logout
  };

  return (
    <div className="app-body-navigation flex flex-col justify-between  mt-3 pt-10 w-40 text-2xl pl-4 pr-16 h-screen  ">
      <nav className="flex flex-col justify-start gap-4 h-1/2 pl-2 p-1">
        <div className="h-[50px] w-[150px] mb-4">
          <img
            src={logo}
            className="h-[49px] w-[100px]"
            alt="Website logo of banking site"
          />
        </div>
        <Link to="/profile" className="flex items-center gap-2">
          <i className="ph-browsers"></i>
          <span className="text-gray-500 hover:text-cyan-300">Dashboard</span>
        </Link>
        <Link to="/profile/account" className="flex items-center gap-2">
          <i className="ph-check-square"></i>
          <span className="text-gray-500 hover:text-cyan-300">Account</span>
        </Link>
        <Link to="/profile/services" className="flex items-center gap-2">
          <i className="ph-swap"></i>
          <span className="text-gray-500 hover:text-cyan-300">Services</span>
        </Link>
        <Link to="/profile/cards" className="flex items-center gap-2">
          <i className="ph-swap"></i>
          <span className="text-gray-500 hover:text-cyan-300">Cards</span>
        </Link>
        <Link to="/profile/transactions" className="flex items-center gap-2">
          <i className="ph-swap text-gray-500 text-xl"></i>
          <span className="text-gray-500 hover:text-cyan-300">
            Transactions
          </span>
        </Link>
        <Link to="/profile/loan" className="flex items-center gap-2">
          <i className="ph-swap"></i>
          <span className="text-gray-500 hover:text-cyan-300">Loan</span>
        </Link>
        {/* <Link to="/profile/loan" className="flex items-center gap-2">
                    <i className="ph-swap"></i>
                    <span className="text-gray-500 hover:text-cyan-300">Logout</span>
                </Link> */}
        {/* Logout Link */}
        <Link
          onClick={handleLogout}
          className="logout flex items-center justify-center text-gray-500 p-2 hover:text-red-500"
        >
          <div className="flex justify-center items-center gap-2">
            <BiLogOut />
            <span className="text-base">Logout</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};
