const express= require ("express");
const {connectToMongoDB}=require("./connect");
const path=require("path");
const staticRouter=require("./routes/staticRouter")

const urlRoute=require("./routes/url");
const URL=require('./model/url');

const app=express();
const PORT=8080;

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>
    console.log(" mongodb connected")
);

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/test",async(req,res)=>{
    const allUrls=await URL.find({});
    return res.render('home',{
        urls:allUrls,
        name:"ayush",
    });
});
app.use("/url",urlRoute);
app.use("/",staticRouter);

app.use('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;

    const entry=await URL.findOneAndUpdate(
    {
        shortId,

    },
    {
        $push:{
            visitHistory:{
                timestamp:Date.now(),
            },
       }
    }
);

if(!entry){
    return res.status(404).send("short URL not found");
}
res.redirect(entry.redirectURL);
});

app.listen(PORT,()=>console.log(`server started at PORT:${PORT}`))