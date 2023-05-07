import express, {Router} from 'express'
import { getUserBySubject } from '../services/mongoService.js'

const profile = Router()

profile.get('/', async (req, res, next) => {
    console.log('getting profile')
    let subject = req.auth.payload.sub
    let user = await getUserBySubject(subject);
    res.status(200).json(user); // sends back null for user not found
})
export default profile