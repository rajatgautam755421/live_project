const express = require("express");
const app = express();
const Port = process.env.port || 5000;

app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(Port, () => {
  console.log(`Server at ${Port}`);
});
