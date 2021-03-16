import React, { createContext } from "react";

export const FlightContext = createContext({});

export const FlightContextProvider = ({ children, value }) => {
  console.log(value);
  const FlightContextValue = {
    flightOffer: value,
    search: "",
  };

  return (
    <FlightContext.Provider value={FlightContextValue}>
      {children}
    </FlightContext.Provider>
  );
};
