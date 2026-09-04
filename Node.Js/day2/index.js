//auto built package
const http=require("http");//ye khud ka http module hota hai isse ek server bnayenge
const fs=require("fs");
const url=require("url");
const express=require("express");

const app=express();

app.get

function myHandler(req,res){
    const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico")return res.end();
    const log=`${Date.now()}: ${req.url}new req recieved\n`;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);

    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case'/':
        if(req.method==="GET")res.end("homepage");
            break;
            case '/about':
            const username=myUrl.query.myname;
            res.end(`Hi ,${userName}`);
            break;
            default:res.end("404 not found");
        }
     res.end("hello from server again");    
    });
    //console.log(req.headers);
    
});
}
const myServer=http.createServer(myHandler);


myServer.listen(8000,()=>console.log("server started!"));

//hmne ek web server http module se
//always non blocking task