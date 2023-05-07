import {Schema} from 'mongoose';

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true
    },
    cost: {
        type: String, 
        required: true
    },
    emissions: {
        type: String, 
        required: true
    },
    emissionReduction: {
        type: String,
        required: true
    }
})

export default flightSchema