import { ReactNode, createContext, useContext, useState } from "react";

interface Trip {
  origin: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
  accommodation?: Accommodation;
}

interface Accommodation {
  name: string;
  address: string;
  description: string;
  image: string
}

interface TripBuilderContextProps {
  trip: Trip;
  setTrip: (trip: Trip) => void;
}

const defaultState: Partial<TripBuilderContextProps> = {
  trip: {
    origin: "Toronto, ON",
  },
};

const TripBuilderContext =
  createContext<Partial<TripBuilderContextProps>>(defaultState);

export const TripBuilderProvider = ({ children }: any) => {
  const [trip, setTrip] = useState<Trip>(defaultState.trip as Trip);

  return (
    <TripBuilderContext.Provider value={{ trip, setTrip }}>
      {children}
    </TripBuilderContext.Provider>
  );
};

export const useTripBuilder = () => useContext(TripBuilderContext);
