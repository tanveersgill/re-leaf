import express from "express";
import { getCategoriesFromLocation } from "../services/googlePlaceService.js";

const attractions = express.Router();

attractions.get("/", async (req, res) => {
  // parse location from query string
  const location = req.query.location;

  if (!location) {
    res.status(400).send("Missing location query parameter");
    return;
  }

  try {
    const attractions = await getCategoriesFromLocation(
      location,
      "tourist_attraction"
    );
    res.send(attractions);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default attractions;
