const mongoose=require("mongoose");
const purchaseSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    },
    purchasedAt:{
        type:Date,
        default:Date.now
    }
});
const Purchase=mongoose.model("Purchase",purchaseSchema);
module.exports=Purchase;






/*
            Simple meaning:
userId → kis User ne course kharida.
courseId → konsa Course kharida.
purchasedAt → purchase kab hua.
ref:"User" / ref:"Course" → IDs ko respective models se connect karta hai.
Purchase → MongoDB ke saath purchase data par kaam karne wala model.
module.exports=Purchase → doosri files mein Purchase model use karne ke liye export.
*/

//Admin Signup + Login karenge