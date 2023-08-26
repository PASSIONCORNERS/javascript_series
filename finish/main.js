// Nodejs

// let myNumber = 6;

// let myResult = 6 + myNumber;

// console.log(myResult);
let http = require("http");

let myServer = http.createServer(function (req, res) {
  // console.log(req.url);
  // res.end("Hello World");
  if (req.url == "/") {
    res.end("Hello World");
  }
  if (req.url == "/login") {
    res.end("Hello User");
  }
});

myServer.listen(3000);
