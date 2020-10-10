import React, { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";


export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);
  console.log("state", state);
  const addItem = (payload) => dispatch(
    {
      type: 'add',
      payload,
    }
  );

  return (
    <GlobalContext.Provider value={{ state, addItem }}>
      {children}
    </GlobalContext.Provider>
  );
}