const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // ... request handling logic ...
    res.end();
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//This solution uses a try...catch block to handle exceptions, and provides a more user-friendly response in case an error occurs.  Logging the error with a stack trace also helps in debugging.