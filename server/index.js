import express from 'express'
import { auth } from 'express-oauth2-jwt-bearer'
import dotenv from 'dotenv';
import attractions from './routes/attractions.js';

dotenv.config();

const router = express.Router();

router.use('/attractions', attractions);

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

app.listen(port);

console.log('Running on port ', port);