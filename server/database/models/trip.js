import mongoose, {Schema} from 'mongoose';
import flightSchema from '../schemas/flight';
import attractionSchema from '../schemas/attraction';

import accomodations from '../../routes/accomodations';

const tripSchema = new Schema({
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }, 
    flight: {
        type: flightSchema,
        required: true
    }, 
    accomodation: {
        type: accomodationSchema,
        required: true
    },
    attractions: {
        type: [attractionSchema],
        required: true
    }
})

const tripModel = mongoose.model('Trip', tripSchema);
export default tripModel;