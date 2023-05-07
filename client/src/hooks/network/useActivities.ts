import { useEffect, useState } from "react";
import { useTripBuilder } from "../../context/TripBuilderContext";
import useAuthenticatedRequest from "./useAuthenticatedRequest";

const useActivities = () => {
  const { trip } = useTripBuilder();
  const { makeAuthenticatedRequest } = useAuthenticatedRequest();

  const [isLoading, setIsLoading] = useState(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);

      const response = await makeAuthenticatedRequest(
        `/api/attractions?location=${trip?.destination}`,
        "GET"
      );

      setActivities(response);
      setIsLoading(false);
    })();
  }, []);

  return [activities, isLoading];
};

export default useActivities;
