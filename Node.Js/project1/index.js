const express=require("express");
const users=require("./MOCK_DATA.json");
const fs=require("fs");

const app=express();
const PORT=8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/api/users",(req,res)=>{
    return res.json(users);
});


app.get("/users",(req,res)=>{
    /*      aisa kuch hota hai html tag
       <ul>
          <li>ayush gupta</li>
    */ 
    const html =`
    <ul>
     ${users.map((user)=>`<li>${user.first_name}</li>`)}
    </ul>
     `;
     res.send(html);
});

app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return  res.json(user);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // Edit user with id
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    return  res.json({status:"pending"});
});




app.post("/api/users",(req,res)=>{
    //todo :create
    const body=req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return  res.json({status:"success",id:users.length});
    })
    
});






app.listen(PORT,()=>console.log(`server started at port ${PORT} `))