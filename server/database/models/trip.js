import mongoose, { Schema } from "mongoose";
import flightSchema from "../schemas/flight.js";
import placeSchema from "../schemas/place.js";

const tripSchema = new Schema({
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  flight: {
    type: flightSchema,
    required: true,
  },
  accommodation: {
    type: placeSchema,
    required: true,
  },
  attractions: {
    type: [placeSchema],
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  }
});

const Trip = mongoose.model("Trip", tripSchema);
export default Trip;
