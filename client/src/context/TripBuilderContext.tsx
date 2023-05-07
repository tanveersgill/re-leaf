import { ReactNode, createContext, useContext, useState } from "react";

export interface Trip {
  origin: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
  accommodations?: Place[];
  activities?: Place[];
  flights?: Flight[];
}

export interface Place {
  name: string;
  address: string;
  rating: number;
  categories: string[];
}

export interface Flight {
  airline: string;
  cost: number;
  emissions: string;
  emissionReduction: string;
}

interface TripBuilderContextProps {
  trip: Trip;
  setTrip: (trip: Trip) => void;
}

const defaultState: Partial<TripBuilderContextProps> = {
  trip: {
    origin: "Toronto, ON",
    destination: "",
    startDate: "",
    endDate: "",
    accommodations: [],
    activities: [],
    flights: [],
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
