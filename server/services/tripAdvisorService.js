import axios from "axios";
import { TRIP_ADVISOR_BASE_URL } from "../constants.js";

export const getAttractionsFromLocation = async (location, category) => {
  const latLong = await getLatitudeAndLongitudeStr(location);

  const queryParams = new URLSearchParams({
    key: process.env.TRIP_ADVISOR_API_KEY,
    language: "en",
    latLong,
  });

  if (category) {
    queryParams.append("category", category);
  }

  const queryString = queryParams.toString();

  const requestUrl = `${TRIP_ADVISOR_BASE_URL}/location/nearby_search/?${queryString}`;

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

const getLatitudeAndLongitudeStr = async (location) => {
  const requestUrl = `https://geocode.maps.co/search?q=${location}`;

  const response = await axios.get(requestUrl);

  const lat = response.data[0].lat;
  const lng = response.data[0].lon;

  return `${lat},${lng}`;
};
