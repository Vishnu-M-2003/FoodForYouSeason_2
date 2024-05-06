import { Server } from "socket.io";
import express from "express";
import { createServer } from 'node:http';

import connectDatabase from "./mongoose.js";
import bodyParser from "body-parser";
import cors from "cors";

import itemRouter from "./Routes/item/ItemRouter.js";
import userRouter from "./Routes/user/userRoute.js";

const router = express.Router();
const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use("/item", itemRouter);
app.use("/user", userRouter);

io.on('connection', (socket) => {
  console.log('connected to the client', socket.id);

  socket.on("Listing-Created" ,(data) => {
    console.log(data)
    io.emit("Refresh-Listing", "Change in the listing")
  })
  socket.on("disconnect" ,(data) => {
    console.log(`hi there ${data}`)
  })
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);

  // Function to connect database
  connectDatabase()

});

export default app;

