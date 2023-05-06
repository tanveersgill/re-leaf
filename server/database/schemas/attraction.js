import mongoose, {Schema} from 'mongoose';

const attractionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

export default attractionSchema