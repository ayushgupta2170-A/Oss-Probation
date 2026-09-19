const express=require("express");
const Admin=require("../models/Admin");
const Course=require("../models/Course");
const Purchase=require("../models/Purchase");
const jwt=require("jsonwebtoken");
const adminAuth=require("../middleware/adminAuth");

const bcrypt=require("bcrypt");//Admin ke password ko hash aur verify karne ke liye bcrypt use karenge

const loginLimiter=require("../middleware/loginLimiter");//Admin routes ko bhi wahi login limiter use karne ki permission mil jayegi.

const router=express.Router();



router.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    //new user create
        const admin=new Admin({
        name:name, 
        email:email,
        password:hashedPassword,
        });

    await admin.save();  
    res.send("admin created"); 
    //Admin Schema ✅
    //admin Signup ✅   
});



router.post("/login",loginLimiter,async(req,res)=>{
    const {email,password}=req.body;
        const admin=await Admin.findOne({email});

    if(admin==null){
    return res.send("admin not found");
    }
    if(!await bcrypt.compare(password,admin.password)){//Login wala password database ke hashed password se verify hoga.
    return res.send("Password wrong");
    }
    const token=jwt.sign( //JWT token banata hai.
      {adminId:admin._id},//token ke andar admin ki ID store kar rahe hain.
        process.env.JWT_SECRET  //token ke andar admin ki ID store kar rahe hain.
    );
    res.cookie("token",token,{httpOnly:true});
    res.send("Login successful");      
});//login successful hone par admin ko JWT token response mein milega.



router.post("/course",adminAuth,async(req,res)=>{//Sirf valid admin JWT wale request se course create hoga
    const {title,price,description,image}=req.body;

    const course=await Course.create({      //Admin→Login→JWt→Admin Auth→Create Course route  
            title:title,  
            price:price,
            description:description,
            image:image,
            createdBy:req.adminId
        });
           res.send("course created"); 
}); //Create Course complete.



router.delete("/course/:courseId",adminAuth,async(req,res)=>{//delete course ke liye hai
    const courseId=req.params.courseId;
    const course=await Course.findById(courseId);

    if(course==null){
        return res.send("course not found");
    }
    await Course.findByIdAndDelete(courseId);//course MongoDB se delete karta hai.
    res.send("course deleted");
});//Create Course + Delete Course dono complete.




router.put("/course/:courseId/content",adminAuth,async(req,res)=>{//Add Course Content route,put means coure updatekrne ke liye
    const courseId=req.params.courseId;
    const {content}=req.body;
    const course=await Course.findById(courseId);

    if(course==null){
        return res.send("course not found");
    }
    course.content=content;
    await course.save();
    res.send("course content added");//courses ko response mein bhejega
});//Add Course Content

router.post("/logout",(req,res)=>{
    res.clearCookie("token");
    res.send("Logout successful");
});






module.exports=router;