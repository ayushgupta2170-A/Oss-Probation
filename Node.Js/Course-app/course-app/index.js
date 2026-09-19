const User=require("./models/user");//user model import krna 
const Course=require("./models/Course"); 
const Purchase=require("./models/Purchase");//Purchase model ko index.js mein ,MongoDB mein save kar saken. 
const adminRouter=require("./routes/admin"); 
const userRouter=require("./routes/user"); 
const mongoose=require("mongoose");//node.js+mongodb connection 
const express = require("express");
const cookieParser=require("cookie-parser");//Express ko browser ki cookies read karne mein help hoga
const dns = require("dns"); 
dns.setServers(["8.8.8.8"]); 
require("dotenv").config();//env ke andr ki vlues read krna 
const app=express(); 
app.use(cookieParser());//browser ki cookies read kar sakenge
app.use(express.json());//use ka mean--req ki body mein aanevala json data ko read krne mein help krt hai 
app.use("/admin",adminRouter); 
app.use("/users",userRouter); 
const userAuth=require("./middleware/userAuth");//middleware se connect kiya 

mongoose.connect(process.env.MONGO_URL,{
    family:4
})
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log("MongoDB connection error:",err);
});

app.get("/",(req,res)=>{
    res.send("hello");
});

app.get("/courses",async(req,res)=>{
    const courses=await Course.find();
    res.json(courses);
});//courses done

app.post("/courses/:courseId/purchase",userAuth,async(req,res)=>{//User course purchase karne ke liye request bhejega.
    const courseId=req.params.courseId;
    const course=await Course.findById(courseId);

    if(course==null){
        return res.send("course not found");
    }

    const purchase=await Purchase.create({
        userId:req.userId,
        courseId:courseId
    });

    res.send("course purchased");
});//purchased code

app.get("/users/purchases",userAuth,async(req,res)=>{
    const purchases=await Purchase.find({
        userId:req.userId
    }).populate("courseId");

    res.json(purchases);
});

const PORT=3000; 
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});