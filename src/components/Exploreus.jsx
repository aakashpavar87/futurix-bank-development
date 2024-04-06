import React from 'react';
import RightSideArrow from '../components/RightSideArrow.svg';

const Exploreus = () => {
    return (
        <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white p-8 md:p-12 lg:p-16   px-4 py-8 md:px-12 lg:px-16">
            <div className="bg-gray-800 rounded-2xl border border-gray-600 p-8 md:p-8 lg:p-10 mb-10  px-4 py-8 md:px-12 lg:px-16">
                <div className="max-w-6xl mx-auto ">
                    {/* Page Header */}
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-300 mb-6">Explore Futurix Neo Bank</h1>
                    {/* About Section */}
                    <div className="bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 mb-8">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">About Us</h2>
                        <p className="text-lg text-gray-0 mb-4">
                            Futurix Neo Bank is the future of banking. We offer fully automated, 24x7 services that are designed to make managing your finances easier and more convenient than ever before.
                        </p>
                        <p className="text-lg text-gray-0 mb-4">
                            With Futurix, you can open accounts, apply for loans, manage your cards, and access a wide range of other services with just a few clicks. Our platform is built for speed, ensuring faster transactions and seamless experiences every time.
                        </p>
                        <p className="text-lg text-gray-0 mb-4">
                            Experience the power of Futurix Neo Bank and take control of your financial future today.
                        </p>
                    </div>
                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Accounts */}
                        <div className="bg-grey-900 rounded-lg shadow-sm p-6 md:p-8 shadow-white ">
                            <h2 className="text-2xl font-bold text-red-500 mb-4">Accounts</h2>
                            <p className="text-lg text-gray-0 mb-4">
                                Open a Futurix account in minutes and enjoy 24x7 access to your funds. Our accounts come with no monthly fees and provide you with the flexibility you need to manage your money effortlessly.
                            </p>
                            <div className="flex right-6 bottom-6 hover:scale-110 border-rose-400 transition-transform duration-300 ease-in-out">
                                   <button className="flex items-center text-cyan-100 hover:text-cyan-300 border p-2 m-2 rounded-xl border-gray-500 mt-3">
                                    Know More
                                    <img src={RightSideArrow} alt='Redirect' className='hover:scale-110 hover:text-red-300' ></img>
                                </button>
                            </div>
                        </div>

                        {/* Loans */}
                        <div className="bg-grey-900 rounded-lg shadow-sm p-4 md:p-8 relative shadow-white">
                            <h2 className="text-2xl font-bold text-red-500 mb-4">Loans</h2>
                            <p className="text-lg text-gray-0 mb-4">
                                Need funds for your next big project or purchase? Futurix offers hassle-free loans with competitive rates and flexible repayment options. Apply online and get approved in minutes.
                            </p>
                            {/* Know More Button */}
                            <div className="flex right-6 bottom-6 hover:scale-110 border-rose-400 transition-transform duration-300 ease-in-out">
                                     <button className="flex items-center text-cyan-100 hover:text-cyan-300 border p-2 rounded-xl border-gray-500 mt-5">
                                    Know More
                                    <img src={RightSideArrow} alt='Redirect' className='hover:scale-105 hover:text-red-300' ></img>
                                </button>
                            </div>

                        </div>

                        {/* Cards */}
                        <div className="bg-grey-900 rounded-lg shadow-sm p-6 md:p-8 shadow-white relative" >
                            <h2 className="text-2xl font-bold text-red-500 mb-4">Cards</h2>
                            <p className="text-lg text-gray-0 mb-4">
                                Manage your finances on the go with Futurix cards. Whether you need a debit card for everyday purchases or a credit card for larger expenses, we've got you covered. Plus, enjoy exclusive rewards and benefits with every swipe.
                            </p>
                            <div className="flex right-6 bottom-6 hover:scale-110 border-rose-400 transition-transform duration-300 ease-in-out">
                                    <button className="flex items-center text-cyan-100 hover:text-cyan-300 border p-2 m-2 rounded-xl border-gray-500 mt-3">
                                    Know More
                                    <img src={RightSideArrow} alt='Redirect' className='hover:scale-110 hover:text-red-300' ></img>
                                </button>
                            </div>
                        </div>

                        {/* Other Services */}
                        <div className="bg-grey-900 rounded-lg shadow-sm p-6 md:p-8 shadow-white">
                            <h2 className="text-2xl font-bold text-red-500 mb-4">Other Services</h2>
                            <p className="text-lg text-gray-0 mb-4">
                                In addition to accounts, loans, and cards, Futurix offers a wide range of other services to meet your financial needs. From savings accounts to investment options, insurance products to wealth management solutions, we have everything you need to achieve your financial goals.
                            </p>
                            <div className="flex right-6 bottom-6 hover:scale-110 border-rose-400 transition-transform duration-300 ease-in-out">
                                <button className="flex items-center text-cyan-100 hover:text-cyan-300 border p-2 m-2 rounded-xl border-gray-500 mt-3">
                                    Know More
                                    <img src={RightSideArrow} alt='Redirect' className='hover:scale-110 hover:text-red-300' ></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exploreus;
