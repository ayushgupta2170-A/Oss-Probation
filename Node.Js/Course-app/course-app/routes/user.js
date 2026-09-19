const express=require("express");
const User=require("../models/user");
const userAuth=require("../middleware/userAuth");//User authentication middleware
const jwt=require("jsonwebtoken");
const loginLimiter=require("../middleware/loginLimiter");

const bcrypt=require("bcrypt");//isse kaam hoga,  jo password ko hash aur later verify karega

const router=express.Router();//user ke routes ko ek separate file mein manage 


router.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);//password ko secure hashed form mein convert karta hai, taaki original password database mein directly save na ho.
    const user=new User({
        name:name,
        email:email, 
        password:hashedPassword,// database mein original password ki jagah hashed password save hoga.
    });
    await user.save();
    res.send("user created");
});


router.post("/login",loginLimiter,async(req,res)=>{//Agar koi baar-baar login request bhejta hai, to limiter usko control karega.
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user==null){
        return res.send("user not found");
    }
    if(!await bcrypt.compare(password,user.password)){//User ka entered password aur database ka hashed password compare karke check karega ki password correct hai ya nahi.
        return res.send("Password wrong");
    }
    const token=jwt.sign(
        {userId:user._id},
        process.env.JWT_SECRET
    );
    res.cookie("token",token,{httpOnly:true});//httpOnly:true se browser ka normal JavaScript JWT cookie ko directly read nahi kar sakta, jo token theft ke risk ko reduce karta hai
    res.send("Login successful");//user ko login successful ka message deta hai.
});


router.get("/profile",userAuth,async(req,res)=>{
   const user=await User.findById(req.userId).select("-password");
    if(user==null){
        return res.send("user not found");
    }
    res.json(user);
});

router.post("/logout",(req,res)=>{
    res.clearCookie("token");//browser se JWT wali cookie hata deta hai, yani user logout ho jata hai.
    res.send("Logout successful");
});





//profile root

/*
routes/user.js
      ↓
router.post("/signup")
      ↓
index.js → app.use("/users",userRouter)
      ↓
POST /users/signup
*/

module.exports=router;