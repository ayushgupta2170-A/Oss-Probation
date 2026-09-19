const mongoose=require("mongoose");//import krne se mongodb ke liye schema bna skte hai

const userSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});//schema bn gya but mongodb mein isko use krne ke liye model bnana hoga

//model ke cheezin rkhenge like user.js,admin.js,course.js,purchase.js
const User=mongoose.model("User",userSchema);//user --model ka naam hai,aur isko user mein store kr liya
//Ab User model ki help se hum MongoDB mein user ko create,find,update,delete kar sakte hain

module.exports=User;//yha model ka naam export krenge