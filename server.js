const http = require('http');
const fs = require('fs');
const path = require('path');

//Serve locally
const hostname = 'localhost';
const port = 3000;

//Return 404 page in case of error
const return404 = () => {
  filePath = path.resolve('./public/404.html');
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  fs.createReadStream(filePath).pipe(res);
}

//Create server for static files
const server = http.createServer((req, res) => {

  console.log('Request for ' + req.url + ' via method ' + req.method);

  //Only allow GET method; everything else returns 404
  if (req.method === 'GET') {

    let fileUrl;

    if (req.url == '/' || req.url =='/home') {
      fileUrl = '/index.html';

    } else fileUrl = req.url;
    
    //Find static file in /public
    let filePath = path.resolve('./public' + fileUrl);

    //Check if file extension exists
    const fileExt = path.extname(filePath);

    //Should only serve html files
    if (fileExt == '.html') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.createReadStream(filePath).pipe(res);

    } 
    else {
      return404();
      return;
    }
  } 
  else {
    return404();
    return;
  }
});

//Deploy server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});