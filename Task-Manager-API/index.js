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

app.post("/tasks", (req, res) => {
    const tasks = getTasks();
    const { title, completed } = req.body;

    if (!title||title.trim()==="")
        return res.status(400).json({ message: "Title is required" });

    const newTask = {
        id: tasks.length ? tasks[tasks.length-1].id+1:1,
        title: title,
        completed: completed===true
    };

    tasks.push(newTask);
    saveTasks(tasks);

    res.status(201).json({
        message: "Task created successfully",
        task: newTask
    });
});
    //update task ke liye
app.put("/tasks/:id", (req, res) =>{
    const tasks = getTasks();
    const id = Number(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index===-1)
        return res.status(404).json({ message: "Task not found" });

    const {title,completed}=req.body;

    if (!title||title.trim()=== "")
        return res.status(400).json({ message: "Title is required" });

    tasks[index].title = title;

    if (typeof completed==="boolean")
        tasks[index].completed = completed;

    saveTasks(tasks);

    res.status(200).json({
        message: "Task updated successfully",
        task: tasks[index]
    });
});
     //delete krne ke liye
app.delete("/tasks/:id",(req, res) => {
    const tasks = getTasks();
    const id = Number(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index===-1)
        return res.status(404).json({ message: "Task not found" });

    const deletedTask = tasks.splice(index, 1)[0];
    saveTasks(tasks);

    res.status(200).json({
        message: "Task deleted successfully",
        task: deletedTask
    });
});

//server start krne ke liye
app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
});