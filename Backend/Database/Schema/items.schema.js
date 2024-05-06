import mongoose from 'mongoose';
const { Schema } = mongoose;


const itemSchema = new Schema({
    dishName: String,
    amount: Number,
    quantity: Number,
    category: String,
    restorentname: String
},{
    timestamps: true
})

export default itemSchema