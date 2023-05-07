import express from 'express'
import jwt_decode from 'jwt-decode'
import { getUserBySubject } from '../services/mongoService.js'; 
import User from '../database/models/user.js';

const authRoutes = express.Router();

authRoutes.post('/register', async (req, res) => {
    const {id_token} = req.query
    const decodedToken = jwt_decode(id_token)
    console.log("DECODED", decodedToken)
    console.log('registering')

    const registeredUser = User.create({
        subjectId: req.auth.payload.sub,
        email: decodedToken.email,
        username: decodedToken.name
    })

    res.status(200).json(registeredUser)
})

export default authRoutes;