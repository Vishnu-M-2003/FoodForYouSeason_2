import mongoose from 'mongoose';
const { Schema } = mongoose;


const sellerSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    restaurantName: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    aadhaar: {
        type: Number,
        required: true
    },
    subscriBers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserSellerSchemaa"
        }
    ],
    contactNumber: {
        type: Number,
        require: true
    }

}, {
    timestamps: true
})

export default sellerSchema