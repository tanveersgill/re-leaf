import express from "express";
import { searchFlights } from "../services/flights/headlessBrowser.js";

const flights = express.Router();

flights.get("/", async (req, res) => {
  const flights = await searchFlights("beijing, china", "new york, usa", "2023-06-1", "2023-06-5");

  res.send(flights);
});

export default flights;
