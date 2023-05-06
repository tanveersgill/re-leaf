import { createContext, useContext, useState } from "react";

const defaultState = {
  origin: "Toronto, ON",
  destination: "",
  startDate: "",
  endDate: "",
};

const TripBuilderContext = createContext(defaultState);

export const TripBuilderProvider = ({ children }) => {
  const [trip, setTrip] = useState(defaultState);

  return (
    <TripBuilderContext.Provider value={{ trip, setTrip }}>
      {children}
    </TripBuilderContext.Provider>
  );
};

export const useTripBuilder = () => useContext(TripBuilderContext);
