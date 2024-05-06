import mongoose from 'mongoose'

const connectDatabase = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/food');
    console.log("Database connected")
}

export default connectDatabase