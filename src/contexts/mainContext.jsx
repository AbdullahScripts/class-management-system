import React, { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [sub, setSub] = useState([]);

  return (
    <Context.Provider value={{ sub, setSub }}>{children}</Context.Provider>
  );
};

export default AppContext;
