import { useEffect, useState } from "react";
import { useTripBuilder } from "../../context/TripBuilderContext";
import useAuthenticatedRequest from "./useAuthenticatedRequest";

const useFlights = () => {
  const { trip } = useTripBuilder();
  const { makeAuthenticatedRequest } = useAuthenticatedRequest();

  const [isLoading, setIsLoading] = useState(false);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);

      const response = await makeAuthenticatedRequest(
        `/api/flights?destination=${trip?.destination}&fromDate=${trip?.startDate}&toDate=${trip?.endDate}`,
        "GET"
      );

      setFlights(response);
      setIsLoading(false);
    })();
  }, []);

  return [flights, isLoading];
};

export default useFlights;
