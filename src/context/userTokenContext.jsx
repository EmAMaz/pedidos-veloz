import { useState, useContext, createContext } from "react";

const userTokenContext = createContext();

export const useUserToken = () => useContext(userTokenContext);

export const UserTokenProvider = ({ userTokenValue, children }) => {
  return (
    <userTokenContext.Provider value={userTokenValue}>
      {children}
    </userTokenContext.Provider>
  );
};
