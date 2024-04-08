import React from 'react';
import { Link } from 'react-router-dom';
import './user.css'



export const SideMenu = () => {
    return (
        <div className="app-body-navigation flex flex-col justify-between  mt-6 pt-10 w-40 text-2xl pl-4 pr-16 h-screen  ">
            <nav className="flex flex-col justify-start gap-4 h-1/2 pl-2 p-1">
                <Link to="/profile" className="flex items-center gap-2">
                    <i className="ph-browsers"></i>
                    <span className="text-gray-500 hover:text-cyan-300" >Dashboard</span>
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
                    <i className="ph-swap"></i>
                    <span className="text-gray-500 hover:text-cyan-300">Transactions</span>
                </Link>
                <Link to="/profile/loan" className="flex items-center gap-2">
                    <i className="ph-swap"></i>
                    <span className="text-gray-500 hover:text-cyan-300">Loan</span>
                </Link>


            </nav>
            {/* <footer className="footer mt-10 flex w-full text-gray-500 p-6">
                <div className="flex flex-wrap">
                    <h1 >Futurix<small>©</small></h1>
                    <div>
                        Futurix ©<br />
                        All Rights Reserved 2024
                    </div>
                </div>
            </footer> */}
        </div>
    );
};