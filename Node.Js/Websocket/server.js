import http from 'node:http'//
const PORT=process.env.PORT??9000

const httpServer=http.createServer(async function(req,res){});//http servr created

httpServer.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});