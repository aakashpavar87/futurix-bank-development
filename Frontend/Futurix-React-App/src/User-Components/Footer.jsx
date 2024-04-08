import React from 'react';
import styles from '../style'
import './user.css'

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";


export const Footer = () => (
    <section className={`w-[80%] ${styles.flexCenter} ${styles.paddingY} p-6 flex-col`} data-aos="fade-up">
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-[1] flex flex-col justify-start mr-10">
                <img
                    src={logo}
                    alt="hoobank"
                    className="w-[266px] h-[72.14px] object-contain"
                />
                <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px] relative`}>
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center relative p-2">
                            {footerlink.title}
                            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[2px] bg-red-50"></span>
                        </h4>
                        <ul className="list-none mt-4 text-center">
                            {footerlink.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


        </div>

        <div className="w-full flex justify-center  md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">


            <div className="flex align-center flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                        onClick={() => window.open(social.link)}
                    />
                ))}
            </div>
        </div>
    </section>
);