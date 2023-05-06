import mongoose, {Schema} from 'mongoose';

const flightSchema = new Schema({
    carrier: {
        type: String,
        required: true
    },
    carbonEmission: {
        type: Number, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    }
})

export default flightSchema