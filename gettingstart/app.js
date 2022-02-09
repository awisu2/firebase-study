const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/view", express.static(__dirname + "/view"));
app.use("/static", express.static(__dirname + "/dist"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
