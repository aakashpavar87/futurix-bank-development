import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import "./user.css";
import { useAuth } from "../hooks/useAuth";
import { BiLogOut } from "react-icons/bi";

export const SideMenu = () => {
  const { logout } = useAuth();
  const [userData, setUserData] = useState(window.localStorage.getItem("user")); // Initialize user state with null

  const handleLogout = () => {
    logout();
    setUserData(null); // Clear user state after logout
  };

  return (
    <div className="app-body-navigation flex flex-col justify-between  mt-3 pt-10 w-40 text-2xl pl-4 pr-16 h-screen  ">
      <nav className="flex flex-col justify-start gap-4 h-1/2 pl-2 p-1">
        <div className="h-[50px] w-[150px] mb-4">
          <NavLink to={"/"}>
            <img
              src={logo}
              className="h-[49px] w-[100px]"
              alt="Website logo of banking site"
            />
          </NavLink>
        </div>
        <NavLink to="/profile" end className={"flex items-center gap-2"}>
          {({ isActive }) => {
            return (
              <>
                <i className="ph-browsers"></i>
                <span
                  className={`${
                    isActive ? "text-cyan-300" : "text-gray-500"
                  } hover:text-cyan-300`}
                >
                  Dashboard
                </span>
              </>
            );
          }}
        </NavLink>
        <NavLink
          to="/profile/account"
          className={"flex items-center gap-2"}
          state={userData?.account?.id}
        >
          {({ isActive }) => {
            return (
              <>
                <i className="ph-check-square"></i>
                <span
                  className={`${
                    isActive ? "text-cyan-300" : "text-gray-500"
                  } hover:text-cyan-300`}
                >
                  Account
                </span>
              </>
            );
          }}
        </NavLink>

        <NavLink to="/profile/services" className={"flex items-center gap-2"}>
          {({ isActive }) => {
            return (
              <>
                <i className="ph-swap"></i>
                <span
                  className={`${
                    isActive ? "text-cyan-300" : "text-gray-500"
                  } hover:text-cyan-300`}
                >
                  Services
                </span>
              </>
            );
          }}
        </NavLink>

        <NavLink to="/profile/cardapply" className={"flex items-center gap-2"}>
          {({ isActive }) => {
            return (
              <>
                <i className="ph-swap"></i>
                <span
                  className={`${
                    isActive ? "text-cyan-300" : "text-gray-500"
                  } hover:text-cyan-300`}
                >
                  Cards
                </span>
              </>
            );
          }}
        </NavLink>

        <NavLink
          to="/profile/transactions"
          className={"flex items-center gap-2"}
        >
          {({ isActive }) => {
            return (
              <>
                <i className="ph-swap text-gray-500 text-xl"></i>
                <span
                  className={`${
                    isActive ? "text-cyan-300" : "text-gray-500"
                  } hover:text-cyan-300`}
                >
                  Transactions
                </span>
              </>
            );
          }}
        </NavLink>
        <NavLink to="/profile/loan" className={"flex items-center gap-2"}>
          {({ isActive }) => {
            return (
              <>
                <i className="ph-swap"></i>
                <span
                  className={`${
                    isActive ? "text-cyan-300" : "text-gray-500"
                  } hover:text-cyan-300`}
                >
                  Loan
                </span>
              </>
            );
          }}
        </NavLink>

        {/* Logout NavLink */}
        <NavLink
          onClick={handleLogout}
          className="logout flex items-center justify-center text-gray-500 p-2 hover:text-red-500"
        >
          <div className="flex justify-center items-center gap-2">
            <BiLogOut />
            <span className="text-base">Logout</span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};
