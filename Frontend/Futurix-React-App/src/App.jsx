import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { helloWorldApiService } from "./apis/HelloWorldApi";

// User Components
import UserHome from "./User-Components/UserHome";
import Address from "./User-Components/Acc_adress";

// Investor Components
import InvestorPage from "./InvestorComponents/InvestorePage";
import { SecurityCard } from './InvestorComponents/SecurityCard'
import { ServiceSection } from './InvestorComponents/ServiceSection'
import { InvestmentSection } from './InvestorComponents/InvestmentSection'
import { TransactionTable } from './InvestorComponents/TransactionTable'
import { InvestmentServices} from './InvestorComponents/InvestmentServices'
import Investor_Reg from "./InvestorComponents/Investor_Reg";

// Home Components
import Home from "./Home-Components/Home";
import Login from "./Home-Components/Login";
import CustomerRegister from "./Home-Components/CustomerRegister";
import ErrorPage from "./Home-Components/ErrorPage";
import ForgotPassword from "./Home-Components/ForgotPassword";
import VerifyAccount from "./Home-Components/VerifyAccount";
import SetPassword from "./Home-Components/SetPassword";

//Providers
import { AuthProvider } from "./hooks/useAuth";
import { UserProvider } from "./contexts/userContext";
import { EmailProvider } from "./contexts/emailContext"
import { RoleContext, RoleProvider } from "./contexts/RoleContext";
import { InvestmentProvider } from "./contexts/InvestmentContext";

const App = () => {

  const {role} = useContext(RoleContext)

  useEffect(() => {
    helloWorldApiService()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AuthProvider>
      <UserProvider>
          <EmailProvider>
            <InvestmentProvider>
              <Routes>
                {/* Public Routes */}

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<CustomerRegister />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/verify-account" element={<VerifyAccount />} />
                <Route path="/set-password" element={<SetPassword />} />

                {/* User Routes */}
                
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      {(role === 'customer')?<UserHome />:<InvestorPage />}
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile/address"
                  element={
                    <ProtectedRoute>
                      <Address />
                    </ProtectedRoute>
                  }
                />

                {/* Investor Routes */}
                <Route path="/investorRegister" element={<Investor_Reg />} />
                <Route 
                  path="/investor" 
                  element={
                    <ProtectedRoute>
                      <InvestorPage />
                    </ProtectedRoute>
                  }>
                  <Route index 
                    element={
                        <ServiceSection />
                    } 
                  />
                  <Route path="service" 
                    element={
                        <SecurityCard />
                    } 
                  />
                  <Route path="investment" 
                    element={
                        <InvestmentSection />
                    } 
                  />
                  <Route path="transactions" 
                    element={
                        <TransactionTable />
                    } 
                  />
                  <Route path="investmentServices" 
                    element={
                        <InvestmentServices />
                    } 
                  />
                </Route>

                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </InvestmentProvider>
          </EmailProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
