/// <reference path="../typings/node/node.d.ts"/>

import http = require("http");
import fs = require("fs");


const PORT = 8000

let server = http.createServer(onRequest)
                 .listen(PORT, ()=>{
                     console.log('listening on', PORT)
                 })


function onRequest(req:http.IncomingMessage, res:http.ServerResponse) {
    console.log(req.method, req.url)
    res.writeHead(200, {"Conent-Type": "text/plain"})
    res.end('Hello World!\n')
}

// fs.createWriteStream(res)
