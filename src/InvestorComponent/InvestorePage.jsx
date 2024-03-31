import React from 'react';
import { useState } from 'react';


const Navigation = () => {
    return (
        <nav className="flex items-center justify-between  border border-gray-200 px-6 py-4 w-full h-full">
            <div className="flex items-center ">
                <img className="h-8 mr-2" src="https://assets.codepen.io/285131/almeria-logo.svg" alt="Logo" />
                <h1 className="text-white text-lg font-semibold p-3">Futurix NeoBank</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-gray-500 hover:text-cyan-300">Overview</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">Payments</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">Cards</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">Account</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">System</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">Business</a>
            </div>
            <div className="flex items-center space-x-4">
                <button className="user-profile flex items-center text-gray-300 hover:text-cyan-300">
                    <span className="mr-2">Matheo Peterson</span>
                    <img className="h-8 w-8 rounded-full" src="https://assets.codepen.io/285131/almeria-avatar.jpeg" alt="Avatar" />
                </button>
                <button className="icon-button large text-gray-300 hover:text-cyan-300">
                    <i className="ph-magnifying-glass"></i>
                </button>
                <button className="icon-button large text-gray-300 hover:text-cyan-300">
                    <i className="ph-bell"></i>
                </button>
                <button className="icon-button large text-gray-300 hover:text-cyan-300 md:hidden">
                    <i className="ph-list"></i>
                </button>
            </div>
        </nav>
    );
}


const SideMenu = () => {
    return (
        <div className="app-body-navigation flex flex-col justify-around border border-gray-200 w-40 pt0 pl-4 pr-16 min-h-screen  relative">
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

            </nav>
            <footer className="footer mt-10 flex w-full text-gray-500 p-6">
                <div className="flex flex-wrap">
                    <h1 className="mr-2">Almeria<small>©</small></h1>
                    <div>
                        Almeria ©<br />
                        All Rights Reserved 2021
                    </div>
                </div>
            </footer>

        </div>
    );
};

const ServiceSection = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div className="tiles flex flex-row m-4 mt-10 w-500 border border-red rounded-xl h-80 p-4 shadow-inner shadow-white">
            <article className="tile flex flex-col justify-between mt-6 m-2 h-52 w-44 bg-olive-500 bg-[#e3ffa8] text-gray-900 rounded-lg p-4 relative transition-transform hover:-translate-y-5 focus-within:ring-2 focus-within:ring-gray-800 border border-gray-800 ">
                <label htmlFor="file-upload" className="cursor-pointer flex pt-5 items-center justify-center">
                    {profileImage ? (
                        <img src={profileImage} alt="Profile" className="object-contain rounded-full" />
                    ) : (
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-900 whitespace-nowrap">Upload Profile Pic</div>
                    )}
                </label>
                <input id="file-upload" type="file" className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer" onChange={handleFileChange} accept="image/*" />
            </article>
            <div className="flex flex-col text-left ml-10 p-4">
                <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300"> John Doe</span>
                <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">john.doe@example.com</span>
                <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">30-10-2002</span>
                <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">john.doe@example.com</span>

            </div>
        </div>
    );


}


const SecurityCard = () => {
    return (
      <div className="m-2 flex-wrap bg-gray-800 max-w-xl h-32  rounded-lg  border border-gray-200 p-4  shadow-inner shadow-white">
        <h3 className="text-lg font-bold mb-2   text-gray-400 hover:text-white">Your Investments Are Secure</h3>
        <p className="  text-gray-200 hover:text-white">We prioritize the safety and security of your investments. Your funds are protected by industry-leading security measures and regulations.</p>
      </div>
    );
  };

  const InvestmentSection = () => {
    // Functionality for handling file change and storing profile image can be removed
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className=" mt-6 mb-6 w-full flex justify-end">
            <div className="w-500 border border-red rounded-xl p-10 shadow-lg shadow-white">

                <div className="flex flex-col text-left ml-10 p-4">

                    <button className="text-lg align-start font-medium p-2 md:p-4 w-15 text-white hover:text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-dotted focus:ring-transparent focus:ring-blue-400 shadow-md shadow-white">
                        <span className="inline-block">
                            <h1
                                className={`text-2xl font-serif ${isHovered ? 'text-shadow-lg' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={isHovered ? { textShadow: "8px 8px 12px black" } : {}}
                            >Cultivate Your Wealth
                            </h1>
                            <span
                                className={`text-4xl block ${isHovered ? 'text-shadow-lg' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={isHovered ? { textShadow: "8px 8px 12px black" } : {}}
                            >
                                Start Investing Today!
                            </span>
                        </span>
                        <button
                            className="block mt-2 text-black bg-amber-100 hover:text-amber-400 hover:bg-amber-700 transition duration-300 text-lg md:text-xl lg:text-2xl border border-black rounded-xl px-4 py-2 shadow-9xl shadow-neutral-950"
                            style={{
                                textDecoration: 'underline',
                                fontSize: '1.25rem',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' // Adjust shadow color here
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

                    </button>
                    <button
                        className="text-lg align-start font-semibold p-2 text-white hover:text-grey-200 bg-green-500 hover:bg-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mt-4 shadow-9xl shadow-neutral-950 transition duration-300 shadow-inner shadow-white"
                        onClick={(e) => {
                            e.preventDefault(); // Prevents default link behavior
                            e.target.classList.add("animate-bounce"); // Applies bounce animation on click
                            setTimeout(() => {
                                e.target.classList.remove("animate-bounce"); // Removes bounce animation after a short delay
                            }, 500);
                        }}
                    > Add Funds
                    </button>
                    {/* You can add more buttons as needed */}
                </div>
            </div>
        </div>
    );
}


const InvestmentServices = () => {
    return (
        <div id="services" className="min-h-screen mr-4">
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold text-center mb-8 hover:text-cyan-400 text-gray-300">Investment Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-400">Online Banking</h2>
                        <p className="text-gray-300 hover:text-cyan-400">Access your investment accounts and manage your portfolio online with ease.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-300">Financial Planning</h2>
                        <p className="text-gray-300 hover:text-cyan-300">Receive personalized financial planning advice to help you achieve your investment goals. </p>&#128522;
                    </div>
                    <div className=" rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-300">Investment Advice</h2>
                        <p className="text-gray-300 hover:text-cyan-300">Get expert investment advice from our experienced financial advisors to make informed decisions.</p>
                    </div>


                    <div className=" bg-gray-800 rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                         <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-400">High-Yield Savings</h2>
                        <p className="text-gray-300 hover:text-cyan-400">
                            Earn competitive interest rates on your savings while having easy access to your funds.
                        </p>
                        <ul className="text-gray-300 mt-4 hover:text-cyan-400">
                            <li>Competitive interest rates</li>
                            <li>No minimum balance requirement</li>
                            <li>FDIC insured for up to  &#8377; 250,000  &#x1F62E;</li>
                        </ul>
                    </div>
                       <div className="rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-300 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-300">Investment Portfolios</h2>
                        <p className="text-gray-300 hover:text-cyan-300">
                            Build a diversified investment portfolio tailored to your risk tolerance and financial goals.
                        </p>
                        <ul className="text-gray-300 mt-4 hover:text-cyan-300">
                            <li>Customizable portfolio options</li>
                            <li>Access to professional investment management</li>
                            <li>Regular portfolio performance updates</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 hover:text-cyan-400 text-white" >Retirement Accounts</h2>
                        <p className="text-gray-300 hover:text-cyan-400">
                            Prepare for retirement with tax-advantaged retirement accounts such as IRAs and 401(k)s.
                        </p>
                        <ul className="text-gray-300 mt-4 hover:text-cyan-400">
                            <li>Tax-deferred growth potential</li>
                            <li>Contributions may be tax-deductible</li>
                            <li>Wide range of investment options</li>
                        </ul>
                    </div>
                    {/* Add more service cards as needed */}
                </div>
            </div>
           
        </div>
    );
}

const ProfileDetails = () => {
    return (
        <div className="flex flex-col justify-end text-right">
            <span className="text-lg font-semibold">John Doe</span>
            <span className="text-sm">john.doe@example.com</span>
            {/* Add other profile details here */}
        </div>
    );
}




// const LoremIpsum = () => {
//     // Lorem Ipsum text with 50 words
//     const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
//     // Split the Lorem Ipsum text into an array of words
//     const loremWords = loremIpsumText.split(' ');
  
//     // Select the first 50 words
//     const lorem50 = loremWords.slice(0, 500).join(' ');
  
//     return <p>{lorem50}</p>;
//   };
  


const TransactionTable = () => {
    return (
        <div   id="investments" className=" w-full overflow-hidden rounded-lg ">
            <table className="w-full">
                <thead className="bg-gray-500">
                    <tr>
                        <th className="px-4 py-2 text-lg justify-center font-semibold">Sr#</th>
                        <th className="px-4 py-2 text-lg font-semibold">Duration Of Investment</th>
                        <th className="px-4 py-2 text-lg font-semibold">Investment  Amount</th>
                        <th className="px-4 py-2 text-lg font-semibold">Investment Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 text-center text-cyan-50">1</td>
                        <td className="text-center px-4 py-2  text-lg font-semibold text-white">1 Year</td>
                        <td className="text-center px-4 py-2  text-cyan-50">&#8377;1000</td>
                        <td className=" text-center px-4 py-2">
                            <span className=" px-2 py-1 text-lg  text-white rounded-full bg-amber-500">Pending</span>
                        </td>
                    </tr>
                    <tr>
                        <td className=" px-4 py-2 text-center text-cyan-50">2</td>
                        <td className=" px-4 py-2 text-center text-lg font-semibold text-white">5 Year</td>
                        <td className="text-center px-4 py-2 text-cyan-50">&#8377;500</td>
                        <td className="text-center px-4 py-2">
                            <span className="px-2 py-1 text-lg  text-white rounded-full bg-green-500">Completed</span>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );

};



const InvestorPage = () => {
    return (
        <div className='h-auto'>

            <div className="h-full w-full">
                <div className="app-body-navigation">
                    <Navigation />
                    <div className='flex gap-4'>
                        <SideMenu />
                        <div className="flex justify-center mt-4 h-full">
                        <div className='flex gap-4 flex-wrap h-full'>
                            <ServiceSection />
                            <div className="flex flex-col">
                                <SecurityCard />
                                <InvestmentSection />
                             </div>
                            <TransactionTable />
                            <InvestmentServices />
                        </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    );
}


export default InvestorPage;
