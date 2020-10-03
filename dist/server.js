const express = require("express");
let app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
