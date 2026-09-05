const express=require("express");
const app=express();//express mein app create krni hai
app.use(express.json());

const fs=require("fs");//fs ko isliye import kr rhe to save data on json file
const PORT=9000;

app.listen(PORT,()=>{
    console.log(`server started at PORT${PORT}`);
})

app.get("/tasks",(req,res)=>{
    fs.readFile("tasks.json","utf-8",(err,data)=>{
        //ab error handling krenge
        if(err){
            return res.status(500).json({error:"unable to read tasks"});
        }
        //json mein krke response bhejna hai'
        const tasks=JSON.parse(data);//json ko array object bnana hai
        return res.json(tasks);
    });
});

         //single task
app.get("/tasks/:id",(req,res)=>{
    fs.readFile("tasks.json","utf-8",(err,data)=>{
        if(err)return res.status(500).json({error:"Error"});
        const tasks=JSON.parse(data);
        const id=Number(req.params.id);

        const task=tasks.find(t=>t.id===id);//ye vali line task find krne ke liye hai
        //ab dekhenge ki task mila ya nhi
        if(!task)return res.status(404).json({error:"task not found"});
        //task return bhi krna hoga
        return res.json(task);
    });
});

app.post("/tasks",)





