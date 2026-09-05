const express=require("express");
const users=require("./MOCK_DATA.json");

const app=express();
const PORT=8000;

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

app.listen(PORT,()=>console.log(`server started at port ${PORT} `))