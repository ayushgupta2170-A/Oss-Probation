//Sabse pehle schema banega, kyunki course ko database mein save karne
//  ke liye pehle decide karna padega ki course mein kaunsi information hogi.

const mongoose = require("mongoose");
const courseSchema=new mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    image:{          //image mein course ka url rkhege
        type:String
    },
    createdBy:{//ye btayega ki kis admin ne bnayya hai
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin"     //ye ID Admin model ke document ko refer karegi.
    },
    content:{
       type:String
    }   
});

const Course=mongoose.model("Course",courseSchema);//course schema ko close krte hai
module.exports=Course;