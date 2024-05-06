import mongoose from "mongoose";
import itemModel from "../../Database/Models/items.model.js";

const deleteItem = async (req, res) => {
  let { id } = req.params;
  await itemModel.findByIdAndDelete(id);
};

export { deleteItem };
