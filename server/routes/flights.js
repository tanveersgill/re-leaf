import express from "express";
import { searchFlights } from "../services/flights/flightScraper.js";

const flights = express.Router();

flights.get("/", async (req, res) => {
  const { origin, destination, fromDate, toDate } = req.query;

  if (!destination || !fromDate || !toDate) {
    return res.status(400).send("Missing query parameters");
  }

  const flights = await searchFlights(
    origin || "Toronto, ON",
    destination,
    fromDate,
    toDate
  );

  res.send(flights);
});

export default flights;
