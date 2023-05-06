import axios from "axios";
import { TRIP_ADVISOR_BASE_URL } from "../constants.js";

export const getAttractionsFromLocation = async (location) => {
  const queryParams = new URLSearchParams({
    key: process.env.TRIP_ADVISOR_API_KEY,
    searchQuery: location,
    language: "en",
    address: location,
  });

  const queryString = queryParams.toString();

  const requestUrl = `${TRIP_ADVISOR_BASE_URL}/location/search/?${queryString}`;

  const response = await axios.get(requestUrl);

  return response.data;
};

export const getAttractionDetails = async (locationId) => {
  const detailsParams = new URLSearchParams({
    key: process.env.TRIP_ADVISOR_API_KEY,
    language: "en",
    currency: "USD",
  });

  const imagesParams = new URLSearchParams({
    key: process.env.TRIP_ADVISOR_API_KEY,
    language: "en",
  });

  const detailsQueryString = detailsParams.toString();
  const imagesQueryString = imagesParams.toString();

  const detailsUrl = `${TRIP_ADVISOR_BASE_URL}/location/${locationId}/details?${detailsQueryString}`;
  const imageUrl = `${TRIP_ADVISOR_BASE_URL}/location/${locationId}/photos?${imagesQueryString}`;

  try {
    const responses = await Promise.all([
      axios.get(detailsUrl),
      axios.get(imageUrl),
    ]);

    const detailsResponse = responses[0].data;
    const imagesResponse = responses[1].data;

    return {
      image: imagesResponse?.data?.[0]?.images?.original?.url,
      name: detailsResponse?.name,
      description: detailsResponse?.description,
      address: detailsResponse?.address_obj,
      price_level: detailsResponse?.price_level,
      category: detailsResponse?.category?.name,
    };
  } catch (e) {
    return null;
  }
};
