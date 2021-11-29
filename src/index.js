const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

//Settigs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname, "views/partials"), function () {});

//Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(process.env.PORT || 8080, () => {
  console.log("Server running");
});
