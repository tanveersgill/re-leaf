import { useEffect, useState } from "react";
import { useTripBuilder } from "../../context/TripBuilderContext";
import useAuthenticatedRequest from "./useAuthenticatedRequest";

const useAccommodations = () => {
  const { trip } = useTripBuilder();
  const { makeAuthenticatedRequest } = useAuthenticatedRequest();

  const [isLoading, setIsLoading] = useState(false);
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);

      const response = await makeAuthenticatedRequest(
        `/api/hotels?location=${trip?.destination}`,
        "GET"
      );

      setAccommodations(response);
      setIsLoading(false);
    })();
  }, []);

  return [accommodations, isLoading];
};

export default useAccommodations;
