import React, { createContext, useState } from "react";

// UserContext: to query the context state
const UserContext = createContext(undefined);
// UserDispatchContext: to mutate the context state
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
  const userData = window.localStorage.getItem("user")
  const [userDetails, setUserDetails] = useState(userData ? JSON.parse(userData) : null);

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };