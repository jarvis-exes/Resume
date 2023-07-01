const http = require('http');
const port = 9000;
const fs = require('fs');
const server = http.createServer(requestHandler);

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200, {'content-type':'text/html'});

    let filePath;

    switch(req.url){
        case '/':
            filePath = './Resume.html'
            break;

        default:
            filePath = './404.html'
            break;
    }

    fs.readFile(filePath,function(err,data){
        if(err){
            console.log(err);
            return res.end('Error!!');
        }
        return res.end(data);
    });
}

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("The server is up and running on port",port);
});
