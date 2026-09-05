const express=require("express");
const app=express();//express mein app create krni hai
app.use(express.json());

const fs=require("fs");//fs ko isliye import kr rhe to save data on json file

