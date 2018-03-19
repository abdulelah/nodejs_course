'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 * 
 */

const http = require('http')
const port = 3000

// callback function has two parameters as following:
// request: contains the content of the request
// response: is the utility to be used to send the response
//           once the application is ready to reply
const requestHandler = (request, response) => {
  console.log(request.url)
  response.writeHead(200, {'Content-type':'text/html'})
  response.write(`
  <html>
    <head><title>Welcome to my website</title></head>
    <body><h1>This is the first page</h1></body>
  </html>
  `)
  response.end()
}

// setting up the callback that are going to be used
// when a request event happens
const server = http.createServer(requestHandler)

// this function uses eventEmitter concept to recieve
// requests and execute instructions based on the
// callback that was set early
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})