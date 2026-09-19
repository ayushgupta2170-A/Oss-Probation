const mongoose= require("mongoose");

const userSchema =new mongoose.Schema({
     firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,//iska mtlb hai same id na ho
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    },
});

const User=mongoose.model("user",userSchema);//model bn gya hai

module.exports=User;


