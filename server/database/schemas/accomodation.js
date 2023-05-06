import mongoose, {Schema} from 'mongoose';

const accomodationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        min: 1, 
        max: 5,
        required: true
    }
})

export default accomodationSchema