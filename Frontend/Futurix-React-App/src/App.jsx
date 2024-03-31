import React, { useEffect } from "react";
import Home from "./Home-Components/Home";
import {
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Home-Components/Login";
import CustomerRegister from "./Home-Components/CustomerRegister";
import ErrorPage from "./Home-Components/ErrorPage";
import { helloWorldApiService } from "./apis/HelloWorldApi";
import UserHome from "./User-Components/UserHome";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserProvider } from "./contexts/userContext";

const App = () => {
  useEffect(() => {
    helloWorldApiService()
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <AuthProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CustomerRegister />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserHome />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserProvider>
    </AuthProvider>
  )
};

export default App;
