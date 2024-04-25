import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { helloWorldApiService } from "./apis/HelloWorldApi";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { DarkModeContext } from "./contexts/DarkModeContext";
import { productInputs, userInputs } from "./formSource";
import AdminHome from "./pages/home/AdminHome";
import List from "./pages/list/List";
import AdminLogin from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.css";

// User Components
import Address from "./User-Components/Acc_adress";

// Investor Components
import { InvestmentSection } from "./InvestorComponents/InvestmentSection";
import { InvestmentServices } from "./InvestorComponents/InvestmentServices";
import Investor_Reg from "./InvestorComponents/Investor_Reg";
import InvestorPage from "./InvestorComponents/InvestorePage";
import { SecurityCard } from "./InvestorComponents/SecurityCard";
import { ServiceSection } from "./InvestorComponents/ServiceSection";
import { TransactionTable } from "./InvestorComponents/TransactionTable";

// Home Components
import CustomerRegister from "./Home-Components/CustomerRegister";
import ErrorPage from "./Home-Components/ErrorPage";
import ForgotPassword from "./Home-Components/ForgotPassword";
import Home from "./Home-Components/Home";
import Login from "./Home-Components/Login";
import SetPassword from "./Home-Components/SetPassword";
import VerifyAccount from "./Home-Components/VerifyAccount";

//Providers
import { Hero } from "./User-Components/Hero";
import KYCForm from "./User-Components/KYCForm";
import { Stats } from "./User-Components/Stats";
import UserHomePage from "./User-Components/UserHomePage";
import { InvestmentProvider } from "./contexts/InvestmentContext";
import { RefreshContextProvider } from "./contexts/RefreshContext";
import { RoleProvider } from "./contexts/RoleContext";
import { EmailProvider } from "./contexts/emailContext";
import { UserProvider } from "./contexts/userContext";
import { AuthProvider } from "./hooks/useAuth";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    helloWorldApiService()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`${darkMode ? "app dark" : "app"} p-0`}>
      <RefreshContextProvider>
        <UserProvider>
          <RoleProvider>
            <AuthProvider>
              <EmailProvider>
                <InvestmentProvider>
                  <Routes>
                    {/* Public Routes */}

                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<CustomerRegister />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                    <Route path="/verify-account" element={<VerifyAccount />} />
                    <Route path="/set-password" element={<SetPassword />} />

                    {/* User Routes */}

                    <Route
                      path="/profile"
                      element={
                        <ProtectedRoute>
                          <UserHomePage />
                        </ProtectedRoute>
                      }
                    >
                      <Route index element={<Hero />} />
                      <Route path="account" element={<Stats />} />
                      <Route path="address" element={<Address />} />
                      <Route path="kyc" element={<KYCForm />} />
                    </Route>

                    {/* Investor Routes */}
                    <Route
                      path="/investorRegister"
                      element={<Investor_Reg />}
                    />
                    <Route
                      path="/investor"
                      element={
                        <ProtectedRoute>
                          <InvestorPage />
                        </ProtectedRoute>
                      }
                    >
                      <Route index element={<ServiceSection />} />
                      <Route path="service" element={<SecurityCard />} />
                      <Route
                        path="investment"
                        element={<InvestmentSection />}
                      />
                      <Route
                        path="transactions"
                        element={<TransactionTable />}
                      />
                      <Route
                        path="investmentServices"
                        element={<InvestmentServices />}
                      />
                    </Route>

                    {/* Admin Routes */}

                    <Route path="/admin">
                      <Route index element={<AdminHome />} />
                      <Route path="login" element={<AdminLogin />} />
                      <Route path="users">
                        <Route index element={<List />} />
                        <Route path=":userId" element={<Single />} />
                        <Route
                          path="new"
                          element={
                            <New inputs={userInputs} title="Add New User" />
                          }
                        />
                      </Route>
                      <Route path="products">
                        <Route index element={<List />} />
                        <Route path=":productId" element={<Single />} />
                        <Route
                          path="new"
                          element={
                            <New
                              inputs={productInputs}
                              title="Add New Product"
                            />
                          }
                        />
                      </Route>
                    </Route>

                    <Route path="*" element={<ErrorPage />} />
                  </Routes>
                </InvestmentProvider>
              </EmailProvider>
            </AuthProvider>
          </RoleProvider>
        </UserProvider>
      </RefreshContextProvider>
    </div>
  );
};

export default App;
