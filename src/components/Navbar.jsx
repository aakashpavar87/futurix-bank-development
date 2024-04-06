// import React, { useState } from "react";
// import { close, logo, menu } from "../assets";
// import { navLinks } from "../constants";

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const [aboutDropdown, setAboutDropdown] = useState(false);
//   const [servicesDropdown, setServicesDropdown] = useState(false);

//   const toggleAboutDropdown = () => {
//     setAboutDropdown(!aboutDropdown);
//     setServicesDropdown(false);
//   };
//   const toggleServicesDropdown = () => {
//     setServicesDropdown(!servicesDropdown);
//     setAboutDropdown(false);
//   };

//   window.onscroll = () => {
//     setToggle(false);
//   };


//   return (
//     <nav className="w-full flex justify-between gap-24 items-center navbar mb-8 py-4 sm:mb-[20px] sm:px-[20px] px-[60px] fixed top-0 z-40 right-0 border-b border-slate-300/10 backdrop-blur bg-transparent">
//       <img src={logo} alt="Hoobank" className="w-[125px] h-[35px]" />

//       {/* <ul className=" dropdown-content m-96 list-none sm:flex hidden md:flex gap-10 justify-end bg-transparent  items-center flex-1">New
//           <li className={`inline-block relative font-poppins font-normal cursor-pointer text-[16px] text-white  hover:text-secondary`}>
//             <a href ="" >Home</a>
//           </li>
//           <li className={`inline-block relative font-poppins font-normal cursor-pointer text-[16px] text-white  hover:text-secondary`}>
//             <a href ="" >Akash</a>
//           </li>
//       </ul> */}

//       <img src={logo} alt="Hoobank" className="w-[125px] h-[35px]" />
//       <ul className=" dropdown-content  m-96 list-none sm:flex hidden md:flex gap-10 justify-end bg-transparent  items-center flex-1">
//         {/* <li className="relative cursor-pointer">
//         Home
//       </li> */}
//         <li className={'inline-block  relative font-poppins font-normal cursor-pointer text-[16px] text-white  hover:text-secondary'} onClick={toggleServicesDropdown}>
//           <span>Loan</span>
//           {servicesDropdown && (
//             <ul className="dropdown-content absolute  shadow-md" onClick={() => setServicesDropdown(false)}>
//              <br/> <a href="" >Personal Loan</a><br/><br/>
//               <a href="" >Business Loan</a>
//             </ul>
//           )}
//         </li>
//         <li className={'inline-block relative font-poppins font-normal cursor-pointer text-[16px] text-white  hover:text-secondary'} onClick={toggleServicesDropdown}>
//           <span>Cards</span>
//           {servicesDropdown && (
//             <ul className="dropdown-content absolute shadow-md" onClick={() => setServicesDropdown(false)}>
//              <br/> <a href="" >Debit Card</a><br/><br/>
//               <a href="" >Credit Card</a>
//             </ul>
//           )}
//         </li>

//         <li className={'inline-block relative font-poppins font-normal cursor-pointer text-[16px] text-white  hover:text-secondary'} onClick={toggleServicesDropdown}>
//           <span>Transaction</span>
//           {servicesDropdown && (
//             <ul className="dropdown-content absolute  shadow-md" onClick={() => setServicesDropdown(false)}>
//              <br/> <a href="" >Deposit</a><br/><br/>
//               <a href="" >Withdraw</a>
//             </ul>
//           )}
//         </li>
//       </ul>







//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle((prev) => !prev)}
//         />

//         <div
//           className={`${toggle ? "flex" : "hidden"
//             } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex flex-col justify-end items-center flex-1">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mb-0" : "mb-4"
//                   }`}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

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
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
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
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;