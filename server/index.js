import express from 'express'
import { auth } from 'express-oauth2-jwt-bearer'

const app = express();

const port = process.env.PORT || 3000;

const jwtCheck = auth({
  audience: 'http://localhost:3000',
  issuerBaseURL: 'https://dev-o8pk24f3t812sdqo.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);

console.log('Running on port ', port);