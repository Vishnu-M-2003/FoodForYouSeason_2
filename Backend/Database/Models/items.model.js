import mongoose from "mongoose";
import itemSchema from "../Schema/items.schema.js";

const itemModel = mongoose.model('itemModel', itemSchema);

export default itemModel