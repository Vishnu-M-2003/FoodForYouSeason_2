import express from "express";
const userRouter = express.Router();

import createUser  from "../../controllers/user/createUser.js";

userRouter.post("/create", createUser);
// userRouter.get("/:restorentname", sendItems);
// userRouter.delete("/:id", deleteItem);
// userRouter.put("/:id", editItem);

export default userRouter;
