import { Link } from "react-router-dom";
export const SideMenu = () => {
  return (
    <div className="app-body-navigation flex flex-col justify-around border border-gray-200 w-40 pt0 pl-4 pr-16 min-h-screen  relative">
      <nav className="flex pt-12 flex-col justify-start gap-4 h-1/2 pl-2 p-1">
        <Link to="/investor" className="flex items-center gap-2">
          <i className="ph-browsers"></i>
          <span className="text-gray-500 hover:text-cyan-300">Dashboard</span>
        </Link>
        <Link to="investment" className="flex items-center gap-2">
          <i className="ph-check-square"></i>
          <span className="text-gray-500 hover:text-cyan-300">Investments</span>
        </Link>
        <Link to="service" className="flex items-center gap-2">
          <i className="ph-swap"></i>
          <span className="text-gray-500 hover:text-cyan-300">Services</span>
        </Link>
        <Link to="transactions" className="flex items-center gap-2">
          <i className="ph-swap"></i>
          <span className="text-gray-500 hover:text-cyan-300">
            Transactions
          </span>
        </Link>
        <Link to="investmentServices" className="flex items-center gap-2">
          <i className="ph-swap"></i>
          <span className="text-gray-500 hover:text-cyan-300">
            Investment Services
          </span>
        </Link>
      </nav>
      <footer className="footer mt-10 flex w-full text-gray-500 p-6">
        <div className="flex flex-wrap">
          <h1 className="mr-2">
            Almeria<small>©</small>
          </h1>
          <div>
            Almeria ©<br />
            All Rights Reserved 2021
          </div>
        </div>
      </footer>
    </div>
  );
};
