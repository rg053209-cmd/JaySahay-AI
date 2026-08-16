const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const dir = __dirname;

const mimes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url;
  url = url.split('?')[0];
  const file = path.join(dir, url);
  const ext = path.extname(file);
  
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': mimes[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(port, '0.0.0.0', () => {
  console.log('JanSahay AI running on port ' + port);
});
