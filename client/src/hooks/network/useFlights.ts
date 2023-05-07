import { useEffect, useState } from "react";
import { Flight, useTripBuilder } from "../../context/TripBuilderContext";
import useAuthenticatedRequest from "./useAuthenticatedRequest";

const useFlights = () => {
  const { trip, setTrip } = useTripBuilder();
  const { makeAuthenticatedRequest } = useAuthenticatedRequest();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);

      const response = await makeAuthenticatedRequest(
        `/api/flights?destination=${trip?.destination}&fromDate=${trip?.startDate}&toDate=${trip?.endDate}`,
        "GET"
      );

      const sortedFlights = response.sort(
        (a: Flight, b: Flight) =>
          Number(a.emissionReduction.split("%")[0]) -
          Number(b.emissionReduction.split("%")[0])
      );

      trip && setTrip && setTrip({ ...trip, flights: sortedFlights });
      setIsLoading(false);
    })();
  }, []);

  return [trip?.flights, isLoading];
};

export default useFlights;
