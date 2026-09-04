//auto built package
const http=require("http");//ye khud ka http module hota hai isse ek server bnayenge
const fs=require("fs");
const url=require("url");

const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico")return res.end();
    const log=`${Date.now()}: ${req.url}new req recieved\n`;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case'/':res.end("homepage");
            break;
            case '/about':res.end("i am ayush");
            break;
            default:res.end("404 not found");
        }
     res.end("hello from server again");    
    });
    //console.log(req.headers);
    
});
myServer.listen(8000,()=>console.log("server started!"));

//hmne ek web server http module se
//always non blocking task