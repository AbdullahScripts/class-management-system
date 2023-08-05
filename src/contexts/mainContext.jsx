import React, { createContext, useState } from "react";



export const Context = createContext();

const AppContext = ({ children }) => {
    const [sub, setSub] = useState();
    const[subDetail,setSubDetail]=useState([])

  return (
    <Context.Provider value={{ sub, setSub,subDetail,setSubDetail }}>{children}</Context.Provider>
  );
};

export default AppContext;
