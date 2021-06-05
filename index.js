//import modules
let http = require('http')
let url = require('url');
let fs = require('fs')

// create server object
http.createServer((req, res) =>{
    var q = url.parse(req.url, true);
    console.log("Path: "+q.pathname);
    let filename;
    if(q.pathname === '/'){
        filename = `.${q.pathname}index.html`;
    }
    else if(q.pathname == '/about'){
        filename = `.${q.pathname}.html`;
    }
    else if(q.pathname == '/contact-me'){
        filename = `.${q.pathname}.html`;
    }
    else{
        filename = './404.html';
    }
    console.log(filename)
    fs.readFile(filename, (err, data) =>{
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080)