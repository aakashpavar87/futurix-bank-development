import React from 'react';
import styles from './style'
import { discount } from '../assets'
import { robot } from '../assets'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

import { close, menu } from "../assets";
import { navLinks } from "./constants";



const SideMenu = () => {
    return (
        <div className="app-body-navigation flex flex-col justify-between  mt-6 pt-10 border border-gray-200 w-40 pt0 pl-4 pr-16 min-h-screen  ">
            <nav className="flex flex-col justify-start gap-4 h-1/2 pl-2 p-1">
                <a href="#" className="flex items-center gap-2">
                    <i className="ph-browsers"></i>
                    <span className="text-gray-500 hover:text-cyan-300" >Dashboard</span>
                </a>
                <a href="#investments" className="flex items-center gap-2">
                    <i className="ph-check-square"></i>
                    <span className="text-gray-500 hover:text-cyan-300">Investments</span>
                </a>
                <a href="#services" className="flex items-center gap-2">
                    <i className="ph-swap"></i>
                    <span className="text-gray-500 hover:text-cyan-300">Services</span>
                </a>
                <a href="#services" className="flex items-center gap-2">
                    <i className="ph-swap"></i>
                    <span className="text-gray-500 hover:text-cyan-300">Cards</span>
                </a>
                <a href="#services" className="flex items-center gap-2">
                    <i className="ph-swap"></i>
                    <span className="text-gray-500 hover:text-cyan-300">Transactions</span>
                </a>
                <a href="#services" className="flex items-center gap-2">
                    <i className="ph-swap"></i>
                    <span className="text-gray-500 hover:text-cyan-300">Loan</span>
                </a>


            </nav>
            <footer className="footer mt-10 flex w-full text-gray-500 p-6">
                <div className="flex flex-wrap">
                    <h1 >Futurix<small>©</small></h1>
                    <div>
                        Futurix ©<br />
                        All Rights Reserved 2024
                    </div>
                </div>
            </footer>

        </div>
    );
};



const Stats = () => {
    const navigate = useNavigate();
    const onsubmit = () => {
        navigate("/cardapply")
    }
    const onc = () => {
        navigate("depositform");
    }

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
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (<>
        <div class="app">
            <header class="app-header">


                <div class="app-header-mobile">
                    <button class="icon-button large">
                        <i class="ph-list"></i>
                    </button>
                </div>

            </header>
            <div class="app-body">
                <div class="app-body-navigation">


                </div>
                <div className="app-body-main-content">
                    <section className="service-section">
                        <h2>Service</h2>
                        <div className="service-section-header">
                            <div className="search-field">
                                <i className="ph-magnifying-glass"></i>
                                <input type="text" placeholder="Loan Id" />
                            </div>

                            <button className="flat-button">
                                Search
                            </button>
                        </div>
                        <div className="mobile-only">
                            <button className="flat-button">
                                Toggle search
                            </button>
                        </div>
                        <div className="tiles">
                            <article className="tile">
                                <div className="tile-header">
                                    <i className="ph-lightning-light"></i>
                                    <h3>
                                        <span>Electricity</span>
                                        <span>UGVCL.</span>
                                    </h3>
                                </div>
                                <a href="#">
                                    <span>Go to service</span>
                                    <span className="icon-button">
                                        <i className="ph-caret-right-bold"></i>
                                    </span>
                                </a>
                            </article>
                            <article className="tile">
                                <div className="tile-header">
                                    <i className="ph-fire-simple-light"></i>
                                    <h3>
                                        <span>Gas</span>
                                        <span>Sabarmati Gas</span>
                                    </h3>
                                </div>
                                <a href="#">
                                    <span>Go to service</span>
                                    <span className="icon-button">
                                        <i className="ph-caret-right-bold"></i>
                                    </span>
                                </a>
                            </article>
                            <article className="tile">
                                <div className="tile-header">
                                    <i className="ph-file-light"></i>
                                    <h3>
                                        <span>Tax online</span>
                                        <span>Gst.</span>
                                    </h3>
                                </div>
                                <a href="#">
                                    <span>Go to service</span>
                                    <span className="icon-button">
                                        <i className="ph-caret-right-bold"></i>
                                    </span>
                                </a>
                            </article>
                        </div>
                        <div className="service-section-footer">
                            <p>Services are paid according to the current state of the currency and tariff.</p>
                        </div>
                    </section>
                    <section className="transfer-section">
                        <div className="transfer-section-header">
                            <h2>Latest transfers</h2>
                            <div className="filter-options">
                                <p>Filter selected: more than 10000 </p>
                                <button className="icon-button">
                                    <i className="ph-funnel"></i>
                                </button>
                                <button className="icon-button">
                                    <i className="ph-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="transfers">
                            <div className="transfer">
                                <div className="transfer-logo">
                                    <img src="https://assets.codepen.io/285131/apple.svg" alt="Apple Logo" />
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
                                <div className="transfer-number">
                                    -  5500
                                </div>
                            </div>
                            <div className="transfer">
                                <div className="transfer-logo">
                                    <img src="https://assets.codepen.io/285131/pinterest.svg" alt="Pinterest Logo" />
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
                                <div className="transfer-number">
                                    -  1200
                                </div>
                            </div>
                            <div className="transfer">
                                <div className="transfer-logo">
                                    <img src="https://assets.codepen.io/285131/warner-bros.svg" alt="Warner Bros. Logo" />
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
                                <div className="transfer-number">
                                    -  700
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="app-body-sidebar">
                    <section className="payment-section">
                        <h2>New Payment</h2>
                        <div className="payment-section-header">
                            <p>Choose a card to transfer money</p>
                            <div>

                            </div>
                        </div>
                        <div className="payments">
                            <div className="payment">
                                <div className="card green">
                                    <span>01/22</span>
                                    <span>
                                        •••• 4012
                                    </span>
                                </div>
                                <div className="payment-details">
                                    <h3>Credit Card</h3>
                                    <div>
                                        <span>10550</span>
                                        <button className="icon-button">
                                            <i className="ph-caret-right-bold"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="payment">
                                <div className="card olive">
                                    <span>12/23</span>
                                    <span>
                                        •••• 2228
                                    </span>
                                </div>
                                <div className="payment-details">
                                    <h3>Debit Card</h3>
                                    <div>
                                        <span>10000+</span>
                                        <button className="icon-button">
                                            <i className="ph-caret-right-bold"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="faq">

                        </div>
                        <div className="payment-section-footer">

                        </div>
                    </section>
                </div>

            </div>
        </div>
    </>
    );
};

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} p-6 flex-col`} data-aos="fade-up">
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

const Hero = () => {
    const navigate = useNavigate();

    // const navigate = useNavigate();
    const onsubmit = () => {
        navigate("/profileup")
    }

    return (

        <section id='home' className={`flex md:flex-row flex-col  p-2 ${styles.paddingY}`} >

            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


                <div className="flex flex-row just-between items-center w-full">



                    <img src='https://st2.depositphotos.com/2605379/49847/i/450/depositphotos_498472352-stock-photo-businessman-pointing-abstract-glowing-interface.jpg' className="rounded-full w-96 h-96"></img>
                </div>
                <div className="flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ml-20">

                    <img src={discount} className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>


                        <span className='text-white'>Bharat </span>
                        {/* type of {" "} */}
                        <span className='text-white'>Kumavat  </span>
                        {/* for small Businesses */}

                    </p>
                </div>

                {/* <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Banking Method
      </h1> */}
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    <b>Account Number </b> : 123123123123 <br></br>
                    <b>Address :</b> C-402 , Shyamved Saffire , Zundal <br></br>
                    <b>City :</b>Gandhinagar <br></br>
                    <b>State :</b> Gujarat <br></br>
                    <b>Phone No:</b>7863096311<br></br>
                    <b>Email :</b> harshvgajjar@gmail.com<br></br>
                    <b>Date of Birth :</b> 22/09/2003 <br></br>

                    <br></br>
                    <button className='bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 roundedo' onClick={onsubmit} >
                        Edit</button><br></br>

                </p>
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={robot} className="w-[100%] h-[100%] relative z-[5]" />

                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
                <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                {/* <GetStarted /> */}
            </div>

        </section>
    );
};


const Navbar = () => {
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


const HomePage = () => (
    <>
        <Navbar />
        <div className="flex">
            <SideMenu />
            <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                    <Hero />
                    <Stats />
                    <Footer />
                </div>
            </div>
        </div>
    </>
);


export default HomePage;