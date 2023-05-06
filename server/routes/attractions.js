import express from "express";
import {
  getAttractionsFromLocation,
  getAttractionDetails,
} from "../services/attractionsService.js";

const attractions = express.Router();

attractions.get("/", async (req, res) => {
  // parse location from query string
  const location = req.query.location;

  const attrs = await getAttractionsFromLocation(location);

  const promises = [];
  for (const attr of attrs.data) {
    const { location_id } = attr;
    if (!location_id) {
      continue;
    }

    promises.push(getAttractionDetails(location_id));
  }

  const details = await Promise.all(promises);

  res.send(details);
});

export default attractions;
