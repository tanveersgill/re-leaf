import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
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
})

const userModel = mongoose.model('User', userSchema);
export default userModel;