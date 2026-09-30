import http from 'node:http'
import fs from 'node:fs/promises'

import path from 'path';
const PORT=process.env.PORT??9000

const httpServer=http.createServer(async function(req,res){
    const indexFile=await fs.readFile(path.resolve('./index.html'),'utf-8')
    res.setHeader('Content-Type','text/html');
    return res.end(indexFile);
});//http servr created

const wsServer=new WebSocketServer({server:httpServer});

wsServer.on('connection',(websocket)=>{
    console.log(`Websocket connection...`);
})


httpServer.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
}); 