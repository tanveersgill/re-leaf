import { Router } from "express";
import { Types } from "mongoose";
import { getUserBySubject } from "../services/mongoService.js";
import Trip from "../database/models/trip.js";

const profile = Router();

const fetchUser = async (req, res, next) => {
  let subject = req.auth.payload.sub;
  let user = await getUserBySubject(subject);
  req.userProfile = user?.toObject();
  req.mongoUser = user;
  next();
};

profile.get("/", fetchUser, async (req, res) => {
  res.status(200).json(req.userProfile); // sends back null for user not found
});

profile.get("/trips", fetchUser, async (req, res) => {
  let tripObjectIds = [];
  for (const tripId of req.userProfile.tripIds) {
    let objId = Types.ObjectId(tripId);
    tripObjectIds.push(objId);
  }

  const trips = await Trip.find({ _id: { $in: tripObjectIds } }).exec();
  res.status(200).json({ trips });
});

profile.post("/trip/add", fetchUser, async (req, res) => {
  const trip = req.body;
  const newTrip = new Trip(trip);

  await newTrip.save();

  req.mongoUser.tripIds.push(newTrip._id);

  await req.mongoUser.save();

  res.status(200).json({ trip: newTrip });
});

export default profile;
