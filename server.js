const express = require("express");
const path = require('path');

const app = express();
const port = 8000;

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
console.log("Server started at http://localhost:" + port);

app.listen(port)

