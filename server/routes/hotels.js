import express from "express";
import {
  getAttractionsFromLocation,
  getAttractionDetails,
} from "../services/tripAdvisorService.js";

const attractions = express.Router();

attractions.get("/", async (req, res) => {
  // parse location from query string
  const location = req.query.location;

  if (!location) {
    res.status(400).send("Missing location query parameter");
    return;
  }

  const attrs = await getAttractionsFromLocation(location, "hotels");

  const promises = [];
  for (const attr of attrs.data) {
    const { location_id } = attr;
    if (!location_id) {
      continue;
    }

    promises.push(getAttractionDetails(location_id));
  }

  const details = await Promise.all(promises);
  const filteredDetails = details.filter((detail) => detail);

  res.send(filteredDetails);
});

export default attractions;
