const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(3000, () => {
  console.log("server started and you have started your backend journey"); // starting our server
});

app.get("/id/:username", (req, res) => {
  delete require.cache[require.resolve("./data.json")]; // force fresh load
  const data = require("./data.json");
  let name = req.params.username;
  let info = data[name];

  if (info) {
    res.render("instagram.ejs", { info });
  } else {
    res.render("error.ejs");
  }
});

app.get("/error", (req, res) => {
  res.render("error.ejs");
});
