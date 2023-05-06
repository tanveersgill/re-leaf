import axios from "axios";
import { GOOGLE_API_BASE_URL } from "../constants.js";

export const getCategoriesFromLocation = async (location, category) => {
  const latLong = await getLatitudeAndLongitudeStr(location);

  const queryParams = new URLSearchParams({
    key: process.env.GOOGLE_API_KEY,
    location: latLong,
    radius: 20000,
    type: category,
  });

  const queryString = queryParams.toString();

  const requestUrl = `${GOOGLE_API_BASE_URL}/place/nearbysearch/json?${queryString}`;

  const response = await axios.get(requestUrl);

  return formatResponse(response.data.results);
};

const getLatitudeAndLongitudeStr = async (location) => {
  const requestUrl = `https://geocode.maps.co/search?q=${location}`;

  const response = await axios.get(requestUrl);

  const lat = response.data[0].lat;
  const lng = response.data[0].lon;

  return `${lat},${lng}`;
};

const formatResponse = async (rawRes) => {
  for (let i = 0; i < rawRes.length; i++) {
    const place = rawRes[i];

    rawRes[i] = {
      name: place.name,
      address: place.vicinity,
      rating: place.rating,
      categories: place.types,
      location: place.geometry.location,
    };
  }

  return rawRes;
};
