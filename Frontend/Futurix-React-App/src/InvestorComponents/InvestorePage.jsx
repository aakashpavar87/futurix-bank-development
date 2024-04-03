import { Outlet } from "react-router-dom";
// import Navigation from './Navigation'
import { SideMenu } from './SideMenu'
import './Investor.css';
import { Navbar } from "../components";

const InvestorPage = () => {
  return (
    <div className="min-h-screen body">
      <div className="h-auto">
        <div className="h-full w-full">
          <div className="app-body-navigation">
            <Navbar isInvestor />
            <div className="flex gap-4">
              <SideMenu />
              <div className="flex justify-center mt-4 h-full">
                <div className="flex gap-4 pt-12 flex-wrap h-full">
                  <Outlet />
                  {/* <ServiceSection />
                <TransactionTable />
                <InvestmentServices /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="flex flex-col">
                                <SecurityCard />
                                <InvestmentSection />
                             </div> */
}

export default InvestorPage;
