const express = require("express");

const {connectMongoDb}=require("./connection");


const{logReqRes}=require("./middlewares");
const userRouter =require("./routes/user"); 

const app=express();
const PORT=8000;

//connect mongodb
connectMongoDb("mongodb://127.0.0.1:27017/youtube-1").then(()=>console.log("MongoDb connected!"));
    
    
// Middleware--plugin
app.use(express.urlencoded({ extended: false }));//request vagera ko paas kiya hoga
app.use(logReqRes("log.txt"));

//routes
app.use("/api/users",userRouter);

app.listen(PORT,()=>console.log(`server started at port ${PORT} `))