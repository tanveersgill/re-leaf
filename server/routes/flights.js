import express from "express";
import { getFlightPage } from "../services/flights/headlessBrowser.js";

const flights = express.Router();

flights.get("/", async (req, res) => {
  const flightPage = await getFlightPage();
  flightPage.searchFlights("beijing, china", "new york, usa", "2023-05-23", "2023-05-24");

  res.send("ok");
});

export default flights;
