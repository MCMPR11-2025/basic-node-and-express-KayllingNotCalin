let express = require('express');
let app = express();
// require('dotenv').config
console.log("Hello World");


app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
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