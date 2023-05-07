import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useAuthenticatedRequest from "./useAuthenticatedRequest";

//will return profile if it exists in mongo, or create it and then return it
export default function useProfile() {
  const { makeAuthenticatedRequest } = useAuthenticatedRequest();
  const { isAuthenticated, user } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({ username: "loading" });

  useEffect(() => {
    (async () => {
      if (!isAuthenticated) return;
      const p = await makeAuthenticatedRequest(`/api/profile`, "GET");
      if (p) {
        setProfile(p);
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

  return { isLoading, profile, addTrip };
}
