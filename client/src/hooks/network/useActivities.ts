import { useEffect, useState } from "react";
import { useTripBuilder } from "../../context/TripBuilderContext";
import useAuthenticatedRequest from "./useAuthenticatedRequest";

const useActivities = () => {
  const { trip, setTrip } = useTripBuilder();
  const { makeAuthenticatedRequest } = useAuthenticatedRequest();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);

      const response = await makeAuthenticatedRequest(
        `/api/attractions?location=${trip?.destination}`,
        "GET"
      );

      trip && setTrip && setTrip({ ...trip, activities: response });
      setIsLoading(false);
    })();
  }, []);

  return [trip?.activities, isLoading];
};

export default useActivities;
