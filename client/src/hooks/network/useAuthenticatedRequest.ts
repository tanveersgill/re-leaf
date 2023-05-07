import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const useAuthenticatedRequest = () => {
  const { getAccessTokenSilently } = useAuth0();

  const makeAuthenticatedRequest = async (
    url: string,
    method: string,
    body?: any
  ) => {
    const detailedToken = await getAccessTokenSilently({
      detailedResponse: true,
    });

    const response = await axios({
      method,
      url,
      data: body,
      headers: {
        Authorization: `Bearer ${detailedToken.access_token}`,
      },
      params: {
        id_token: detailedToken.id_token,
      },
    });
    return response.data;
  };

  return { makeAuthenticatedRequest };
};

export default useAuthenticatedRequest;