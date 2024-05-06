import mongoose from "mongoose";
import customerSchema from "../Schema/customerSchema.js";

const customerModel = mongoose.model('customerModel', customerSchema);

export default customerModel 