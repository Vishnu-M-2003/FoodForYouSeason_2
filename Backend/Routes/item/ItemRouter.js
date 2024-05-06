import express from "express";
const itemRouter = express.Router();

import { createItem } from "../../controllers/item/createItemController.js";
import { sendItems } from "../../controllers/item/sendItemsController.js";
import { deleteItem } from "../../controllers/item/deleteItemController.js";
import { editItem } from "../../controllers/item/editItemController.js";

itemRouter.post("/create", createItem);
itemRouter.get("/:restorentname", sendItems);
itemRouter.delete("/:id", deleteItem);
itemRouter.put("/:id", editItem);

export default itemRouter;
