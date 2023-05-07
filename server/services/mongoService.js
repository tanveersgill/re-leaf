import axios from 'axios'
import mongoose from 'mongoose'
import User from '../database/models/user.js'

export const getUserBySubject = async (sub) => {
    let user
    try {
        user = await User.findOne({subjectId: sub});
    } catch (err) {
        console.log(err)
    }
    return user
} 
 