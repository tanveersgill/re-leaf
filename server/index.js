import express from 'express'
import { auth } from 'express-oauth2-jwt-bearer'
import dotenv from 'dotenv';
import mongoose from 'mongoose'

import attractions from './routes/attractions.js';
import hotels from './routes/hotels.js';
import { MONGODB_URI } from './constants.js';

dotenv.config();

const router = express.Router();

router.use('/attractions', attractions);
router.use('/hotels', hotels)

const port = process.env.PORT || 3000;

const jwtCheck = auth({
  audience: 'http://localhost:3000',
  issuerBaseURL: 'https://dev-o8pk24f3t812sdqo.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
const app = express();
app.use(jwtCheck);
app.use(router);

const serverInit = async () => {
  try { //only start server on connection to mongodb
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB')
    app.listen(port);
    console.log('Server running on port ', port);

  } catch (err) {
    console.log(err)
  }
}

serverInit();
