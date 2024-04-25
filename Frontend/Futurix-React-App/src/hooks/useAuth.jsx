import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { UserDispatchContext } from "../contexts/userContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();
  const setmyUser = useContext(UserDispatchContext);

  const login = async (data, role) => {
    setUser(data);
    setmyUser(data);
    console.log("From useAuth role is " + role);
    if (role === "customer") navigate("/profile");
    else if (role === "investor") navigate("/investor");
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("user");
    navigate("/");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
