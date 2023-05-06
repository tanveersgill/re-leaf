import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    subjectId: { //to connect Auth0 to mongodb
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required:true, 
        unique: true
    },
    username: {
        type: String,
        required:true
    },
    tripIds: {
        type: [Schema.Types.ObjectId],
        default: []
    },
    points: {
        type: Number,
        default: 0,
        min: 0
    }
})

const User = mongoose.model('User', userSchema);
export default User;