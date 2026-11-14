const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'dist');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8'};
const server=http.createServer((req,res)=>{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return;}
  let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end();return;}
  const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  fs.stat(file,(error,stat)=>{if(error||!stat.isFile()){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer'});
    if(req.method==='HEAD'){res.end();return;}fs.createReadStream(file).pipe(res);
  });
});
server.on('error',err=>{console.error('Could not start Schritt:',err.message);if(err.code==='EADDRINUSE')console.error('Port 8765 is already in use. Close the previous Schritt server or use the portable HTML file.');process.exitCode=1;});
server.listen(8765,'127.0.0.1',()=>{console.log('Schritt German Trainer');console.log('Open http://127.0.0.1:8765 in Chrome or Edge.');console.log('Keep this window open. Press Ctrl+C to stop.');});
