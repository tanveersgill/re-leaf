import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useAuthenticatedRequest from "./useAuthenticatedRequest";

//will return profile if it exists in mongo, or create it and then return it
export default function useProfile() {
  const { makeAuthenticatedRequest } = useAuthenticatedRequest();
  const { isAuthenticated, user } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({ username: "loading" });
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    (async () => {
      if (!isAuthenticated) return;
      const [profileRes, tripRes] = await Promise.all([
        makeAuthenticatedRequest(`/api/profile`, "GET"),
        makeAuthenticatedRequest(`/api/profile/trips`, "GET"),
      ]);
      if (profileRes) {
        setProfile(profileRes);
        setTrips(tripRes.trips);
        return;
      }
      const registeredProfile = await makeAuthenticatedRequest(
        `/api/auth/register`,
        "POST"
      );
      setProfile(registeredProfile);
      setIsLoading(false);
    })();
  }, [user, isAuthenticated]);

  const addTrip = async (trip) => {
    const updatedProfile = await makeAuthenticatedRequest(
      `/api/profile/trip/add`,
      "POST",
      trip
    );
    setProfile(updatedProfile);
  };

  return { isLoading, profile, trips, addTrip };
}
