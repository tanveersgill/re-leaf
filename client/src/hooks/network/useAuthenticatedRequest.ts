import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const useAuthenticatedRequest = () => {
  const { getAccessTokenSilently } = useAuth0();

  const makeAuthenticatedRequest = async (
    url: string,
    method: string,
    body?: any
  ) => {
    const token = await getAccessTokenSilently();
    const response = await axios({
      method,
      url,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  return { makeAuthenticatedRequest };
};

export default useAuthenticatedRequest;
