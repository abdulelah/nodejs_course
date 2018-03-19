const express = require ('express');
const app = express ();
const port = 3000;

app.get ('/', (request, response) => {
    response.setHeader('Content-type', 'text/html')
    response.statusCode = 200
    response.send (`
    <html>
        <head><title>Welcome to my website</title></head>
        <body><h1>This is the first page</h1></body>
    </html>
    `);
});

app.listen (port, err => {
  if (err) {
    return console.log ('something bad happened', err);
  }

  console.log (`server is listening on ${port}`);
});
