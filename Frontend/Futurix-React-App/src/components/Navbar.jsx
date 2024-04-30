/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import { RoleContext } from "../contexts/RoleContext";

const Navbar = ({ isUser, isInvestor }) => {
  const [toggle, setToggle] = useState(false);
  const { logout } = useAuth();
  const [user, setUser] = useState(window.localStorage.getItem("user")); // Initialize user state with null
  const { role, setRole } = useContext(RoleContext);
  const investorName = user?.userData?.investorName
    ? user.userData.investorName
    : "";

  useEffect(() => {
    const userData = window.localStorage.getItem("user");
    setUser(userData ? JSON.parse(userData) : null); // Parse the user data if exists
    // console.log(JSON.parse(user));
  }, []);

  // Handle logout action
  const handleLogout = () => {
    logout();
    setUser(null); // Clear user state after logout
  };

  return (
    <nav
      className={`w-full flex justify-between items-center navbar mb-8 py-4 sm:mb-[20px] sm:px-[20px] px-[60px] fixed top-0 z-40 right-0 border-b border-slate-300/10 ${
        isInvestor ? "" : "backdrop-blur"
      } bg-transparent`}
    >
      <Link to={"/"}>
        <img src={logo} alt="Futurix bank" className="w-[125px] h-[35px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } hover:text-secondary`}
          >
            {nav.id === "register" ||
            nav.id === "login" ||
            nav.id === "home" ||
            nav.id === "investor" ? (
              !user ? (
                nav.id === "home" ? (
                  <Link to={`/`}>{nav.title}</Link>
                ) : (
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                )
              ) : nav.id !== "home" ? (
                ""
              ) : (
                <Link to={`/`}>{nav.title}</Link>
              )
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
        {user?.user && (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 hover:text-secondary`}
          >
            <Link onClick={handleLogout}>Log Out</Link>
          </li>
        )}
        {user?.userData ? (
          investorName ? (
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 hover:text-secondary`}
            >
              <Link to={"/investor"}>Investor</Link>
            </li>
          ) : (
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 hover:text-secondary`}
            >
              <Link to={"/profile"}>Profile</Link>
            </li>
          )
        ) : null}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                {isUser ? (
                  nav.id === "home" ? (
                    <Link to={"/"}>Home</Link>
                  ) : (
                    ""
                  )
                ) : nav.id === "register" || (nav.id === "login" && !user) ? (
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
            {isUser && user && (
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-0 hover:text-secondary`}
              >
                <Link onClick={handleLogout}>Log Out</Link>
              </li>
            )}
            {investorName ? (
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 hover:text-secondary`}
              >
                <Link to={"/investor"}>Investor</Link>
              </li>
            ) : (
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 hover:text-secondary`}
              >
                <Link to={"/profile"}>Profile</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
