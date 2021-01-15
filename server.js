const express = require("express");
let app = express();
const port = 3000;

// server your css as static
app.use(express.static(__dirname + '/public'))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
})
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/index.html");
})
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
