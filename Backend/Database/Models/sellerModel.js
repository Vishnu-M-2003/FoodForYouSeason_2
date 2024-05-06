import mongoose from "mongoose";

import sellerSchema from "../Schema/sellerSchema.js";

const sellerModel = mongoose.model('sellerModel', sellerSchema);

export default sellerModel