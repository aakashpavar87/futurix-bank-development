import React, { useContext, useEffect } from "react";
import Home from "./Home-Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Home-Components/Login";
import CustomerRegister from "./Home-Components/CustomerRegister";
import ErrorPage from "./Home-Components/ErrorPage";
import { helloWorldApiService } from "./apis/HelloWorldApi";
import UserHome from "./User-Components/UserHome";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserProvider } from "./contexts/userContext";
import Address from "./User-Components/Acc_adress";
import InvestorPage from "./InvestorComponents/InvestorePage";
import { SecurityCard } from './InvestorComponents/SecurityCard'
import { ServiceSection } from './InvestorComponents/ServiceSection'
import { InvestmentSection } from './InvestorComponents/InvestmentSection'
import { TransactionTable } from './InvestorComponents/TransactionTable'
import { InvestmentServices} from './InvestorComponents/InvestmentServices'
import Investor_Reg from "./InvestorComponents/Investor_Reg";
import ForgotPassword from "./Home-Components/ForgotPassword";
import VerifyAccount from "./Home-Components/VerifyAccount";
import SetPassword from "./Home-Components/SetPassword";
import OtpInputWithValidation from "./Home-Components/OtpInputWithValidation";
// import EmailContext from "./contexts/useEmailContext"

const App = () => {
  useEffect(() => {
    helloWorldApiService()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const {email} = useContext(EmailContext)

  return (
    <AuthProvider>
      <UserProvider>
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
                <UserHome />
              </ProtectedRoute>
            }
            // loader={async ()=>{
            //   return await getOneUserByEmail(email)
            // }}
          />
          <Route
            path="/profile/post"
            element={
              <ProtectedRoute>
                <Address />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/investorLogin" element={<InvestmentForm />} /> */}

          {/* Investor Routes */}
          <Route path="/investorRegister" element={<Investor_Reg />} />
          <Route path="/investor" element={<InvestorPage />}>
            <Route index element={<ServiceSection />} />
            <Route path="service" element={<SecurityCard />} />
            <Route path="investment" element={<InvestmentSection />} />
            <Route path="transactions" element={<TransactionTable />} />
            <Route path="investmentServices" element={<InvestmentServices />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
