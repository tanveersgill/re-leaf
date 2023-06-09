import express from 'express'
import jwt_decode from 'jwt-decode'
import User from '../database/models/user.js';

const authRoutes = express.Router();

authRoutes.post('/register', async (req, res) => {
    const {id_token} = req.query
    const decodedToken = jwt_decode(id_token)

    const registeredUser = await User.create({
        subjectId: req.auth.payload.sub,
        email: decodedToken.email,
        username: decodedToken.name
    })
 
    res.status(200).json(registeredUser.toObject())
})

export default authRoutes;