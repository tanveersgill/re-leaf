import { useEffect, useState } from "react";
import { useTripBuilder } from "../../context/TripBuilderContext";
import useAuthenticatedRequest from "./useAuthenticatedRequest";

const useAccommodations = () => {
  const { trip, setTrip } = useTripBuilder();
  const { makeAuthenticatedRequest } = useAuthenticatedRequest();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);

      const response = await makeAuthenticatedRequest(
        `/api/hotels?location=${trip?.destination}`,
        "GET"
      );

      trip && setTrip && setTrip({ ...trip, accommodations: response });
      setIsLoading(false);
    })();
  }, []);

  return [trip?.accommodations, isLoading];
};

export default useAccommodations;
