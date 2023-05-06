import axios from 'axios'
import mongoose from 'mongoose'
import User from '../database/models/user'

export const getUserBySubject = async (sub) => {
    const user = await User.findOne(sub);
    return user;
} 
 