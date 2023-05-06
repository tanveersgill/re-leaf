import express from "express";
import { getCategoriesFromLocation } from "../services/googlePlaceService.js";

const hotels = express.Router();

hotels.get("/", async (req, res) => {
  // parse location from query string
  const location = req.query.location;

  if (!location) {
    res.status(400).send("Missing location query parameter");
    return;
  }

  try {
    const hotels = await getCategoriesFromLocation(location, "lodging");
    res.send(hotels);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default hotels;
