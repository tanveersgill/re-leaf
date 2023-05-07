import {Schema} from 'mongoose';

const placeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    photoReference: {
        type: String,
        required: true
    },
})

export default placeSchema