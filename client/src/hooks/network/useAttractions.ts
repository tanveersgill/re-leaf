import { useEffect, useState } from "react";
import { useTripBuilder } from "../../context/TripBuilderContext";
import useAuthenticatedRequest from "./useAuthenticatedRequest";

const useAttractions = () => {
  const { trip } = useTripBuilder();
  const { makeAuthenticatedRequest } = useAuthenticatedRequest();

  const [isLoading, setIsLoading] = useState(false);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);

      const response = await makeAuthenticatedRequest(
        `/api/activities?location=${trip?.destination}`,
        "GET"
      );

      setAttractions(response);
      setIsLoading(false);
    })();
  }, []);

  return [attractions, isLoading];
};

export default useAttractions;
