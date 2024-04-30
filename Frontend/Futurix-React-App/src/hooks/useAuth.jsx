/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  AdminDispatchContext,
  UserDispatchContext,
} from "../contexts/userContext";
import { useLocalStorage } from "./useLocalStorage";
import { RoleContext } from "../contexts/RoleContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [admin, setAdmin] = useLocalStorage("admin", null);
  const navigate = useNavigate();
  const setmyUser = useContext(UserDispatchContext);

  const { setRole } = useContext(RoleContext);

  const setmyAdmin = useContext(AdminDispatchContext);

  const login = async (data, role) => {
    setUser(data);
    setmyUser(data);
    console.log(data);
    console.log("From useAuth role is " + role);
    if (role === "customer") {
      setRole(role);
      navigate("/profile");
    } else if (role === "investor") {
      setRole(role);
      navigate("/investor");
    }
  };

  const adminLogin = async (data, role) => {
    setAdmin(data);
    setRole(role);
    setmyAdmin(data);
    navigate("/admin");
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("user");
    navigate("/");
  };

  const adminLogout = () => {
    setAdmin(null);
    window.localStorage.removeItem("admin");
    navigate("/");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      admin,
      adminLogin,
      adminLogout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
