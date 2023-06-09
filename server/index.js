import express from "express";
import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import attractions from "./routes/attractions.js";
import hotels from "./routes/hotels.js";
import authRoutes from "./routes/auth.js";
import profile from "./routes/profile.js";
import { MONGODB_URI } from "./constants.js";
import flights from "./routes/flights.js";
import { cacheMiddleware } from "./middleware/cache.js";

dotenv.config();

const router = express.Router();
router.use(bodyParser.json());

router.use("/attractions", attractions);
router.use("/hotels", hotels);
router.use("/flights", cacheMiddleware, flights);
router.use("/auth", authRoutes);
router.use("/profile", profile);

const port = process.env.PORT || 3000;

const jwtCheck = auth({
  audience: "http://localhost:3000",
  issuerBaseURL: "https://dev-o8pk24f3t812sdqo.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

// enforce on all endpoints
const app = express();
app.use(jwtCheck);
app.use(router);

const serverInit = async () => {
  try {
    //only start server on connection to mongodb
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    app.listen(port);
    console.log("Server running on port ", port);
  } catch (err) {
    console.log(err);
  }
};

serverInit();
