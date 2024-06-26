import mongoose from 'mongoose';
const { Schema } = mongoose;


const customerSchema = new Schema({
       userName: {
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
       }

}, {
       timestamps: true
})

export default customerSchema