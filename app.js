const express = require("express");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "assets")));
app.set("view engine", "ejs");
app.set("views", "views"); // default

app.get("/", (req, res, next) => {
  //   res.send("hello");
  res.render("index.ejs");
});

app.listen(3000, (err) => {
  console.log("server listen on port 3000");
});
