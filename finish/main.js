// Express

let express = require("express");

let myApp = express();

myApp.use(express.urlencoded({ extended: false }));

myApp.get("/", function (req, res) {
  res.send(`
   <form action="/answer" method="POST">
   <p>What is 2 + 2</p>
   <input name="answer"></input>
   <button>Submit</button>
   </form>
   `);
});

myApp.post("/answer", function (req, res) {
  // res.send("TESTING SUCCESS");
  if (req.body.answer == 4) {
    res.send(`
      <p>Correct Answer</p>
      <a href="/">Return</a>
      `);
  } else {
    res.send(`
      <p>Wrong Answer</p>
      <a href="/">Return</a>
      `);
  }
});

myApp.listen(3000);
