const http = require('http');

const server = http.createServer((req, res) => {
  // ... request handling logic ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//This is a simple server that does not handle errors and might crash unexpectedly if an error occurs during request handling. For example, if a request to an external service fails it could crash the application. 