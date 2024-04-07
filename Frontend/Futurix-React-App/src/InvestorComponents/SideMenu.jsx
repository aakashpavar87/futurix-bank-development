import { Link } from "react-router-dom";
import { logo } from "../assets";
import {
  BiHomeAlt,
  BiCheckSquare,
  BiTransfer,
  BiCreditCard,
  BiLogOut,
} from "react-icons/bi";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
// export const SideMenu = () => {
//   return (
//     <div className="app-body-navigation flex flex-col justify-around border border-gray-200 w-40 pt0 pl-4 pr-16 min-h-screen  relative">
//       {/* Logo */}
//       <div className="logo flex items-center justify-center py-4">
//         <img src={logo} alt="Logo" className="h-10 w-24" />
//       </div>

//       <nav className="flex pt-12 flex-col justify-start gap-4 h-1/2 pl-2 p-1">
//         <Link to="/investor" className="flex items-center gap-2">
//           <i className="ph-browsers"></i>
//           <span className="text-gray-500 hover:text-cyan-300">Dashboard</span>
//         </Link>
//         <Link to="investment" className="flex items-center gap-2">
//           <i className="ph-check-square"></i>
//           <span className="text-gray-500 hover:text-cyan-300">Investments</span>
//         </Link>
//         <Link to="service" className="flex items-center gap-2">
//           <i className="ph-swap"></i>
//           <span className="text-gray-500 hover:text-cyan-300">Services</span>
//         </Link>
//         <Link to="transactions" className="flex items-center gap-2">
//           <i className="ph-swap"></i>
//           <span className="text-gray-500 hover:text-cyan-300">
//             Transactions
//           </span>
//         </Link>
//         <Link to="investmentServices" className="flex items-center gap-2">
//           <i className="ph-swap"></i>
//           <span className="text-gray-500 hover:text-cyan-300">
//             Investment Services
//           </span>
//         </Link>
//       </nav>
//       {/* Logout Link */}
//       <Link to="/logout" className="logout flex items-center justify-center text-gray-500 p-2 hover:text-red-500">
//         <div className="flex justify-center items-center gap-2">
//           <BiLogOut />
//           <span className="text-base">Logout</span>
//         </div>
//       </Link>
//       <footer className="footer mt-10 flex w-full text-gray-500 p-6">
//         <div className="flex flex-wrap">
//           <div>
//             Futurix Bank ©<br />
//             All Rights Reserved 2024
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

export const SideMenu = () => {

  const { logout } = useAuth();
  const [user, setUser] = useState(window.localStorage.getItem("user")); // Initialize user state with null

  const handleLogout = () => {
    logout();
    setUser(null); // Clear user state after logout
  };
  return (
    <div className="app-body-navigation flex flex-col justify-around border border-gray-200 w-40 pt0 pl-4 pr-16 min-h-screen  relative">
      {/* Logo */}
      <div className="logo flex items-center justify-center py-4">
        <Link to={'/'}>
          <img src={logo} alt="Logo" className="h-10 w-24" />
        </Link>
      </div>

      <nav className="flex pt-12 flex-col justify-start gap-4 h-1/2 pl-2 p-1">
        <Link to="/investor" className="flex items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <BiHomeAlt className="text-gray-500 text-xl" />
            <span className="text-gray-500 hover:text-cyan-300">Dashboard</span>
          </div>
        </Link>
        <Link to="/investor/investment" className="flex items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <BiCheckSquare className="text-gray-500 text-3xl" />
            <span className="text-gray-500 hover:text-cyan-300">
              Make Investment
            </span>
          </div>
        </Link>
        <Link to="/investor/service" className="flex items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <BiTransfer className="text-gray-500 text-xl" />
            <span className="text-gray-500 hover:text-cyan-300">Services</span>
          </div>
        </Link>
        <Link to="/investor/transactions" className="flex items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <BiCreditCard className="text-gray-500 text-xl" />
            <span className="text-gray-500 hover:text-cyan-300">
              Transactions
            </span>
          </div>
        </Link>
        <Link to="/investor/investmentServices" className="flex items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <BiCreditCard className="text-gray-500 text-3xl" />
            <div>
              <span className="text-gray-500 hover:text-cyan-300">
                Investment Services
              </span>
            </div>
          </div>
        </Link>
      </nav>

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

      {/* Footer */}
      <footer className="footer mt-10 flex w-full text-gray-500 p-6">
        <div className="flex flex-wrap">
          <div>
            Futurix Bank © <br />
            All Rights Reserved 2024
          </div>
        </div>
      </footer>
    </div>
  );
};
