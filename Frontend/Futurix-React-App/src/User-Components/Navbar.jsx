import React from 'react';
import styles from '../style'
import { discount } from '../assets'
import { robot } from '../assets'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './user.css'

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { Hero } from './Hero';
import { Stats } from './Stats';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    window.onscroll = () => {
        setToggle(false);
    };

    return (
        <nav className="w-full flex justify-between items-center navbar mb-8 py-4 sm:mb-[20px] sm:px-[20px] px-[60px] fixed top-0 z-40 right-0 border-b border-slate-300/10 backdrop-blur bg-transparent">
            <img src={logo} alt="Hoobank" className="w-[125px] h-[35px]" />

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"
                            } hover:text-secondary`}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div
                    className={`${toggle ? "flex" : "hidden"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mb-0" : "mb-4"
                                    }`}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};