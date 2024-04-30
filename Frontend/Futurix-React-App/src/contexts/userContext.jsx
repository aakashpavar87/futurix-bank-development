/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// UserContext: to query the context state
const UserContext = createContext(undefined);
// UserDispatchContext: to mutate the context state
const UserDispatchContext = createContext(undefined);

const AdminContext = createContext(undefined);

const AdminDispatchContext = createContext(undefined);

function UserProvider({ children }) {
  const adminData = window.localStorage.getItem("admin");

  const userData = window.localStorage.getItem("user");

  const [userDetails, setUserDetails] = useState(
    userData ? JSON.parse(userData) : null
  );

  const [adminDetails, setAdminDetails] = useState(
    adminData ? JSON.parse(adminData) : null
  );

  return (
    <AdminContext.Provider value={adminDetails}>
      <AdminDispatchContext.Provider value={setAdminDetails}>
        <UserContext.Provider value={userDetails}>
          <UserDispatchContext.Provider value={setUserDetails}>
            {children}
          </UserDispatchContext.Provider>
        </UserContext.Provider>
      </AdminDispatchContext.Provider>
    </AdminContext.Provider>
  );
}

export {
  UserContext,
  UserDispatchContext,
  UserProvider,
  AdminContext,
  AdminDispatchContext,
};
