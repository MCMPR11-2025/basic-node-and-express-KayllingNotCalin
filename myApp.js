let express = require('express');
let app = express();
require('dotenv').config()
console.log("Hello World");
var bodyParser = require("body-parser");

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});


app.use(bodyParser.urlencoded({ extended: false }));


app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  var { first: firstName, last: lastName } = req.query;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  var { first: firstName, last: lastName } = req.query;
  res.json({
    name: `${firstName} ${lastName}`
  });
});


app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});

app.get("/json", function(req, res) {
  var response = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") {
      response = "Hello json".toUpperCase();
    } else {
      response = "Hello json";
    }
    
    res.json({
      "message": response
  });
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/", function(req, res) {
    res.send("Hello Express")
});























 module.exports = app;
// node server.js