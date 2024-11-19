import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user-routes.js";


dotenv.config();

const app = express();
//middlewares
app.use("/user", userRouter);


mongoose
.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.8ufw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(()=>
      app.listen(3003,()=>{
            console.log("connected to database and server is running")
  })
)
 .catch((e)=> console.log(e));

