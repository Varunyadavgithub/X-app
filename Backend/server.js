import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";

dotenv.config();

dbConnection();
const app=express();

// Middlewares
app.use(express.urlencoded({
    extends:true
}));
app.use(express.json());
app.use(cookieParser());

// route (APIs)
app.use("/api/v1/user",userRoute);
app.use("/api/v1/tweet",tweetRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server is listen on port ${process.env.PORT}`);
})