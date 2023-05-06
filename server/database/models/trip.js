import mongoose, { Schema } from "mongoose";
import flightSchema from "../schemas/flight.js";
import attractionSchema from "../schemas/attraction.js";
import accommodationSchema from "../schemas/accommodation.js";

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
    type: accommodationSchema,
    required: true,
  },
  attractions: {
    type: [attractionSchema],
    required: true,
  },
});

const Trip = mongoose.model("Trip", tripSchema);
export default Trip;
