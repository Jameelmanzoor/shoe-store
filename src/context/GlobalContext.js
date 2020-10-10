import React, { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";


export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  // Add the Product from cart
  const addItem = (payload) => dispatch(
    {
      type: 'ADD',
      payload,
    }
  );

  // Remove the Product from cart
  const removeItem = (payload) => dispatch(
    {
      type: 'REMOVE',
      payload,
    }
  )

  const payment = () => dispatch({
    type: 'PAY',
  }
  )

  return (
    <GlobalContext.Provider value={{ state, addItem, removeItem, payment }}>
      {children}
    </GlobalContext.Provider>
  );
}