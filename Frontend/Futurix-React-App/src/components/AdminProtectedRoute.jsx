/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AdminProtectedRoute = ({ children }) => {
  const { admin } = useAuth();

  if (!admin) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
};
